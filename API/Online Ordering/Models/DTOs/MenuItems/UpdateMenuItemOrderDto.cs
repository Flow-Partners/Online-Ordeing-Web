using System.ComponentModel.DataAnnotations;

namespace DotNet_Starter_Template.Models.DTOs.MenuItems
{
    public class UpdateMenuItemOrderDto
    {
        [Required]
        public int CategoryId { get; set; }

        [Required]
        public List<MenuItemOrderItem> MenuItems { get; set; } = new List<MenuItemOrderItem>();
    }

    public class MenuItemOrderItem
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public int DisplayOrder { get; set; }
    }
}
