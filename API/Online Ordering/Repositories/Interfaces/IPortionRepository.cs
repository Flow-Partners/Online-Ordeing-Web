using DotNet_Starter_Template.Models.Entities;

namespace DotNet_Starter_Template.Repositories.Interfaces
{
    public interface IPortionRepository : IRepository<Portion>
    {
        Task<Portion?> GetByIdWithPortionDetailsAsync(int id);
        Task<IEnumerable<Portion>> GetByMenuItemIdAsync(int menuItemId);
        Task<IEnumerable<Portion>> GetActivePortionsAsync();
        Task<bool> IsNameUniqueInMenuItemAsync(int menuItemId, string name, int? excludeId = null);
        Task<bool> MenuItemExistsAsync(int menuItemId);
    }
}

