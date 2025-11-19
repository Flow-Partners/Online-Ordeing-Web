using DotNet_Starter_Template.Models.Entities;

namespace DotNet_Starter_Template.Repositories.Interfaces
{
    public interface IPortionDetailRepository : IRepository<PortionDetail>
    {
        Task<IEnumerable<PortionDetail>> GetByPortionIdAsync(int portionId);
        Task<bool> IsNameUniqueInPortionAsync(int portionId, string name, int? excludeId = null);
        Task<bool> PortionExistsAsync(int portionId);
    }
}

