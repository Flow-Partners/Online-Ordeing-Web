using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNet_Starter_Template.Models.Entities
{
    public class CustomerAddress
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int CustomerId { get; set; }

        [Required]
        [StringLength(20)]
        public string AddressType { get; set; } = "Home"; // Home, Work, Other

        [Required]
        public bool IsDefault { get; set; } = false;

        [Required]
        public bool IsActive { get; set; } = true;

        [StringLength(50)]
        public string? Label { get; set; } // e.g., "Home", "Office", "Mom's House"

        [StringLength(100)]
        public string? ContactName { get; set; }

        [StringLength(20)]
        public string? ContactPhone { get; set; }

        [Required]
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

        [Required]
        [StringLength(50)]
        public string City { get; set; } = string.Empty;

        [StringLength(50)]
        public string? State { get; set; }

        [Required]
        [StringLength(50)]
        public string Country { get; set; } = string.Empty;

        [StringLength(20)]
        public string? PostalCode { get; set; }

        [Column(TypeName = "decimal(18,10)")]
        public decimal? Latitude { get; set; }

        [Column(TypeName = "decimal(18,10)")]
        public decimal? Longitude { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? DeliveryInstructions { get; set; }

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        // Navigation properties
        [ForeignKey("CustomerId")]
        public virtual Customer Customer { get; set; } = null!;

        public virtual ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
    }
}

