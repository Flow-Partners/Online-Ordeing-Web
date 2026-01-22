using Microsoft.EntityFrameworkCore;
using DotNet_Starter_Template.Data;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Repositories.Interfaces;

namespace DotNet_Starter_Template.Repositories.Implementations
{
    public class MenuItemRepository : Repository<MenuItem>, IMenuItemRepository
    {
        public MenuItemRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<MenuItem?> GetByIdWithPortionsAsync(int id)
        {
            return await _dbSet
                .Include(mi => mi.Category)
                .Include(mi => mi.Portions)
                    .ThenInclude(p => p.PortionDetails)
                .FirstOrDefaultAsync(mi => mi.Id == id);
        }

        public async Task<IEnumerable<MenuItem>> GetByCategoryIdAsync(int categoryId)
        {
            return await _dbSet
                .Where(mi => mi.CategoryId == categoryId)
                .OrderBy(mi => mi.DisplayOrder)
                .ThenBy(mi => mi.Name)
                .ToListAsync();
        }

        public async Task<IEnumerable<MenuItem>> GetAvailableMenuItemsAsync()
        {
            return await _dbSet
                .Where(mi => mi.IsAvailable)
                .Include(mi => mi.Category)
                .ToListAsync();
        }

        public async Task<bool> IsNameUniqueInCategoryAsync(int categoryId, string name, int? excludeId = null)
        {
            var query = _dbSet.Where(mi => mi.CategoryId == categoryId && mi.Name == name);
            if (excludeId.HasValue)
            {
                query = query.Where(mi => mi.Id != excludeId.Value);
            }
            return !await query.AnyAsync();
        }

        public async Task<bool> CategoryExistsAsync(int categoryId)
        {
            return await _context.Categories.AnyAsync(c => c.Id == categoryId);
        }

        public async Task<IEnumerable<MenuItem>> GetByIdsAsync(IEnumerable<int> ids)
        {
            return await _dbSet
                .Where(mi => ids.Contains(mi.Id))
                .ToListAsync();
        }
    }
}

