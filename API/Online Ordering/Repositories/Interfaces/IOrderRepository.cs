using DotNet_Starter_Template.Models.Entities;

namespace DotNet_Starter_Template.Repositories.Interfaces
{
    public interface IOrderRepository : IRepository<Order>
    {
        Task<IEnumerable<Order>> GetByTicketIdAsync(int ticketId);
        Task<IEnumerable<Order>> GetByMenuItemIdAsync(int menuItemId);
        Task<int> GetNextOrderNumberAsync(int ticketId);
    }
}


