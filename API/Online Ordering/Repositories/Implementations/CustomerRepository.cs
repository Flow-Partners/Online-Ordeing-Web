using Microsoft.EntityFrameworkCore;
using DotNet_Starter_Template.Data;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Repositories.Interfaces;

namespace DotNet_Starter_Template.Repositories.Implementations
{
    public class CustomerRepository : Repository<Customer>, ICustomerRepository
    {
        public CustomerRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<Customer?> GetByIdWithAddressesAsync(int id)
        {
            return await _dbSet
                .Include(c => c.CustomerAddresses)
                .FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<Customer?> GetByEmailAsync(string email)
        {
            return await _dbSet
                .FirstOrDefaultAsync(c => c.Email == email);
        }

        public async Task<Customer?> GetByPhoneAsync(string phone)
        {
            return await _dbSet
                .FirstOrDefaultAsync(c => c.Phone == phone);
        }

        public async Task<CustomerAddress?> GetDefaultAddressAsync(int customerId)
        {
            var customer = await _dbSet
                .Include(c => c.CustomerAddresses)
                .FirstOrDefaultAsync(c => c.Id == customerId);

            return customer?.CustomerAddresses.FirstOrDefault(a => a.IsDefault && a.IsActive);
        }
    }
}


