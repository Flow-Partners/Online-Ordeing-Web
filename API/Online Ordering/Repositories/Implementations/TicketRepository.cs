using Microsoft.EntityFrameworkCore;
using DotNet_Starter_Template.Data;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Repositories.Interfaces;

namespace DotNet_Starter_Template.Repositories.Implementations
{
    public class TicketRepository : Repository<Ticket>, ITicketRepository
    {
        public TicketRepository(ApplicationDbContext context) : base(context)
        {
        }

        public override async Task<IEnumerable<Ticket>> GetAllAsync()
        {
            return await _dbSet
                .Include(t => t.Customer)
                .Include(t => t.CustomerAddress)
                .Include(t => t.Orders)
                .ToListAsync();
        }

        public async Task<Ticket?> GetByIdWithOrdersAsync(int id)
        {
            return await _dbSet
                .Include(t => t.Orders)
                    .ThenInclude(o => o.MenuItem)
                .Include(t => t.Orders)
                    .ThenInclude(o => o.Portion)
                .Include(t => t.Orders)
                    .ThenInclude(o => o.PortionDetail)
                .Include(t => t.Customer)
                .Include(t => t.CustomerAddress)
                .FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task<Ticket?> GetByTicketNumberAsync(string ticketNumber)
        {
            return await _dbSet
                .FirstOrDefaultAsync(t => t.TicketNumber == ticketNumber);
        }

        public async Task<IEnumerable<Ticket>> GetByCustomerIdAsync(int customerId)
        {
            return await _dbSet
                .Include(t => t.Customer)
                .Include(t => t.CustomerAddress)
                .Include(t => t.Orders)
                .Where(t => t.CustomerId == customerId)
                .OrderByDescending(t => t.Date)
                .ToListAsync();
        }

        public async Task<IEnumerable<Ticket>> GetByCustomerIdOrPhoneAsync(int customerId, string? customerPhone, string? customerEmail)
        {
            // First get tickets by CustomerId
            var ticketsByCustomerId = await _dbSet
                .Include(t => t.Customer)
                .Include(t => t.CustomerAddress)
                .Include(t => t.Orders)
                .Where(t => t.CustomerId == customerId)
                .ToListAsync();

            // If we found tickets, return them
            if (ticketsByCustomerId.Any())
            {
                return ticketsByCustomerId.OrderByDescending(t => t.Date);
            }

            // If no tickets found by CustomerId, try to find by phone/email
            // This handles cases where CustomerId wasn't set correctly on tickets
            var ticketsByPhoneOrEmail = new List<Ticket>();

            if (!string.IsNullOrWhiteSpace(customerPhone))
            {
                var byPhone = await _dbSet
                    .Include(t => t.Customer)
                    .Include(t => t.CustomerAddress)
                    .Include(t => t.Orders)
                    .Where(t => t.CustomerId == null && 
                                t.Customer != null && 
                                t.Customer.Phone == customerPhone)
                    .ToListAsync();
                ticketsByPhoneOrEmail.AddRange(byPhone);
            }

            if (!string.IsNullOrWhiteSpace(customerEmail))
            {
                var byEmail = await _dbSet
                    .Include(t => t.Customer)
                    .Include(t => t.CustomerAddress)
                    .Include(t => t.Orders)
                    .Where(t => t.CustomerId == null && 
                                t.Customer != null && 
                                !string.IsNullOrWhiteSpace(t.Customer.Email) &&
                                t.Customer.Email == customerEmail)
                    .ToListAsync();
                ticketsByPhoneOrEmail.AddRange(byEmail);
            }

            // Remove duplicates and return
            return ticketsByPhoneOrEmail
                .GroupBy(t => t.Id)
                .Select(g => g.First())
                .OrderByDescending(t => t.Date);
        }

        public async Task<string> GenerateTicketNumberAsync()
        {
            var today = DateTime.UtcNow.Date;
            var lastTicket = await _dbSet
                .Where(t => t.Date.Date == today)
                .OrderByDescending(t => t.TicketNumber)
                .FirstOrDefaultAsync();

            if (lastTicket == null || string.IsNullOrEmpty(lastTicket.TicketNumber))
            {
                return $"TKT-{today:yyyyMMdd}-001";
            }

            var parts = lastTicket.TicketNumber.Split('-');
            if (parts.Length == 3 && int.TryParse(parts[2], out int lastNumber))
            {
                var nextNumber = lastNumber + 1;
                return $"TKT-{today:yyyyMMdd}-{nextNumber:D3}";
            }

            return $"TKT-{today:yyyyMMdd}-001";
        }
    }
}

