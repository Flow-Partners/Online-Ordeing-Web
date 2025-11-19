using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Models.DTOs.PortionDetails;
using DotNet_Starter_Template.Models.ViewModels.PortionDetails;

namespace DotNet_Starter_Template.Services.Interfaces
{
    public interface IPortionDetailService
    {
        Task<ApiResponse<PagedResult<PortionDetailListViewModel>>> GetAllPortionDetailsAsync(PaginationRequest request);
        Task<ApiResponse<PortionDetailDetailViewModel?>> GetPortionDetailByIdAsync(int id);
        Task<ApiResponse<PortionDetailDetailViewModel>> CreatePortionDetailAsync(CreatePortionDetailDto createPortionDetailDto);
        Task<ApiResponse<PortionDetailDetailViewModel?>> UpdatePortionDetailAsync(int id, UpdatePortionDetailDto updatePortionDetailDto);
        Task<ApiResponse<bool>> DeletePortionDetailAsync(int id);
        Task<ApiResponse<List<PortionDetailListViewModel>>> GetPortionDetailsByPortionIdAsync(int portionId);
        Task<ApiResponse<bool>> IsNameUniqueInPortionAsync(int portionId, string name, int? excludeId = null);
    }
}

