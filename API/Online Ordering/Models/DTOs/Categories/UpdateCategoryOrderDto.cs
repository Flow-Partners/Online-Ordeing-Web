using System.ComponentModel.DataAnnotations;

namespace DotNet_Starter_Template.Models.DTOs.Categories
{
    public class UpdateCategoryOrderDto
    {
        [Required]
        public List<CategoryOrderItem> Categories { get; set; } = new List<CategoryOrderItem>();
    }

    public class CategoryOrderItem
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public int DisplayOrder { get; set; }
    }
}
