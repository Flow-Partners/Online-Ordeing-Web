namespace DotNet_Starter_Template.Models.ViewModels.Portions
{
    public class PortionDetailViewModel
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
        public DateTime UpdatedAt { get; set; }
        public int? CreatedBy { get; set; }
        public int? UpdatedBy { get; set; }
        public List<PortionDetailBasicViewModel> PortionDetails { get; set; } = new List<PortionDetailBasicViewModel>();
    }

    public class PortionDetailBasicViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
    }
}

