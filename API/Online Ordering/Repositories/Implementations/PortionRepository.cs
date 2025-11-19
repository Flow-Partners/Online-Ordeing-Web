using Microsoft.EntityFrameworkCore;
using DotNet_Starter_Template.Data;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Repositories.Interfaces;

namespace DotNet_Starter_Template.Repositories.Implementations
{
    public class PortionRepository : Repository<Portion>, IPortionRepository
    {
        public PortionRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<Portion?> GetByIdWithPortionDetailsAsync(int id)
        {
            return await _dbSet
                .Include(p => p.MenuItem)
                    .ThenInclude(mi => mi.Category)
                .Include(p => p.PortionDetails)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<Portion>> GetByMenuItemIdAsync(int menuItemId)
        {
            return await _dbSet
                .Where(p => p.MenuItemId == menuItemId)
                .OrderBy(p => p.DisplayOrder)
                .ToListAsync();
        }

        public async Task<IEnumerable<Portion>> GetActivePortionsAsync()
        {
            return await _dbSet
                .Where(p => p.IsActive)
                .Include(p => p.MenuItem)
                .ToListAsync();
        }

        public async Task<bool> IsNameUniqueInMenuItemAsync(int menuItemId, string name, int? excludeId = null)
        {
            var query = _dbSet.Where(p => p.MenuItemId == menuItemId && p.Name == name);
            if (excludeId.HasValue)
            {
                query = query.Where(p => p.Id != excludeId.Value);
            }
            return !await query.AnyAsync();
        }

        public async Task<bool> MenuItemExistsAsync(int menuItemId)
        {
            return await _context.MenuItems.AnyAsync(mi => mi.Id == menuItemId);
        }
    }
}

