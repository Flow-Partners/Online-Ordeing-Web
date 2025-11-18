using System.ComponentModel.DataAnnotations;

namespace DotNet_Starter_Template.Models.DTOs.Categories
{
    public class UpdateCategoryDto
    {
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        [StringLength(500)]
        public string? Description { get; set; }

        [StringLength(500)]
        public string? ImageUrl { get; set; }

        [Required]
        public int DisplayOrder { get; set; } = 0;

        [Required]
        public bool IsVisible { get; set; } = true;
    }
}

