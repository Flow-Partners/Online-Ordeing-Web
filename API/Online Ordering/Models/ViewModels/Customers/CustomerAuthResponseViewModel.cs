namespace DotNet_Starter_Template.Models.ViewModels.Customers
{
    public class CustomerAuthResponseViewModel
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string Phone { get; set; } = string.Empty;
        public string? Mobile { get; set; }
        public bool IsActive { get; set; }
        public bool IsVerified { get; set; }
        public int LoyaltyPoints { get; set; }
        public int TotalOrders { get; set; }
        public decimal TotalSpent { get; set; }
        public string FullName => string.IsNullOrWhiteSpace(LastName) ? FirstName : $"{FirstName} {LastName}";
    }
}

