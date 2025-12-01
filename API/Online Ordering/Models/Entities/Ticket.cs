using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNet_Starter_Template.Models.Entities
{
    public class Ticket
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime LastUpdateTime { get; set; } = DateTime.UtcNow;

        [StringLength(50)]
        public string? TicketNumber { get; set; }

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime Date { get; set; } = DateTime.UtcNow;

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime LastOrderDate { get; set; } = DateTime.UtcNow;

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime LastPaymentDate { get; set; } = DateTime.UtcNow;

        [Required]
        public bool IsClosed { get; set; } = false;

        [Required]
        public bool IsLocked { get; set; } = false;

        [Required]
        [Column(TypeName = "decimal(16,2)")]
        public decimal RemainingAmount { get; set; } = 0;

        [Required]
        [Column(TypeName = "decimal(16,2)")]
        public decimal TotalAmount { get; set; } = 0;

        [Required]
        public int DepartmentId { get; set; }

        [Required]
        public int TicketTypeId { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? Note { get; set; }

        [StringLength(100)]
        public string? LastModifiedUserName { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? TicketTags { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? TicketStates { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? TicketLogs { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal ExchangeRate { get; set; } = 1;

        [Required]
        public bool TaxIncluded { get; set; } = false;

        [StringLength(200)]
        public string? Name { get; set; }

        public int? TransactionDocument_Id { get; set; }

        // Foreign Keys
        public int? CustomerId { get; set; }
        public int? CustomerAddressId { get; set; }

        // Navigation properties
        [ForeignKey("CustomerId")]
        public virtual Customer? Customer { get; set; }

        [ForeignKey("CustomerAddressId")]
        public virtual CustomerAddress? CustomerAddress { get; set; }

        public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
    }
}

