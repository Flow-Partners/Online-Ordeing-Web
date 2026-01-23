using DotNet_Starter_Template.Models.Entities;

namespace DotNet_Starter_Template.Repositories.Interfaces
{
    public interface ICategoryRepository : IRepository<Category>
    {
        Task<Category?> GetByIdWithMenuItemsAsync(int id);
        Task<IEnumerable<Category>> GetVisibleCategoriesAsync();
        Task<IEnumerable<Category>> GetCategoriesOrderedByDisplayOrderAsync();
        Task<bool> IsNameUniqueAsync(string name, int? excludeId = null);
        Task<Category?> GetByNameAsync(string name);
        Task<IEnumerable<Category>> GetByIdsAsync(IEnumerable<int> ids);
        Task<bool> CategoryExistsAsync(int categoryId);
    }
}

