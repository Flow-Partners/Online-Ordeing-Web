using System.ComponentModel.DataAnnotations;

namespace DotNet_Starter_Template.Models.DTOs.MenuItems
{
    public class UpdateMenuItemDto
    {
        [Required]
        public int CategoryId { get; set; }

        [Required]
        [StringLength(200)]
        public string Name { get; set; } = string.Empty;

        [StringLength(1000)]
        public string? Description { get; set; }

        [StringLength(500)]
        public string? BaseImageUrl { get; set; }

        [Required]
        public bool IsAvailable { get; set; } = true;

        [Required]
        public int PreparationTime { get; set; } = 0;
    }
}

