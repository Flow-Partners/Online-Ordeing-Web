namespace DotNet_Starter_Template.Models.ViewModels.Portions
{
    public class PortionListViewModel
    {
        public int Id { get; set; }
        public int MenuItemId { get; set; }
        public string MenuItemName { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? ImageUrl { get; set; }
        public bool IsActive { get; set; }
        public int DisplayOrder { get; set; }
        public int MinSelection { get; set; }
        public int? MaxSelection { get; set; }
        public DateTime CreatedAt { get; set; }
        public int PortionDetailCount { get; set; }
    }
}

