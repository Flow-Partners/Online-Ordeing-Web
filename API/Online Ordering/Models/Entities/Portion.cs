using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNet_Starter_Template.Models.Entities
{
    public class Portion
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int MenuItemId { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        [StringLength(500)]
        public string? Description { get; set; }

        [StringLength(500)]
        [Column("ImageUrl")]
        public string? ImageUrl { get; set; }

        [Required]
        public bool IsActive { get; set; } = true;

        [Required]
        public int DisplayOrder { get; set; } = 0;

        [Required]
        public int MinSelection { get; set; } = 0;

        public int? MaxSelection { get; set; }

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        public int? CreatedBy { get; set; }

        public int? UpdatedBy { get; set; }

        // Navigation properties
        [ForeignKey("MenuItemId")]
        public virtual MenuItem MenuItem { get; set; } = null!;

        public virtual ICollection<PortionDetail> PortionDetails { get; set; } = new List<PortionDetail>();
    }
}

