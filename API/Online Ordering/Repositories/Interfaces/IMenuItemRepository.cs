using DotNet_Starter_Template.Models.Entities;

namespace DotNet_Starter_Template.Repositories.Interfaces
{
    public interface IMenuItemRepository : IRepository<MenuItem>
    {
        Task<MenuItem?> GetByIdWithPortionsAsync(int id);
        Task<IEnumerable<MenuItem>> GetByCategoryIdAsync(int categoryId);
        Task<IEnumerable<MenuItem>> GetAvailableMenuItemsAsync();
        Task<bool> IsNameUniqueInCategoryAsync(int categoryId, string name, int? excludeId = null);
        Task<bool> CategoryExistsAsync(int categoryId);
    }
}

