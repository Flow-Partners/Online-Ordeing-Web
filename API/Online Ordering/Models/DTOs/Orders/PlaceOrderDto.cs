using System.ComponentModel.DataAnnotations;

namespace DotNet_Starter_Template.Models.DTOs.Orders
{
    public class PlaceOrderDto
    {
        [Required]
        public int CustomerId { get; set; }

        public int? CustomerAddressId { get; set; } // Optional - can use default address if not provided

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

