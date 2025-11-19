using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace DotNet_Starter_Template.Models.DTOs.MenuItems
{
    public class PortionInputDto
    {
        [Required(ErrorMessage = "Portion name is required")]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        [StringLength(500)]
        public string? Description { get; set; }

        // File upload for portion image
        public IFormFile? Image { get; set; }

        // Keep this for backward compatibility
        [StringLength(500)]
        public string? ImageUrl { get; set; }

        public bool IsActive { get; set; } = true;

        public int DisplayOrder { get; set; } = 0;

        public int MinSelection { get; set; } = 1;

        public int? MaxSelection { get; set; } = 1;

        // PortionDetails is optional - if empty, use price from top level
        // Remove [Required] and [MinLength] to allow empty array when price is provided
        public List<PortionDetailInputDto>? PortionDetails { get; set; }
    }

    public class PortionDetailInputDto
    {
        [Required(ErrorMessage = "Portion detail name is required")]
        [StringLength(200)]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Price is required")]
        [Range(0.01, 999999.99, ErrorMessage = "Price must be between 0.01 and 999999.99")]
        public decimal Price { get; set; }
    }
}

