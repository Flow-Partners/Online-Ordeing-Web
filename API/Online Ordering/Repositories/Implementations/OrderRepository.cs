using Microsoft.EntityFrameworkCore;
using DotNet_Starter_Template.Data;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Repositories.Interfaces;

namespace DotNet_Starter_Template.Repositories.Implementations
{
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        public OrderRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Order>> GetByTicketIdAsync(int ticketId)
        {
            return await _dbSet
                .Where(o => o.TicketId == ticketId)
                .Include(o => o.MenuItem)
                .Include(o => o.Portion)
                .Include(o => o.PortionDetail)
                .OrderBy(o => o.OrderNumber)
                .ToListAsync();
        }

        public async Task<IEnumerable<Order>> GetByMenuItemIdAsync(int menuItemId)
        {
            return await _dbSet
                .Where(o => o.MenuItemId == menuItemId)
                .ToListAsync();
        }

        public async Task<int> GetNextOrderNumberAsync(int ticketId)
        {
            var maxOrderNumber = await _dbSet
                .Where(o => o.TicketId == ticketId)
                .MaxAsync(o => (int?)o.OrderNumber) ?? 0;

            return maxOrderNumber + 1;
        }

        public new async Task<IEnumerable<Order>> GetAllAsync()
        {
            return await _dbSet
                .Include(o => o.Ticket)
                    .ThenInclude(t => t!.Customer)
                .Include(o => o.Ticket)
                    .ThenInclude(t => t!.CustomerAddress)
                .Include(o => o.MenuItem)
                .Include(o => o.Portion)
                .OrderByDescending(o => o.CreatedDateTime)
                .ToListAsync();
        }
    }
}


