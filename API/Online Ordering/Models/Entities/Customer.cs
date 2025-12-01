using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNet_Starter_Template.Models.Entities
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        [StringLength(50)]
        public string LastName { get; set; } = string.Empty;

        [StringLength(100)]
        public string? Email { get; set; }

        [Required]
        [StringLength(20)]
        public string Phone { get; set; } = string.Empty;

        [StringLength(20)]
        public string? Mobile { get; set; }

        [StringLength(20)]
        public string? AlternatePhone { get; set; }

        [Required]
        public bool IsActive { get; set; } = true;

        [Required]
        public bool IsVerified { get; set; } = false;

        [Required]
        public bool IsBlocked { get; set; } = false;

        [Column(TypeName = "date")]
        public DateTime? DateOfBirth { get; set; }

        [StringLength(10)]
        public string? Gender { get; set; }

        [Required]
        public int LoyaltyPoints { get; set; } = 0;

        [Required]
        public int TotalOrders { get; set; } = 0;

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal TotalSpent { get; set; } = 0;

        [Column(TypeName = "datetime2")]
        public DateTime? LastOrderDate { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? FirstOrderDate { get; set; }

        [StringLength(10)]
        public string? PreferredLanguage { get; set; } = "en";

        [StringLength(10)]
        public string? PreferredCurrency { get; set; }

        [Required]
        public bool NotificationEnabled { get; set; } = true;

        [Required]
        public bool PromotionalEmails { get; set; } = true;

        [StringLength(50)]
        public string? DefaultPaymentMethod { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? SavedPaymentMethods { get; set; } // JSON array

        [Column(TypeName = "nvarchar(max)")]
        public string? Notes { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? InternalNotes { get; set; }

        [StringLength(100)]
        public string? ExternalCustomerId { get; set; }

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        [Column(TypeName = "datetime2")]
        public DateTime? LastLoginAt { get; set; }

        // Navigation properties
        public virtual ICollection<CustomerAddress> CustomerAddresses { get; set; } = new List<CustomerAddress>();
        public virtual CustomerPreference? CustomerPreference { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
    }
}

