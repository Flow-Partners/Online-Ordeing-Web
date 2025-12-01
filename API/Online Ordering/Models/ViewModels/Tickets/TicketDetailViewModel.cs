using DotNet_Starter_Template.Models.ViewModels.Orders;

namespace DotNet_Starter_Template.Models.ViewModels.Tickets
{
    public class TicketDetailViewModel
    {
        public int Id { get; set; }
        public string? TicketNumber { get; set; }
        public DateTime Date { get; set; }
        public DateTime LastUpdateTime { get; set; }
        public DateTime LastOrderDate { get; set; }
        public DateTime LastPaymentDate { get; set; }
        public bool IsClosed { get; set; }
        public bool IsLocked { get; set; }
        public decimal RemainingAmount { get; set; }
        public decimal TotalAmount { get; set; }
        public int DepartmentId { get; set; }
        public int TicketTypeId { get; set; }
        public string? Note { get; set; }
        public string? LastModifiedUserName { get; set; }
        public string? TicketTags { get; set; }
        public string? TicketStates { get; set; }
        public decimal ExchangeRate { get; set; }
        public bool TaxIncluded { get; set; }
        public string? Name { get; set; }

        // Customer Details
        public int? CustomerId { get; set; }
        public CustomerViewModel? Customer { get; set; }

        // Customer Address Details
        public int? CustomerAddressId { get; set; }
        public CustomerAddressViewModel? CustomerAddress { get; set; }

        // Order Details
        public List<OrderItemViewModel> Orders { get; set; } = new List<OrderItemViewModel>();
    }

    public class CustomerViewModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string? Email { get; set; }
        public string Phone { get; set; } = string.Empty;
        public string? Mobile { get; set; }
        public bool IsActive { get; set; }
        public bool IsVerified { get; set; }
        public int LoyaltyPoints { get; set; }
        public int TotalOrders { get; set; }
        public decimal TotalSpent { get; set; }
    }

    public class CustomerAddressViewModel
    {
        public int Id { get; set; }
        public string AddressType { get; set; } = string.Empty;
        public bool IsDefault { get; set; }
        public string? Label { get; set; }
        public string? ContactName { get; set; }
        public string? ContactPhone { get; set; }
        public string AddressLine1 { get; set; } = string.Empty;
        public string? AddressLine2 { get; set; }
        public string? BuildingNumber { get; set; }
        public string? Floor { get; set; }
        public string? Apartment { get; set; }
        public string? Landmark { get; set; }
        public string City { get; set; } = string.Empty;
        public string? State { get; set; }
        public string Country { get; set; } = string.Empty;
        public string? PostalCode { get; set; }
        public decimal? Latitude { get; set; }
        public decimal? Longitude { get; set; }
        public string? DeliveryInstructions { get; set; }
    }
}

