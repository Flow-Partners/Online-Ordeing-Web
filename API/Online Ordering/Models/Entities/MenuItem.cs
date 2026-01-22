using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNet_Starter_Template.Models.Entities
{
    public class MenuItem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int CategoryId { get; set; }

        [Required]
        [StringLength(200)]
        public string Name { get; set; } = string.Empty;

        [StringLength(1000)]
        public string? Description { get; set; }

        [StringLength(500)]
        [Column("BaseImageUrl")]
        public string? BaseImageUrl { get; set; }

        [Required]
        public bool IsAvailable { get; set; } = true;

        [Required]
        public int PreparationTime { get; set; } = 0;

        [Required]
        public int DisplayOrder { get; set; } = 0;

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        public int? CreatedBy { get; set; }

        public int? UpdatedBy { get; set; }

        // Navigation properties
        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; } = null!;

        public virtual ICollection<Portion> Portions { get; set; } = new List<Portion>();
    }
}

