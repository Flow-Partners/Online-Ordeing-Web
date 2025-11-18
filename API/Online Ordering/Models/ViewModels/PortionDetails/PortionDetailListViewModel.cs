namespace DotNet_Starter_Template.Models.ViewModels.PortionDetails
{
    public class PortionDetailListViewModel
    {
        public int Id { get; set; }
        public int PortionId { get; set; }
        public string PortionName { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}

