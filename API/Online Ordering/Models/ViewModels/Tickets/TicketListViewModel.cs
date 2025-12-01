namespace DotNet_Starter_Template.Models.ViewModels.Tickets
{
    public class TicketListViewModel
    {
        public int Id { get; set; }
        public string? TicketNumber { get; set; }
        public DateTime Date { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal RemainingAmount { get; set; }
        public bool IsClosed { get; set; }
        public bool IsLocked { get; set; }
        public int CustomerId { get; set; }
        public string? CustomerName { get; set; }
        public string? CustomerPhone { get; set; }
        public int? CustomerAddressId { get; set; }
        public string? CustomerAddress { get; set; }
        public int OrderCount { get; set; }
        public DateTime LastUpdateTime { get; set; }
    }
}

