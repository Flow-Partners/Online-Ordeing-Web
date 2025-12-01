using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNet_Starter_Template.Models.Entities
{
    public class Order
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int TicketId { get; set; }

        [Required]
        public int WarehouseId { get; set; }

        [Required]
        public int DepartmentId { get; set; }

        // Menu Item References
        [Required]
        public int MenuItemId { get; set; }

        public int? PortionId { get; set; }

        public int? PortionDetailId { get; set; }

        // Denormalized fields (for historical/display purposes)
        [StringLength(200)]
        public string? MenuItemName { get; set; }

        [StringLength(100)]
        public string? PortionName { get; set; }

        // Pricing
        [Required]
        [Column(TypeName = "decimal(16,2)")]
        public decimal Price { get; set; } // Snapshot price at time of order

        [Required]
        [Column(TypeName = "decimal(16,3)")]
        public decimal Quantity { get; set; }

        [Required]
        public int PortionCount { get; set; }

        // Flags
        [Required]
        public bool Locked { get; set; } = false;

        [Required]
        public bool CalculatePrice { get; set; } = true;

        [Required]
        public bool DecreaseInventory { get; set; } = false;

        [Required]
        public bool IncreaseInventory { get; set; } = false;

        // Ordering
        [Required]
        public int OrderNumber { get; set; }

        [StringLength(100)]
        public string? CreatingUserName { get; set; }

        // Timestamps
        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime CreatedDateTime { get; set; } = DateTime.UtcNow;

        // References
        [Required]
        public int AccountTransactionTypeId { get; set; }

        public int? ProductTimerValueId { get; set; }

        // Tags and Metadata
        [StringLength(100)]
        public string? PriceTag { get; set; }

        [StringLength(100)]
        public string? Tag { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? Taxes { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? OrderTags { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? OrderStates { get; set; }

        // Navigation properties
        [ForeignKey("TicketId")]
        public virtual Ticket Ticket { get; set; } = null!;

        [ForeignKey("MenuItemId")]
        public virtual MenuItem MenuItem { get; set; } = null!;

        [ForeignKey("PortionId")]
        public virtual Portion? Portion { get; set; }

        [ForeignKey("PortionDetailId")]
        public virtual PortionDetail? PortionDetail { get; set; }
    }
}

