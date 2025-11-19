using Microsoft.EntityFrameworkCore;
using DotNet_Starter_Template.Data;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Repositories.Interfaces;

namespace DotNet_Starter_Template.Repositories.Implementations
{
    public class PortionDetailRepository : Repository<PortionDetail>, IPortionDetailRepository
    {
        public PortionDetailRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<PortionDetail>> GetByPortionIdAsync(int portionId)
        {
            return await _dbSet
                .Include(pd => pd.Portion)
                    .ThenInclude(p => p.MenuItem)
                .Where(pd => pd.PortionId == portionId)
                .OrderBy(pd => pd.Name)
                .ToListAsync();
        }

        public async Task<bool> IsNameUniqueInPortionAsync(int portionId, string name, int? excludeId = null)
        {
            var query = _dbSet.Where(pd => pd.PortionId == portionId && pd.Name == name);
            if (excludeId.HasValue)
            {
                query = query.Where(pd => pd.Id != excludeId.Value);
            }
            return !await query.AnyAsync();
        }

        public async Task<bool> PortionExistsAsync(int portionId)
        {
            return await _context.Portions.AnyAsync(p => p.Id == portionId);
        }
    }
}

