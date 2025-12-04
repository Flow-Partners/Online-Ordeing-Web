namespace DotNet_Starter_Template.Models.ViewModels.Orders
{
    public class OrderResponseViewModel
    {
        public int TicketId { get; set; }
        public string? TicketNumber { get; set; }
        public DateTime Date { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal RemainingAmount { get; set; }
        public bool IsClosed { get; set; }
        public int CustomerId { get; set; }
        public int? CustomerAddressId { get; set; }
        public List<OrderItemViewModel> OrderItems { get; set; } = new List<OrderItemViewModel>();
    }

    public class OrderItemViewModel
    {
        public int Id { get; set; }
        public int MenuItemId { get; set; }
        public string MenuItemName { get; set; } = string.Empty;
        public int? PortionId { get; set; }
        public string? PortionName { get; set; }
        public int? PortionDetailId { get; set; }
        public decimal Price { get; set; }
        public decimal Quantity { get; set; }
        public int PortionCount { get; set; }
        public DateTime CreatedDateTime { get; set; }
    }

    public class OrderListViewModel
    {
        public int Id { get; set; }
        public int TicketId { get; set; }
        public string? TicketNumber { get; set; }
        public int MenuItemId { get; set; }
        public string MenuItemName { get; set; } = string.Empty;
        public string? PortionName { get; set; }
        public decimal Price { get; set; }
        public decimal Quantity { get; set; }
        public decimal TotalAmount { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public string? CreatingUserName { get; set; }
        public int CustomerId { get; set; }
        public string? CustomerName { get; set; }
        public string? CustomerPhone { get; set; }
        public string? CustomerAddress { get; set; }
        public bool TicketIsClosed { get; set; }
        public int OrderNumber { get; set; }
    }
}

