using DotNet_Starter_Template.Models.Entities;

namespace DotNet_Starter_Template.Repositories.Interfaces
{
    public interface ITicketRepository : IRepository<Ticket>
    {
        Task<Ticket?> GetByIdWithOrdersAsync(int id);
        Task<Ticket?> GetByTicketNumberAsync(string ticketNumber);
        Task<IEnumerable<Ticket>> GetByCustomerIdAsync(int customerId);
        Task<IEnumerable<Ticket>> GetByCustomerIdOrPhoneAsync(int customerId, string? customerPhone, string? customerEmail);
        Task<string> GenerateTicketNumberAsync();
    }
}

