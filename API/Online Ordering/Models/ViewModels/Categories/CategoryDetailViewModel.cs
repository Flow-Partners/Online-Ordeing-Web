namespace DotNet_Starter_Template.Models.ViewModels.Categories
{
    public class CategoryDetailViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? ImageUrl { get; set; }
        public int DisplayOrder { get; set; }
        public bool IsVisible { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? CreatedBy { get; set; }
        public int? UpdatedBy { get; set; }
        public int MenuItemCount { get; set; }
        public List<MenuItemBasicViewModel> MenuItems { get; set; } = new List<MenuItemBasicViewModel>();
    }

    public class MenuItemBasicViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public bool IsAvailable { get; set; }
    }
}

