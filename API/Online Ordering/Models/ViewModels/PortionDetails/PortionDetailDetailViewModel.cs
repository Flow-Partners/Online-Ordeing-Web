namespace DotNet_Starter_Template.Models.ViewModels.PortionDetails
{
    public class PortionDetailDetailViewModel
    {
        public int Id { get; set; }
        public int PortionId { get; set; }
        public string PortionName { get; set; } = string.Empty;
        public int MenuItemId { get; set; }
        public string MenuItemName { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? CreatedBy { get; set; }
        public int? UpdatedBy { get; set; }
    }
}

