namespace DotNet_Starter_Template.Models.ViewModels.MenuItems
{
    public class MenuItemListViewModel
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? BaseImageUrl { get; set; }
        public bool IsAvailable { get; set; }
        public int PreparationTime { get; set; }
        public DateTime CreatedAt { get; set; }
        public int PortionCount { get; set; }
    }
}

