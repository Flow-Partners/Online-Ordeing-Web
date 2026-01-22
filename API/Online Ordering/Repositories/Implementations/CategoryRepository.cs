using Microsoft.EntityFrameworkCore;
using DotNet_Starter_Template.Data;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Repositories.Interfaces;

namespace DotNet_Starter_Template.Repositories.Implementations
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<Category?> GetByIdWithMenuItemsAsync(int id)
        {
            return await _dbSet
                .Include(c => c.MenuItems)
                .FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<IEnumerable<Category>> GetVisibleCategoriesAsync()
        {
            return await _dbSet
                .Where(c => c.IsVisible)
                .OrderBy(c => c.DisplayOrder)
                .ToListAsync();
        }

        public async Task<IEnumerable<Category>> GetCategoriesOrderedByDisplayOrderAsync()
        {
            return await _dbSet
                .OrderBy(c => c.DisplayOrder)
                .ToListAsync();
        }

        public async Task<bool> IsNameUniqueAsync(string name, int? excludeId = null)
        {
            var query = _dbSet.Where(c => c.Name == name);
            if (excludeId.HasValue)
            {
                query = query.Where(c => c.Id != excludeId.Value);
            }
            return !await query.AnyAsync();
        }

        public async Task<Category?> GetByNameAsync(string name)
        {
            return await _dbSet.FirstOrDefaultAsync(c => c.Name == name);
        }

        public async Task<IEnumerable<Category>> GetByIdsAsync(IEnumerable<int> ids)
        {
            return await _dbSet
                .Where(c => ids.Contains(c.Id))
                .ToListAsync();
        }
    }
}

