using Microsoft.EntityFrameworkCore;
using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Models.DTOs.Orders;
using DotNet_Starter_Template.Models.ViewModels.Orders;
using DotNet_Starter_Template.Models.ViewModels.Tickets;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Repositories.Interfaces;
using DotNet_Starter_Template.Services.Interfaces;
using DotNet_Starter_Template.Data;

namespace DotNet_Starter_Template.Services.Implementations
{
    public class OrderService : IOrderService
    {
        private readonly ITicketRepository _ticketRepository;
        private readonly IOrderRepository _orderRepository;
        private readonly ICustomerRepository _customerRepository;
        private readonly IMenuItemRepository _menuItemRepository;
        private readonly IPortionRepository _portionRepository;
        private readonly IPortionDetailRepository _portionDetailRepository;
        private readonly ApplicationDbContext _context;

        public OrderService(
            ITicketRepository ticketRepository,
            IOrderRepository orderRepository,
            ICustomerRepository customerRepository,
            IMenuItemRepository menuItemRepository,
            IPortionRepository portionRepository,
            IPortionDetailRepository portionDetailRepository,
            ApplicationDbContext context)
        {
            _ticketRepository = ticketRepository;
            _orderRepository = orderRepository;
            _customerRepository = customerRepository;
            _menuItemRepository = menuItemRepository;
            _portionRepository = portionRepository;
            _portionDetailRepository = portionDetailRepository;
            _context = context;
        }

        public async Task<ApiResponse<OrderResponseViewModel>> PlaceOrderAsync(PlaceOrderDto placeOrderDto)
        {
            try
            {
                // Validate order items first
                if (placeOrderDto.OrderItems == null || placeOrderDto.OrderItems.Count == 0)
                {
                    return ApiResponse<OrderResponseViewModel>.ErrorResult("Order must contain at least one item");
                }

                // Handle customer - create if doesn't exist
                Customer customer;
                int customerId;

                // PRIORITY: Always check CustomerInfo first if provided (regardless of CustomerId)
                // This ensures we can create customers even if CustomerId is accidentally sent
                if (placeOrderDto.CustomerInfo != null)
                {
                    // Validate required fields in CustomerInfo
                    if (string.IsNullOrWhiteSpace(placeOrderDto.CustomerInfo.Phone))
                    {
                        return ApiResponse<OrderResponseViewModel>.ErrorResult("Customer phone number is required");
                    }
                    if (string.IsNullOrWhiteSpace(placeOrderDto.CustomerInfo.FirstName))
                    {
                        return ApiResponse<OrderResponseViewModel>.ErrorResult("Customer first name is required");
                    }

                    // Check if customer already exists by phone
                    var existingCustomer = await _customerRepository.GetByPhoneAsync(placeOrderDto.CustomerInfo.Phone.Trim());
                    if (existingCustomer != null)
                    {
                        customer = existingCustomer;
                        customerId = customer.Id;
                    }
                    else
                    {
                        // Create new customer
                        try
                        {
                            customer = await CreateCustomerFromInfoAsync(placeOrderDto.CustomerInfo);
                            if (customer == null)
                            {
                                return ApiResponse<OrderResponseViewModel>.ErrorResult("Failed to create customer. Please check your information and try again.");
                            }
                            customerId = customer.Id;
                        }
                        catch (Exception ex)
                        {
                            return ApiResponse<OrderResponseViewModel>.ErrorResult($"Failed to create customer: {ex.Message}");
                        }
                    }
                }
                else if (placeOrderDto.CustomerId.HasValue && placeOrderDto.CustomerId.Value > 0)
                {
                    // Only use CustomerId if CustomerInfo is NOT provided
                    customer = await _customerRepository.GetByIdAsync(placeOrderDto.CustomerId.Value);
                    if (customer == null)
                    {
                        return ApiResponse<OrderResponseViewModel>.ErrorResult("Customer not found. Please provide customer information.");
                    }
                    customerId = customer.Id;
                }
                else
                {
                    // Neither CustomerInfo nor valid CustomerId provided
                    return ApiResponse<OrderResponseViewModel>.ErrorResult("Customer information is required. Please provide CustomerInfo with firstName and phone.");
                }

                // Validate customer is active
                if (!customer.IsActive)
                {
                    return ApiResponse<OrderResponseViewModel>.ErrorResult("Customer account is inactive");
                }

                // Handle customer address
                int? customerAddressId = placeOrderDto.CustomerAddressId;
                
                // If address info is provided in CustomerInfo, create it
                // Only create address if it has valid data (not just empty strings)
                if (placeOrderDto.CustomerInfo?.Address != null && !customerAddressId.HasValue)
                {
                    var addressInfo = placeOrderDto.CustomerInfo.Address;
                    // Validate that address has required fields if address object is provided
                    if (!string.IsNullOrWhiteSpace(addressInfo.AddressLine1) && 
                        !string.IsNullOrWhiteSpace(addressInfo.City))
                    {
                        var address = await CreateCustomerAddressFromInfoAsync(customerId, addressInfo);
                        if (address != null)
                        {
                            customerAddressId = address.Id;
                        }
                    }
                }

                // If no address ID yet, try to get default address
                if (!customerAddressId.HasValue)
                {
                    var defaultAddress = await _customerRepository.GetDefaultAddressAsync(customerId);
                    customerAddressId = defaultAddress?.Id;
                }

                // Validate all menu items exist and are available
                foreach (var item in placeOrderDto.OrderItems)
                {
                    var menuItem = await _menuItemRepository.GetByIdAsync(item.MenuItemId);
                    if (menuItem == null)
                    {
                        return ApiResponse<OrderResponseViewModel>.ErrorResult($"Menu item with ID {item.MenuItemId} not found");
                    }

                    if (!menuItem.IsAvailable)
                    {
                        return ApiResponse<OrderResponseViewModel>.ErrorResult($"Menu item '{menuItem.Name}' is not available");
                    }

                    // Validate portion if provided
                    if (item.PortionId.HasValue)
                    {
                        var portion = await _portionRepository.GetByIdAsync(item.PortionId.Value);
                        if (portion == null || portion.MenuItemId != item.MenuItemId)
                        {
                            return ApiResponse<OrderResponseViewModel>.ErrorResult($"Invalid portion for menu item '{menuItem.Name}'");
                        }

                        if (!portion.IsActive)
                        {
                            return ApiResponse<OrderResponseViewModel>.ErrorResult($"Portion '{portion.Name}' is not active");
                        }

                        // Validate portion detail if provided
                        if (item.PortionDetailId.HasValue)
                        {
                            var portionDetail = await _portionDetailRepository.GetByIdAsync(item.PortionDetailId.Value);
                            if (portionDetail == null || portionDetail.PortionId != item.PortionId.Value)
                            {
                                return ApiResponse<OrderResponseViewModel>.ErrorResult($"Invalid portion detail for portion '{portion.Name}'");
                            }
                        }
                    }
                }

                // Generate ticket number
                var ticketNumber = await _ticketRepository.GenerateTicketNumberAsync();

                // Calculate total amount
                var totalAmount = placeOrderDto.OrderItems.Sum(item => item.Price * item.Quantity);

                // Create ticket
                var ticket = new Ticket
                {
                    TicketNumber = ticketNumber,
                    Date = DateTime.UtcNow,
                    LastUpdateTime = DateTime.UtcNow,
                    LastOrderDate = DateTime.UtcNow,
                    LastPaymentDate = DateTime.UtcNow,
                    IsClosed = false,
                    IsLocked = false,
                    RemainingAmount = totalAmount,
                    TotalAmount = totalAmount,
                    DepartmentId = placeOrderDto.DepartmentId,
                    TicketTypeId = placeOrderDto.TicketTypeId,
                    Note = placeOrderDto.Note,
                    ExchangeRate = placeOrderDto.ExchangeRate,
                    TaxIncluded = placeOrderDto.TaxIncluded,
                    Name = placeOrderDto.Name,
                    CustomerId = customerId,
                    CustomerAddressId = customerAddressId
                };

                var createdTicket = await _ticketRepository.CreateAsync(ticket);

                // Create orders
                var orders = new List<Order>();
                int orderNumber = 1;

                foreach (var itemDto in placeOrderDto.OrderItems)
                {
                    var menuItem = await _menuItemRepository.GetByIdAsync(itemDto.MenuItemId);
                    
                    var order = new Order
                    {
                        TicketId = createdTicket.Id,
                        WarehouseId = itemDto.WarehouseId,
                        DepartmentId = itemDto.DepartmentId,
                        MenuItemId = itemDto.MenuItemId,
                        PortionId = itemDto.PortionId,
                        PortionDetailId = itemDto.PortionDetailId,
                        MenuItemName = menuItem?.Name,
                        PortionName = itemDto.PortionId.HasValue 
                            ? (await _portionRepository.GetByIdAsync(itemDto.PortionId.Value))?.Name 
                            : null,
                        Price = itemDto.Price,
                        Quantity = itemDto.Quantity,
                        PortionCount = itemDto.PortionCount,
                        Locked = false,
                        CalculatePrice = itemDto.CalculatePrice,
                        DecreaseInventory = itemDto.DecreaseInventory,
                        IncreaseInventory = itemDto.IncreaseInventory,
                        OrderNumber = orderNumber++,
                        CreatedDateTime = DateTime.UtcNow,
                        AccountTransactionTypeId = itemDto.AccountTransactionTypeId,
                        PriceTag = itemDto.PriceTag,
                        Tag = itemDto.Tag
                    };

                    orders.Add(order);
                }

                // Save all orders
                foreach (var order in orders)
                {
                    await _orderRepository.CreateAsync(order);
                }

                // Update customer statistics
                customer.TotalOrders += 1;
                customer.TotalSpent += totalAmount;
                customer.LastOrderDate = DateTime.UtcNow;
                if (customer.FirstOrderDate == null)
                {
                    customer.FirstOrderDate = DateTime.UtcNow;
                }
                await _customerRepository.UpdateAsync(customer);

                // Get ticket with orders for response
                var ticketWithOrders = await _ticketRepository.GetByIdWithOrdersAsync(createdTicket.Id);
                if (ticketWithOrders == null)
                {
                    return ApiResponse<OrderResponseViewModel>.ErrorResult("Failed to retrieve created ticket");
                }

                // Map to view model
                var response = new OrderResponseViewModel
                {
                    TicketId = ticketWithOrders.Id,
                    TicketNumber = ticketWithOrders.TicketNumber,
                    Date = ticketWithOrders.Date,
                    TotalAmount = ticketWithOrders.TotalAmount,
                    RemainingAmount = ticketWithOrders.RemainingAmount,
                    IsClosed = ticketWithOrders.IsClosed,
                    CustomerId = ticketWithOrders.CustomerId ?? 0,
                    CustomerAddressId = ticketWithOrders.CustomerAddressId,
                    OrderItems = ticketWithOrders.Orders.Select(o => new OrderItemViewModel
                    {
                        Id = o.Id,
                        MenuItemId = o.MenuItemId,
                        MenuItemName = o.MenuItemName ?? o.MenuItem?.Name ?? "",
                        PortionId = o.PortionId,
                        PortionName = o.PortionName,
                        PortionDetailId = o.PortionDetailId,
                        Price = o.Price,
                        Quantity = o.Quantity,
                        PortionCount = o.PortionCount,
                        CreatedDateTime = o.CreatedDateTime
                    }).ToList()
                };

                return ApiResponse<OrderResponseViewModel>.SuccessResult(response, "Order placed successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<OrderResponseViewModel>.ErrorResult($"Failed to place order: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PagedResult<TicketListViewModel>>> GetAllTicketsAsync(PaginationRequest request)
        {
            try
            {
                var tickets = await _ticketRepository.GetAllAsync();
                var ticketViewModels = tickets.Select(t => new TicketListViewModel
                {
                    Id = t.Id,
                    TicketNumber = t.TicketNumber,
                    Date = t.Date,
                    TotalAmount = t.TotalAmount,
                    RemainingAmount = t.RemainingAmount,
                    IsClosed = t.IsClosed,
                    IsLocked = t.IsLocked,
                    CustomerId = t.CustomerId ?? 0,
                    CustomerName = t.Customer != null 
                        ? (string.IsNullOrWhiteSpace(t.Customer.LastName) 
                            ? t.Customer.FirstName 
                            : $"{t.Customer.FirstName} {t.Customer.LastName}") 
                        : null,
                    CustomerPhone = t.Customer?.Phone,
                    CustomerAddressId = t.CustomerAddressId,
                    CustomerAddress = t.CustomerAddress != null 
                        ? $"{t.CustomerAddress.AddressLine1}, {t.CustomerAddress.City}" 
                        : null,
                    OrderCount = t.Orders?.Count ?? 0,
                    LastUpdateTime = t.LastUpdateTime
                }).ToList();

                // Apply search filter
                if (!string.IsNullOrWhiteSpace(request.SearchTerm))
                {
                    var searchTerm = request.SearchTerm.ToLower();
                    ticketViewModels = ticketViewModels
                        .Where(t => (t.TicketNumber != null && t.TicketNumber.ToLower().Contains(searchTerm)) ||
                                   (t.CustomerName != null && t.CustomerName.ToLower().Contains(searchTerm)) ||
                                   (t.CustomerPhone != null && t.CustomerPhone.Contains(searchTerm)))
                        .ToList();
                }

                // Apply sorting
                if (!string.IsNullOrWhiteSpace(request.SortBy))
                {
                    ticketViewModels = request.SortBy.ToLower() switch
                    {
                        "date" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.Date).ToList()
                            : ticketViewModels.OrderBy(t => t.Date).ToList(),
                        "ticketnumber" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.TicketNumber).ToList()
                            : ticketViewModels.OrderBy(t => t.TicketNumber).ToList(),
                        "totalamount" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.TotalAmount).ToList()
                            : ticketViewModels.OrderBy(t => t.TotalAmount).ToList(),
                        "customer" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.CustomerName).ToList()
                            : ticketViewModels.OrderBy(t => t.CustomerName).ToList(),
                        _ => ticketViewModels.OrderByDescending(t => t.Date).ToList()
                    };
                }
                else
                {
                    ticketViewModels = ticketViewModels.OrderByDescending(t => t.Date).ToList();
                }

                var totalCount = ticketViewModels.Count;
                var pagedItems = ticketViewModels
                    .Skip((request.PageNumber - 1) * request.PageSize)
                    .Take(request.PageSize)
                    .ToList();

                var pagedResult = new PagedResult<TicketListViewModel>(pagedItems, totalCount, request.PageNumber, request.PageSize);
                return ApiResponse<PagedResult<TicketListViewModel>>.SuccessResult(pagedResult);
            }
            catch (Exception ex)
            {
                return ApiResponse<PagedResult<TicketListViewModel>>.ErrorResult($"Failed to get tickets: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PagedResult<TicketListViewModel>>> GetOpenTicketsAsync(PaginationRequest request)
        {
            try
            {
                var tickets = await _ticketRepository.GetAllAsync();
                var openTickets = tickets.Where(t => !t.IsClosed).ToList();

                var ticketViewModels = openTickets.Select(t => new TicketListViewModel
                {
                    Id = t.Id,
                    TicketNumber = t.TicketNumber,
                    Date = t.Date,
                    TotalAmount = t.TotalAmount,
                    RemainingAmount = t.RemainingAmount,
                    IsClosed = t.IsClosed,
                    IsLocked = t.IsLocked,
                    CustomerId = t.CustomerId ?? 0,
                    CustomerName = t.Customer != null 
                        ? (string.IsNullOrWhiteSpace(t.Customer.LastName) 
                            ? t.Customer.FirstName 
                            : $"{t.Customer.FirstName} {t.Customer.LastName}") 
                        : null,
                    CustomerPhone = t.Customer?.Phone,
                    CustomerAddressId = t.CustomerAddressId,
                    CustomerAddress = t.CustomerAddress != null 
                        ? $"{t.CustomerAddress.AddressLine1}, {t.CustomerAddress.City}" 
                        : null,
                    OrderCount = t.Orders?.Count ?? 0,
                    LastUpdateTime = t.LastUpdateTime
                }).ToList();

                // Apply search filter
                if (!string.IsNullOrWhiteSpace(request.SearchTerm))
                {
                    var searchTerm = request.SearchTerm.ToLower();
                    ticketViewModels = ticketViewModels
                        .Where(t => (t.TicketNumber != null && t.TicketNumber.ToLower().Contains(searchTerm)) ||
                                   (t.CustomerName != null && t.CustomerName.ToLower().Contains(searchTerm)) ||
                                   (t.CustomerPhone != null && t.CustomerPhone.Contains(searchTerm)))
                        .ToList();
                }

                // Apply sorting
                if (!string.IsNullOrWhiteSpace(request.SortBy))
                {
                    ticketViewModels = request.SortBy.ToLower() switch
                    {
                        "date" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.Date).ToList()
                            : ticketViewModels.OrderBy(t => t.Date).ToList(),
                        "ticketnumber" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.TicketNumber).ToList()
                            : ticketViewModels.OrderBy(t => t.TicketNumber).ToList(),
                        "totalamount" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.TotalAmount).ToList()
                            : ticketViewModels.OrderBy(t => t.TotalAmount).ToList(),
                        "customer" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.CustomerName).ToList()
                            : ticketViewModels.OrderBy(t => t.CustomerName).ToList(),
                        _ => ticketViewModels.OrderByDescending(t => t.Date).ToList()
                    };
                }
                else
                {
                    ticketViewModels = ticketViewModels.OrderByDescending(t => t.Date).ToList();
                }

                var totalCount = ticketViewModels.Count;
                var pagedItems = ticketViewModels
                    .Skip((request.PageNumber - 1) * request.PageSize)
                    .Take(request.PageSize)
                    .ToList();

                var pagedResult = new PagedResult<TicketListViewModel>(pagedItems, totalCount, request.PageNumber, request.PageSize);
                return ApiResponse<PagedResult<TicketListViewModel>>.SuccessResult(pagedResult);
            }
            catch (Exception ex)
            {
                return ApiResponse<PagedResult<TicketListViewModel>>.ErrorResult($"Failed to get open tickets: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PagedResult<TicketListViewModel>>> GetTicketsByStatusAsync(bool isClosed, PaginationRequest request)
        {
            try
            {
                var tickets = await _ticketRepository.GetAllAsync();
                var filteredTickets = tickets.Where(t => t.IsClosed == isClosed).ToList();

                var ticketViewModels = filteredTickets.Select(t => new TicketListViewModel
                {
                    Id = t.Id,
                    TicketNumber = t.TicketNumber,
                    Date = t.Date,
                    TotalAmount = t.TotalAmount,
                    RemainingAmount = t.RemainingAmount,
                    IsClosed = t.IsClosed,
                    IsLocked = t.IsLocked,
                    CustomerId = t.CustomerId ?? 0,
                    CustomerName = t.Customer != null 
                        ? (string.IsNullOrWhiteSpace(t.Customer.LastName) 
                            ? t.Customer.FirstName 
                            : $"{t.Customer.FirstName} {t.Customer.LastName}") 
                        : null,
                    CustomerPhone = t.Customer?.Phone,
                    CustomerAddressId = t.CustomerAddressId,
                    CustomerAddress = t.CustomerAddress != null 
                        ? $"{t.CustomerAddress.AddressLine1}, {t.CustomerAddress.City}" 
                        : null,
                    OrderCount = t.Orders?.Count ?? 0,
                    LastUpdateTime = t.LastUpdateTime
                }).ToList();

                // Apply search filter
                if (!string.IsNullOrWhiteSpace(request.SearchTerm))
                {
                    var searchTerm = request.SearchTerm.ToLower();
                    ticketViewModels = ticketViewModels
                        .Where(t => (t.TicketNumber != null && t.TicketNumber.ToLower().Contains(searchTerm)) ||
                                   (t.CustomerName != null && t.CustomerName.ToLower().Contains(searchTerm)) ||
                                   (t.CustomerPhone != null && t.CustomerPhone.Contains(searchTerm)))
                        .ToList();
                }

                // Apply sorting
                if (!string.IsNullOrWhiteSpace(request.SortBy))
                {
                    ticketViewModels = request.SortBy.ToLower() switch
                    {
                        "date" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.Date).ToList()
                            : ticketViewModels.OrderBy(t => t.Date).ToList(),
                        "ticketnumber" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.TicketNumber).ToList()
                            : ticketViewModels.OrderBy(t => t.TicketNumber).ToList(),
                        "totalamount" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.TotalAmount).ToList()
                            : ticketViewModels.OrderBy(t => t.TotalAmount).ToList(),
                        "customer" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.CustomerName).ToList()
                            : ticketViewModels.OrderBy(t => t.CustomerName).ToList(),
                        _ => ticketViewModels.OrderByDescending(t => t.Date).ToList()
                    };
                }
                else
                {
                    ticketViewModels = ticketViewModels.OrderByDescending(t => t.Date).ToList();
                }

                var totalCount = ticketViewModels.Count;
                var pagedItems = ticketViewModels
                    .Skip((request.PageNumber - 1) * request.PageSize)
                    .Take(request.PageSize)
                    .ToList();

                var pagedResult = new PagedResult<TicketListViewModel>(pagedItems, totalCount, request.PageNumber, request.PageSize);
                return ApiResponse<PagedResult<TicketListViewModel>>.SuccessResult(pagedResult);
            }
            catch (Exception ex)
            {
                return ApiResponse<PagedResult<TicketListViewModel>>.ErrorResult($"Failed to get tickets by status: {ex.Message}");
            }
        }

        public async Task<ApiResponse<TicketDetailViewModel?>> GetTicketByIdAsync(int id)
        {
            try
            {
                var ticket = await _ticketRepository.GetByIdWithOrdersAsync(id);
                if (ticket == null)
                {
                    return ApiResponse<TicketDetailViewModel?>.ErrorResult("Ticket not found");
                }

                var ticketDetail = new TicketDetailViewModel
                {
                    Id = ticket.Id,
                    TicketNumber = ticket.TicketNumber,
                    Date = ticket.Date,
                    LastUpdateTime = ticket.LastUpdateTime,
                    LastOrderDate = ticket.LastOrderDate,
                    LastPaymentDate = ticket.LastPaymentDate,
                    IsClosed = ticket.IsClosed,
                    IsLocked = ticket.IsLocked,
                    RemainingAmount = ticket.RemainingAmount,
                    TotalAmount = ticket.TotalAmount,
                    DepartmentId = ticket.DepartmentId,
                    TicketTypeId = ticket.TicketTypeId,
                    Note = ticket.Note,
                    LastModifiedUserName = ticket.LastModifiedUserName,
                    TicketTags = ticket.TicketTags,
                    TicketStates = ticket.TicketStates,
                    ExchangeRate = ticket.ExchangeRate,
                    TaxIncluded = ticket.TaxIncluded,
                    Name = ticket.Name,
                    CustomerId = ticket.CustomerId,
                    CustomerAddressId = ticket.CustomerAddressId
                };

                // Map Customer details
                if (ticket.Customer != null)
                {
                    ticketDetail.Customer = new CustomerViewModel
                    {
                        Id = ticket.Customer.Id,
                        FirstName = ticket.Customer.FirstName,
                        LastName = ticket.Customer.LastName,
                        Email = ticket.Customer.Email,
                        Phone = ticket.Customer.Phone,
                        Mobile = ticket.Customer.Mobile,
                        IsActive = ticket.Customer.IsActive,
                        IsVerified = ticket.Customer.IsVerified,
                        LoyaltyPoints = ticket.Customer.LoyaltyPoints,
                        TotalOrders = ticket.Customer.TotalOrders,
                        TotalSpent = ticket.Customer.TotalSpent
                    };
                }

                // Map Customer Address details
                if (ticket.CustomerAddress != null)
                {
                    ticketDetail.CustomerAddress = new CustomerAddressViewModel
                    {
                        Id = ticket.CustomerAddress.Id,
                        AddressType = ticket.CustomerAddress.AddressType,
                        IsDefault = ticket.CustomerAddress.IsDefault,
                        Label = ticket.CustomerAddress.Label,
                        ContactName = ticket.CustomerAddress.ContactName,
                        ContactPhone = ticket.CustomerAddress.ContactPhone,
                        AddressLine1 = ticket.CustomerAddress.AddressLine1,
                        AddressLine2 = ticket.CustomerAddress.AddressLine2,
                        BuildingNumber = ticket.CustomerAddress.BuildingNumber,
                        Floor = ticket.CustomerAddress.Floor,
                        Apartment = ticket.CustomerAddress.Apartment,
                        Landmark = ticket.CustomerAddress.Landmark,
                        City = ticket.CustomerAddress.City,
                        State = ticket.CustomerAddress.State,
                        Country = ticket.CustomerAddress.Country,
                        PostalCode = ticket.CustomerAddress.PostalCode,
                        Latitude = ticket.CustomerAddress.Latitude,
                        Longitude = ticket.CustomerAddress.Longitude,
                        DeliveryInstructions = ticket.CustomerAddress.DeliveryInstructions
                    };
                }

                // Map Order details
                ticketDetail.Orders = ticket.Orders?.Select(o => new OrderItemViewModel
                {
                    Id = o.Id,
                    MenuItemId = o.MenuItemId,
                    MenuItemName = o.MenuItemName ?? o.MenuItem?.Name ?? "",
                    PortionId = o.PortionId,
                    PortionName = o.PortionName,
                    PortionDetailId = o.PortionDetailId,
                    Price = o.Price,
                    Quantity = o.Quantity,
                    PortionCount = o.PortionCount,
                    CreatedDateTime = o.CreatedDateTime
                }).OrderBy(o => o.CreatedDateTime).ToList() ?? new List<OrderItemViewModel>();

                return ApiResponse<TicketDetailViewModel?>.SuccessResult(ticketDetail);
            }
            catch (Exception ex)
            {
                return ApiResponse<TicketDetailViewModel?>.ErrorResult($"Failed to get ticket: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PagedResult<TicketListViewModel>>> GetCustomerOrdersAsync(int customerId, PaginationRequest request)
        {
            try
            {
                // Always return success, even if customer doesn't exist - just return empty list
                List<Ticket> ticketList = new List<Ticket>();
                
                try
                {
                    // Try to get customer
                    var customer = await _customerRepository.GetByIdAsync(customerId);
                    
                    if (customer != null)
                    {
                        // Get tickets for the customer
                        // Use the enhanced method that also checks by phone/email if CustomerId is NULL
                        var tickets = await _ticketRepository.GetByCustomerIdOrPhoneAsync(
                            customerId, 
                            customer.Phone, 
                            customer.Email);
                        ticketList = tickets.ToList();
                    }
                    else
                    {
                        // Customer not found - try to find tickets by customerId directly anyway
                        // This handles cases where customer was deleted but tickets still exist
                        var tickets = await _ticketRepository.GetByCustomerIdAsync(customerId);
                        ticketList = tickets.ToList();
                    }
                }
                catch (Exception)
                {
                    // If any error occurs during customer/ticket lookup, just use empty list
                    // Don't fail the request - return empty list instead
                    ticketList = new List<Ticket>();
                }

                // Map to view models
                var ticketViewModels = ticketList.Select(t => new TicketListViewModel
                {
                    Id = t.Id,
                    TicketNumber = t.TicketNumber,
                    Date = t.Date,
                    TotalAmount = t.TotalAmount,
                    RemainingAmount = t.RemainingAmount,
                    IsClosed = t.IsClosed,
                    IsLocked = t.IsLocked,
                    CustomerId = t.CustomerId ?? 0,
                    CustomerName = t.Customer != null 
                        ? (string.IsNullOrWhiteSpace(t.Customer.LastName) 
                            ? t.Customer.FirstName 
                            : $"{t.Customer.FirstName} {t.Customer.LastName}") 
                        : null,
                    CustomerPhone = t.Customer?.Phone,
                    CustomerAddressId = t.CustomerAddressId,
                    CustomerAddress = t.CustomerAddress != null 
                        ? $"{t.CustomerAddress.AddressLine1}, {t.CustomerAddress.City}" 
                        : null,
                    OrderCount = t.Orders?.Count ?? 0,
                    LastUpdateTime = t.LastUpdateTime
                }).ToList();

                // Apply search filter
                if (!string.IsNullOrWhiteSpace(request.SearchTerm))
                {
                    var searchTerm = request.SearchTerm.ToLower();
                    ticketViewModels = ticketViewModels
                        .Where(t => (t.TicketNumber != null && t.TicketNumber.ToLower().Contains(searchTerm)) ||
                                   (t.CustomerName != null && t.CustomerName.ToLower().Contains(searchTerm)))
                        .ToList();
                }

                // Apply sorting (default: newest first)
                if (!string.IsNullOrWhiteSpace(request.SortBy))
                {
                    ticketViewModels = request.SortBy.ToLower() switch
                    {
                        "date" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.Date).ToList()
                            : ticketViewModels.OrderBy(t => t.Date).ToList(),
                        "ticketnumber" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.TicketNumber ?? "").ToList()
                            : ticketViewModels.OrderBy(t => t.TicketNumber ?? "").ToList(),
                        "totalamount" => request.SortDescending
                            ? ticketViewModels.OrderByDescending(t => t.TotalAmount).ToList()
                            : ticketViewModels.OrderBy(t => t.TotalAmount).ToList(),
                        _ => ticketViewModels.OrderByDescending(t => t.Date).ToList()
                    };
                }
                else
                {
                    // Default sort: newest first
                    ticketViewModels = ticketViewModels.OrderByDescending(t => t.Date).ToList();
                }

                // Apply pagination
                var totalCount = ticketViewModels.Count;
                var pageNumber = request.PageNumber > 0 ? request.PageNumber : 1;
                var pageSize = request.PageSize > 0 ? request.PageSize : 10;
                var totalPages = (int)Math.Ceiling(totalCount / (double)pageSize);

                var pagedTickets = ticketViewModels
                    .Skip((pageNumber - 1) * pageSize)
                    .Take(pageSize)
                    .ToList();

                var pagedResult = new PagedResult<TicketListViewModel>(
                    pagedTickets,
                    totalCount,
                    pageNumber,
                    pageSize
                );

                return ApiResponse<PagedResult<TicketListViewModel>>.SuccessResult(pagedResult, "Customer orders retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<PagedResult<TicketListViewModel>>.ErrorResult($"Failed to get customer orders: {ex.Message}");
            }
        }

        /// <summary>
        /// Creates a customer from customer information DTO
        /// </summary>
        private async Task<Customer?> CreateCustomerFromInfoAsync(Models.DTOs.Orders.CustomerInfoDto customerInfo)
        {
            try
            {
                // Validate required fields
                if (string.IsNullOrWhiteSpace(customerInfo.FirstName) || 
                    string.IsNullOrWhiteSpace(customerInfo.Phone))
                {
                    return null;
                }

                var customer = new Customer
                {
                    FirstName = customerInfo.FirstName.Trim(),
                    LastName = string.IsNullOrWhiteSpace(customerInfo.LastName) ? null : customerInfo.LastName.Trim(),
                    Email = string.IsNullOrWhiteSpace(customerInfo.Email) ? null : customerInfo.Email.Trim(),
                    Phone = customerInfo.Phone.Trim(),
                    Mobile = string.IsNullOrWhiteSpace(customerInfo.Mobile) ? customerInfo.Phone.Trim() : customerInfo.Mobile.Trim(),
                    IsActive = true,
                    IsVerified = false,
                    IsBlocked = false,
                    LoyaltyPoints = 0,
                    TotalOrders = 0,
                    TotalSpent = 0,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };

                return await _customerRepository.CreateAsync(customer);
            }
            catch (Exception ex)
            {
                // Log error - rethrow to get better error message
                throw new Exception($"Failed to create customer: {ex.Message}", ex);
            }
        }

        /// <summary>
        /// Creates a customer address from address information DTO
        /// </summary>
        private async Task<CustomerAddress?> CreateCustomerAddressFromInfoAsync(int customerId, Models.DTOs.Orders.CustomerAddressInfoDto addressInfo)
        {
            try
            {
                // Check if customer has any addresses - if not, this will be the default
                var existingAddresses = await _customerRepository.GetByIdWithAddressesAsync(customerId);
                bool isDefault = existingAddresses?.CustomerAddresses == null || !existingAddresses.CustomerAddresses.Any();

                var address = new CustomerAddress
                {
                    CustomerId = customerId,
                    AddressType = addressInfo.AddressType ?? "Home",
                    IsDefault = isDefault,
                    IsActive = true,
                    Label = addressInfo.Label,
                    ContactName = addressInfo.ContactName,
                    ContactPhone = addressInfo.ContactPhone,
                    AddressLine1 = addressInfo.AddressLine1,
                    AddressLine2 = addressInfo.AddressLine2,
                    BuildingNumber = addressInfo.BuildingNumber,
                    Floor = addressInfo.Floor,
                    Apartment = addressInfo.Apartment,
                    Landmark = addressInfo.Landmark,
                    City = addressInfo.City,
                    State = addressInfo.State,
                    Country = addressInfo.Country ?? "Pakistan",
                    PostalCode = addressInfo.PostalCode,
                    Latitude = addressInfo.Latitude,
                    Longitude = addressInfo.Longitude,
                    DeliveryInstructions = addressInfo.DeliveryInstructions,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };

                await _context.CustomerAddresses.AddAsync(address);
                await _context.SaveChangesAsync();
                return address;
            }
            catch (Exception)
            {
                // Log error but don't throw - return null to indicate failure
                return null;
            }
        }

        public async Task<ApiResponse<PagedResult<OrderListViewModel>>> GetAllOrdersAsync(PaginationRequest request)
        {
            try
            {
                var orders = await _orderRepository.GetAllAsync();
                
                // Include related entities for better data
                var ordersWithDetails = orders.Select(o => new OrderListViewModel
                {
                    Id = o.Id,
                    TicketId = o.TicketId,
                    TicketNumber = o.Ticket?.TicketNumber,
                    MenuItemId = o.MenuItemId,
                    MenuItemName = o.MenuItemName ?? o.MenuItem?.Name ?? "Unknown",
                    PortionName = o.PortionName,
                    Price = o.Price,
                    Quantity = o.Quantity,
                    TotalAmount = o.Price * o.Quantity,
                    CreatedDateTime = o.CreatedDateTime,
                    CreatingUserName = o.CreatingUserName,
                    CustomerId = o.Ticket?.CustomerId ?? 0,
                    CustomerName = o.Ticket?.Customer != null 
                        ? $"{o.Ticket.Customer.FirstName} {o.Ticket.Customer.LastName}" 
                        : null,
                    CustomerPhone = o.Ticket?.Customer?.Phone,
                    CustomerAddress = o.Ticket?.CustomerAddress != null 
                        ? $"{o.Ticket.CustomerAddress.AddressLine1}, {o.Ticket.CustomerAddress.City}" 
                        : null,
                    TicketIsClosed = o.Ticket?.IsClosed ?? false,
                    OrderNumber = o.OrderNumber
                }).ToList();

                // Apply search filter
                if (!string.IsNullOrWhiteSpace(request.SearchTerm))
                {
                    var searchTerm = request.SearchTerm.ToLower();
                    ordersWithDetails = ordersWithDetails
                        .Where(o => 
                            (o.TicketNumber != null && o.TicketNumber.ToLower().Contains(searchTerm)) ||
                            (o.MenuItemName != null && o.MenuItemName.ToLower().Contains(searchTerm)) ||
                            (o.CustomerName != null && o.CustomerName.ToLower().Contains(searchTerm)) ||
                            (o.CustomerPhone != null && o.CustomerPhone.Contains(searchTerm)))
                        .ToList();
                }

                // Apply sorting
                if (!string.IsNullOrWhiteSpace(request.SortBy))
                {
                    ordersWithDetails = request.SortBy.ToLower() switch
                    {
                        "date" => request.SortDescending
                            ? ordersWithDetails.OrderByDescending(o => o.CreatedDateTime).ToList()
                            : ordersWithDetails.OrderBy(o => o.CreatedDateTime).ToList(),
                        "ticketnumber" => request.SortDescending
                            ? ordersWithDetails.OrderByDescending(o => o.TicketNumber).ToList()
                            : ordersWithDetails.OrderBy(o => o.TicketNumber).ToList(),
                        "totalamount" => request.SortDescending
                            ? ordersWithDetails.OrderByDescending(o => o.TotalAmount).ToList()
                            : ordersWithDetails.OrderBy(o => o.TotalAmount).ToList(),
                        "customer" => request.SortDescending
                            ? ordersWithDetails.OrderByDescending(o => o.CustomerName).ToList()
                            : ordersWithDetails.OrderBy(o => o.CustomerName).ToList(),
                        "menuitem" => request.SortDescending
                            ? ordersWithDetails.OrderByDescending(o => o.MenuItemName).ToList()
                            : ordersWithDetails.OrderBy(o => o.MenuItemName).ToList(),
                        _ => ordersWithDetails.OrderByDescending(o => o.CreatedDateTime).ToList()
                    };
                }
                else
                {
                    ordersWithDetails = ordersWithDetails.OrderByDescending(o => o.CreatedDateTime).ToList();
                }

                var totalCount = ordersWithDetails.Count;
                var pagedItems = ordersWithDetails
                    .Skip((request.PageNumber - 1) * request.PageSize)
                    .Take(request.PageSize)
                    .ToList();

                var pagedResult = new PagedResult<OrderListViewModel>(pagedItems, totalCount, request.PageNumber, request.PageSize);
                return ApiResponse<PagedResult<OrderListViewModel>>.SuccessResult(pagedResult);
            }
            catch (Exception ex)
            {
                return ApiResponse<PagedResult<OrderListViewModel>>.ErrorResult($"Failed to get orders: {ex.Message}");
            }
        }

        public async Task<ApiResponse<TicketDetailViewModel?>> UpdateTicketStatusAsync(int ticketId, string status)
        {
            try
            {
                var ticket = await _ticketRepository.GetByIdAsync(ticketId);
                if (ticket == null)
                {
                    return ApiResponse<TicketDetailViewModel?>.ErrorResult("Ticket not found");
                }

                // Validate status
                if (string.IsNullOrWhiteSpace(status) || 
                    (status.ToLower() != "open" && status.ToLower() != "accept" && status.ToLower() != "closed"))
                {
                    return ApiResponse<TicketDetailViewModel?>.ErrorResult("Invalid status. Must be 'open', 'accept', or 'closed'");
                }

                // Update ticket status in TicketStates column
                ticket.TicketStates = status.ToLower();
                ticket.IsClosed = status.ToLower() == "closed";
                ticket.LastUpdateTime = DateTime.UtcNow;
                
                // If closing the ticket, update payment date
                if (status.ToLower() == "closed")
                {
                    ticket.LastPaymentDate = DateTime.UtcNow;
                }

                await _ticketRepository.UpdateAsync(ticket);

                // Get updated ticket with all details
                var updatedTicket = await _ticketRepository.GetByIdWithOrdersAsync(ticketId);
                if (updatedTicket == null)
                {
                    return ApiResponse<TicketDetailViewModel?>.ErrorResult("Failed to retrieve updated ticket");
                }

                // Map to view model
                var ticketDetail = new TicketDetailViewModel
                {
                    Id = updatedTicket.Id,
                    TicketNumber = updatedTicket.TicketNumber,
                    Date = updatedTicket.Date,
                    LastUpdateTime = updatedTicket.LastUpdateTime,
                    LastOrderDate = updatedTicket.LastOrderDate,
                    LastPaymentDate = updatedTicket.LastPaymentDate,
                    IsClosed = updatedTicket.IsClosed,
                    IsLocked = updatedTicket.IsLocked,
                    RemainingAmount = updatedTicket.RemainingAmount,
                    TotalAmount = updatedTicket.TotalAmount,
                    DepartmentId = updatedTicket.DepartmentId,
                    TicketTypeId = updatedTicket.TicketTypeId,
                    Note = updatedTicket.Note,
                    LastModifiedUserName = updatedTicket.LastModifiedUserName,
                    TicketTags = updatedTicket.TicketTags,
                    TicketStates = updatedTicket.TicketStates,
                    ExchangeRate = updatedTicket.ExchangeRate,
                    TaxIncluded = updatedTicket.TaxIncluded,
                    Name = updatedTicket.Name,
                    CustomerId = updatedTicket.CustomerId,
                    CustomerAddressId = updatedTicket.CustomerAddressId
                };

                // Map Customer details
                if (updatedTicket.Customer != null)
                {
                    ticketDetail.Customer = new CustomerViewModel
                    {
                        Id = updatedTicket.Customer.Id,
                        FirstName = updatedTicket.Customer.FirstName,
                        LastName = updatedTicket.Customer.LastName,
                        Email = updatedTicket.Customer.Email,
                        Phone = updatedTicket.Customer.Phone,
                        Mobile = updatedTicket.Customer.Mobile,
                        IsActive = updatedTicket.Customer.IsActive,
                        IsVerified = updatedTicket.Customer.IsVerified,
                        LoyaltyPoints = updatedTicket.Customer.LoyaltyPoints,
                        TotalOrders = updatedTicket.Customer.TotalOrders,
                        TotalSpent = updatedTicket.Customer.TotalSpent
                    };
                }

                // Map Customer Address details
                if (updatedTicket.CustomerAddress != null)
                {
                    ticketDetail.CustomerAddress = new CustomerAddressViewModel
                    {
                        Id = updatedTicket.CustomerAddress.Id,
                        AddressType = updatedTicket.CustomerAddress.AddressType,
                        IsDefault = updatedTicket.CustomerAddress.IsDefault,
                        Label = updatedTicket.CustomerAddress.Label,
                        ContactName = updatedTicket.CustomerAddress.ContactName,
                        ContactPhone = updatedTicket.CustomerAddress.ContactPhone,
                        AddressLine1 = updatedTicket.CustomerAddress.AddressLine1,
                        AddressLine2 = updatedTicket.CustomerAddress.AddressLine2,
                        BuildingNumber = updatedTicket.CustomerAddress.BuildingNumber,
                        Floor = updatedTicket.CustomerAddress.Floor,
                        Apartment = updatedTicket.CustomerAddress.Apartment,
                        Landmark = updatedTicket.CustomerAddress.Landmark,
                        City = updatedTicket.CustomerAddress.City,
                        State = updatedTicket.CustomerAddress.State,
                        Country = updatedTicket.CustomerAddress.Country,
                        PostalCode = updatedTicket.CustomerAddress.PostalCode,
                        Latitude = updatedTicket.CustomerAddress.Latitude,
                        Longitude = updatedTicket.CustomerAddress.Longitude,
                        DeliveryInstructions = updatedTicket.CustomerAddress.DeliveryInstructions
                    };
                }

                // Map Order details
                ticketDetail.Orders = updatedTicket.Orders?.Select(o => new OrderItemViewModel
                {
                    Id = o.Id,
                    MenuItemId = o.MenuItemId,
                    MenuItemName = o.MenuItemName ?? o.MenuItem?.Name ?? "",
                    PortionId = o.PortionId,
                    PortionName = o.PortionName,
                    PortionDetailId = o.PortionDetailId,
                    Price = o.Price,
                    Quantity = o.Quantity,
                    PortionCount = o.PortionCount,
                    CreatedDateTime = o.CreatedDateTime
                }).OrderBy(o => o.CreatedDateTime).ToList() ?? new List<OrderItemViewModel>();

                var statusText = status.ToLower() == "closed" ? "Closed" : status.ToLower() == "accept" ? "Accept" : "Open";
                return ApiResponse<TicketDetailViewModel?>.SuccessResult(ticketDetail, $"Ticket status updated to {statusText}");
            }
            catch (Exception ex)
            {
                return ApiResponse<TicketDetailViewModel?>.ErrorResult($"Failed to update ticket status: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<TicketDetailViewModel>>> GetAllTicketsByStatusAsync(bool ticketStatus)
        {
            try
            {
                var tickets = await _ticketRepository.GetByStatusWithDetailsAsync(ticketStatus);

                var ticketDetails = tickets.Select(ticket => new TicketDetailViewModel
                {
                    Id = ticket.Id,
                    TicketNumber = ticket.TicketNumber,
                    Date = ticket.Date,
                    LastUpdateTime = ticket.LastUpdateTime,
                    LastOrderDate = ticket.LastOrderDate,
                    LastPaymentDate = ticket.LastPaymentDate,
                    IsClosed = ticket.IsClosed,
                    IsLocked = ticket.IsLocked,
                    RemainingAmount = ticket.RemainingAmount,
                    TotalAmount = ticket.TotalAmount,
                    DepartmentId = ticket.DepartmentId,
                    TicketTypeId = ticket.TicketTypeId,
                    Note = ticket.Note,
                    LastModifiedUserName = ticket.LastModifiedUserName,
                    TicketTags = ticket.TicketTags,
                    TicketStates = ticket.TicketStates,
                    ExchangeRate = ticket.ExchangeRate,
                    TaxIncluded = ticket.TaxIncluded,
                    Name = ticket.Name,
                    CustomerId = ticket.CustomerId,
                    CustomerAddressId = ticket.CustomerAddressId,
                    // Map Customer details
                    Customer = ticket.Customer != null ? new CustomerViewModel
                    {
                        Id = ticket.Customer.Id,
                        FirstName = ticket.Customer.FirstName,
                        LastName = ticket.Customer.LastName,
                        Email = ticket.Customer.Email,
                        Phone = ticket.Customer.Phone,
                        Mobile = ticket.Customer.Mobile,
                        IsActive = ticket.Customer.IsActive,
                        IsVerified = ticket.Customer.IsVerified,
                        LoyaltyPoints = ticket.Customer.LoyaltyPoints,
                        TotalOrders = ticket.Customer.TotalOrders,
                        TotalSpent = ticket.Customer.TotalSpent
                    } : null,
                    // Map Customer Address details
                    CustomerAddress = ticket.CustomerAddress != null ? new CustomerAddressViewModel
                    {
                        Id = ticket.CustomerAddress.Id,
                        AddressType = ticket.CustomerAddress.AddressType,
                        IsDefault = ticket.CustomerAddress.IsDefault,
                        Label = ticket.CustomerAddress.Label,
                        ContactName = ticket.CustomerAddress.ContactName,
                        ContactPhone = ticket.CustomerAddress.ContactPhone,
                        AddressLine1 = ticket.CustomerAddress.AddressLine1,
                        AddressLine2 = ticket.CustomerAddress.AddressLine2,
                        BuildingNumber = ticket.CustomerAddress.BuildingNumber,
                        Floor = ticket.CustomerAddress.Floor,
                        Apartment = ticket.CustomerAddress.Apartment,
                        Landmark = ticket.CustomerAddress.Landmark,
                        City = ticket.CustomerAddress.City,
                        State = ticket.CustomerAddress.State,
                        Country = ticket.CustomerAddress.Country,
                        PostalCode = ticket.CustomerAddress.PostalCode,
                        Latitude = ticket.CustomerAddress.Latitude,
                        Longitude = ticket.CustomerAddress.Longitude,
                        DeliveryInstructions = ticket.CustomerAddress.DeliveryInstructions
                    } : null,
                    // Map Order details
                    Orders = ticket.Orders?.Select(o => new OrderItemViewModel
                    {
                        Id = o.Id,
                        MenuItemId = o.MenuItemId,
                        MenuItemName = o.MenuItemName ?? o.MenuItem?.Name ?? "",
                        PortionId = o.PortionId,
                        PortionName = o.PortionName,
                        PortionDetailId = o.PortionDetailId,
                        Price = o.Price,
                        Quantity = o.Quantity,
                        PortionCount = o.PortionCount,
                        CreatedDateTime = o.CreatedDateTime
                    }).OrderBy(o => o.CreatedDateTime).ToList() ?? new List<OrderItemViewModel>()
                }).ToList();

                return ApiResponse<List<TicketDetailViewModel>>.SuccessResult(ticketDetails);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<TicketDetailViewModel>>.ErrorResult($"Failed to get tickets by status: {ex.Message}");
            }
        }
    }
}

