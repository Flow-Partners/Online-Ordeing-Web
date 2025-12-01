using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNet_Starter_Template.Models.Entities
{
    public class CustomerPreference
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int CustomerId { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? Allergies { get; set; } // JSON array or comma-separated

        [Column(TypeName = "nvarchar(max)")]
        public string? DietaryRestrictions { get; set; } // Vegetarian, Vegan, Halal, etc.

        [StringLength(20)]
        public string? SpiceLevel { get; set; } // Mild, Medium, Hot, Extra Hot

        [Column(TypeName = "nvarchar(max)")]
        public string? FavoriteMenuItemIds { get; set; } // JSON array of MenuItem IDs

        [Column(TypeName = "nvarchar(max)")]
        public string? FavoriteCategoryIds { get; set; } // JSON array of Category IDs

        [Column(TypeName = "time")]
        public TimeSpan? PreferredOrderTime { get; set; }

        [Required]
        public bool AutoReorder { get; set; } = false;

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        // Navigation properties
        [ForeignKey("CustomerId")]
        public virtual Customer Customer { get; set; } = null!;
    }
}

