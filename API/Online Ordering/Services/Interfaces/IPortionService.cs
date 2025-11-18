using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Models.DTOs.Portions;
using DotNet_Starter_Template.Models.ViewModels.Portions;

namespace DotNet_Starter_Template.Services.Interfaces
{
    public interface IPortionService
    {
        Task<ApiResponse<PagedResult<PortionListViewModel>>> GetAllPortionsAsync(PaginationRequest request);
        Task<ApiResponse<PortionDetailViewModel?>> GetPortionByIdAsync(int id);
        Task<ApiResponse<PortionDetailViewModel>> CreatePortionAsync(CreatePortionDto createPortionDto);
        Task<ApiResponse<PortionDetailViewModel?>> UpdatePortionAsync(int id, UpdatePortionDto updatePortionDto);
        Task<ApiResponse<bool>> DeletePortionAsync(int id);
        Task<ApiResponse<bool>> ToggleActiveStatusAsync(int id, bool isActive);
        Task<ApiResponse<List<PortionListViewModel>>> GetPortionsByMenuItemIdAsync(int menuItemId);
        Task<ApiResponse<bool>> IsNameUniqueInMenuItemAsync(int menuItemId, string name, int? excludeId = null);
    }
}

