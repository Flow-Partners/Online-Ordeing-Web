namespace DotNet_Starter_Template.Models.ViewModels.Categories
{
    public class CategoryListViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? ImageUrl { get; set; }
        public int DisplayOrder { get; set; }
        public bool IsVisible { get; set; }
        public DateTime CreatedAt { get; set; }
        public int MenuItemCount { get; set; }
    }
}

