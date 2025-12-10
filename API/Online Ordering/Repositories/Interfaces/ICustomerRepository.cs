using DotNet_Starter_Template.Models.Entities;

namespace DotNet_Starter_Template.Repositories.Interfaces
{
    public interface ICustomerRepository : IRepository<Customer>
    {
        Task<Customer?> GetByIdWithAddressesAsync(int id);
        Task<Customer?> GetByEmailAsync(string email);
        Task<Customer?> GetByPhoneAsync(string phone);
        Task<CustomerAddress?> GetDefaultAddressAsync(int customerId);
    }
}


