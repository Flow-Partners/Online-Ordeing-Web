using DotNet_Starter_Template.Models.ViewModels.Portions;

namespace DotNet_Starter_Template.Models.ViewModels.MenuItems
{
    public class MenuItemDetailViewModel
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? BaseImageUrl { get; set; }
        public bool IsAvailable { get; set; }
        public int PreparationTime { get; set; }
        public int DisplayOrder { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? CreatedBy { get; set; }
        public int? UpdatedBy { get; set; }
        public List<PortionDetailViewModel> Portions { get; set; } = new List<PortionDetailViewModel>();
    }

    public class PortionBasicViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public bool IsActive { get; set; }
        public int PortionDetailCount { get; set; }
    }
}

