using System.ComponentModel.DataAnnotations;

namespace DotNet_Starter_Template.Models.DTOs.Orders
{
    public class PlaceOrderDto
    {
        // CustomerId is optional - if not provided, customer will be created from CustomerInfo
        public int? CustomerId { get; set; }

        public int? CustomerAddressId { get; set; } // Optional - can use default address if not provided

        // Customer information (required if CustomerId is not provided)
        public CustomerInfoDto? CustomerInfo { get; set; }

        [Required]
        public int DepartmentId { get; set; }

        [Required]
        public int TicketTypeId { get; set; }

        [Required]
        public List<OrderItemDto> OrderItems { get; set; } = new List<OrderItemDto>();

        [StringLength(500)]
        public string? Note { get; set; }

        public decimal ExchangeRate { get; set; } = 1;

        public bool TaxIncluded { get; set; } = false;

        [StringLength(200)]
        public string? Name { get; set; }
    }

    public class CustomerInfoDto
    {
        [Required]
        [StringLength(50)]
        public string FirstName { get; set; } = string.Empty;

        // LastName is optional - no validation attributes needed
        public string? LastName { get; set; }

        [StringLength(100)]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        [StringLength(20)]
        public string Phone { get; set; } = string.Empty;

        [StringLength(20)]
        public string? Mobile { get; set; }

        // Address information (optional)
        public CustomerAddressInfoDto? Address { get; set; }
    }

    public class CustomerAddressInfoDto
    {
        [StringLength(20)]
        public string AddressType { get; set; } = "Home";

        [StringLength(50)]
        public string? Label { get; set; }

        [StringLength(100)]
        public string? ContactName { get; set; }

        [StringLength(20)]
        public string? ContactPhone { get; set; }

        // AddressLine1 is required only if address is provided
        [StringLength(200)]
        public string AddressLine1 { get; set; } = string.Empty;

        [StringLength(200)]
        public string? AddressLine2 { get; set; }

        [StringLength(50)]
        public string? BuildingNumber { get; set; }

        [StringLength(20)]
        public string? Floor { get; set; }

        [StringLength(20)]
        public string? Apartment { get; set; }

        [StringLength(200)]
        public string? Landmark { get; set; }

        // City is required only if address is provided
        [StringLength(50)]
        public string City { get; set; } = string.Empty;

        [StringLength(50)]
        public string? State { get; set; }

        // Country has default value, so not strictly required
        [StringLength(50)]
        public string Country { get; set; } = "Pakistan";

        [StringLength(20)]
        public string? PostalCode { get; set; }

        public decimal? Latitude { get; set; }

        public decimal? Longitude { get; set; }

        [StringLength(500)]
        public string? DeliveryInstructions { get; set; }
    }

    public class OrderItemDto
    {
        [Required]
        public int MenuItemId { get; set; }

        public int? PortionId { get; set; }

        public int? PortionDetailId { get; set; }

        [Required]
        [Range(0.001, double.MaxValue, ErrorMessage = "Quantity must be greater than 0")]
        public decimal Quantity { get; set; }

        [Required]
        [Range(0, double.MaxValue, ErrorMessage = "Price must be greater than or equal to 0")]
        public decimal Price { get; set; }

        [Required]
        public int PortionCount { get; set; } = 1;

        [Required]
        public int WarehouseId { get; set; }

        [Required]
        public int DepartmentId { get; set; }

        [Required]
        public int AccountTransactionTypeId { get; set; }

        public bool CalculatePrice { get; set; } = true;

        public bool DecreaseInventory { get; set; } = false;

        public bool IncreaseInventory { get; set; } = false;

        [StringLength(100)]
        public string? PriceTag { get; set; }

        [StringLength(100)]
        public string? Tag { get; set; }
    }
}

