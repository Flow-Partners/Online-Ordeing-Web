using System.ComponentModel.DataAnnotations;

namespace DotNet_Starter_Template.Models.DTOs.MenuItems
{
    public class CreateMenuItemWithPriceDto
    {
        // Optional: If provided, this is an update operation
        public int? Id { get; set; }

        [Required(ErrorMessage = "Category is required")]
        public int CategoryId { get; set; }

        [Required(ErrorMessage = "Menu item name is required")]
        [StringLength(200)]
        public string MenuItemName { get; set; } = string.Empty;

        [StringLength(1000)]
        public string? MenuItemDescription { get; set; }

        [StringLength(500)]
        public string? MenuItemBaseImageUrl { get; set; }

        public bool MenuItemIsAvailable { get; set; } = true;

        public int MenuItemPreparationTime { get; set; } = 0;

        // Complete body mode: Multiple portions with multiple portion details
        // If Portions array is provided, use it; otherwise, use the simple fields below
        public List<PortionInputDto>? Portions { get; set; }

        // Simple mode: Single portion with single portion detail (for backward compatibility)
        [StringLength(100)]
        public string? PortionName { get; set; }

        [StringLength(500)]
        public string? PortionDescription { get; set; }

        [StringLength(500)]
        public string? PortionImageUrl { get; set; }

        [StringLength(200)]
        public string? PortionDetailName { get; set; }

        [Range(0.01, 999999.99, ErrorMessage = "Price must be between 0.01 and 999999.99")]
        public decimal? Price { get; set; }
    }
}

