using Microsoft.EntityFrameworkCore;
using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Models.DTOs.PortionDetails;
using DotNet_Starter_Template.Models.ViewModels.PortionDetails;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Repositories.Interfaces;
using DotNet_Starter_Template.Services.Interfaces;

namespace DotNet_Starter_Template.Services.Implementations
{
    public class PortionDetailService : IPortionDetailService
    {
        private readonly IPortionDetailRepository _portionDetailRepository;
        private readonly IPortionRepository _portionRepository;

        public PortionDetailService(IPortionDetailRepository portionDetailRepository, IPortionRepository portionRepository)
        {
            _portionDetailRepository = portionDetailRepository;
            _portionRepository = portionRepository;
        }

        public async Task<ApiResponse<PagedResult<PortionDetailListViewModel>>> GetAllPortionDetailsAsync(PaginationRequest request)
        {
            try
            {
                var portionDetails = await _portionDetailRepository.GetAllAsync();
                var portionDetailViewModels = portionDetails.Select(pd => new PortionDetailListViewModel
                {
                    Id = pd.Id,
                    PortionId = pd.PortionId,
                    PortionName = pd.Portion?.Name ?? "",
                    Name = pd.Name,
                    Price = pd.Price,
                    CreatedAt = pd.CreatedAt
                }).ToList();

                // Apply search filter
                if (!string.IsNullOrWhiteSpace(request.SearchTerm))
                {
                    var searchTerm = request.SearchTerm.ToLower();
                    portionDetailViewModels = portionDetailViewModels
                        .Where(pd => pd.Name.ToLower().Contains(searchTerm) ||
                                   pd.PortionName.ToLower().Contains(searchTerm))
                        .ToList();
                }

                // Apply sorting
                if (!string.IsNullOrWhiteSpace(request.SortBy))
                {
                    portionDetailViewModels = request.SortBy.ToLower() switch
                    {
                        "name" => request.SortDescending
                            ? portionDetailViewModels.OrderByDescending(pd => pd.Name).ToList()
                            : portionDetailViewModels.OrderBy(pd => pd.Name).ToList(),
                        "price" => request.SortDescending
                            ? portionDetailViewModels.OrderByDescending(pd => pd.Price).ToList()
                            : portionDetailViewModels.OrderBy(pd => pd.Price).ToList(),
                        _ => portionDetailViewModels.OrderBy(pd => pd.Name).ToList()
                    };
                }
                else
                {
                    portionDetailViewModels = portionDetailViewModels.OrderBy(pd => pd.Name).ToList();
                }

                var totalCount = portionDetailViewModels.Count;
                var pagedItems = portionDetailViewModels
                    .Skip((request.PageNumber - 1) * request.PageSize)
                    .Take(request.PageSize)
                    .ToList();

                var pagedResult = new PagedResult<PortionDetailListViewModel>(pagedItems, totalCount, request.PageNumber, request.PageSize);
                return ApiResponse<PagedResult<PortionDetailListViewModel>>.SuccessResult(pagedResult);
            }
            catch (Exception ex)
            {
                return ApiResponse<PagedResult<PortionDetailListViewModel>>.ErrorResult($"Failed to get portion details: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PortionDetailDetailViewModel?>> GetPortionDetailByIdAsync(int id)
        {
            try
            {
                var portionDetail = await _portionDetailRepository.GetByIdAsync(id);
                if (portionDetail == null)
                {
                    return ApiResponse<PortionDetailDetailViewModel?>.ErrorResult("Portion detail not found");
                }

                // Load related data with navigation properties
                var portion = await _portionRepository.GetByIdWithPortionDetailsAsync(portionDetail.PortionId);

                var portionDetailViewModel = new PortionDetailDetailViewModel
                {
                    Id = portionDetail.Id,
                    PortionId = portionDetail.PortionId,
                    PortionName = portion?.Name ?? "",
                    MenuItemId = portion?.MenuItemId ?? 0,
                    MenuItemName = portion?.MenuItem?.Name ?? "",
                    Name = portionDetail.Name,
                    Price = portionDetail.Price,
                    CreatedAt = portionDetail.CreatedAt,
                    UpdatedAt = portionDetail.UpdatedAt,
                    CreatedBy = portionDetail.CreatedBy,
                    UpdatedBy = portionDetail.UpdatedBy
                };

                return ApiResponse<PortionDetailDetailViewModel?>.SuccessResult(portionDetailViewModel);
            }
            catch (Exception ex)
            {
                return ApiResponse<PortionDetailDetailViewModel?>.ErrorResult($"Failed to get portion detail: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PortionDetailDetailViewModel>> CreatePortionDetailAsync(CreatePortionDetailDto createPortionDetailDto)
        {
            try
            {
                // Check if portion exists
                if (!await _portionDetailRepository.PortionExistsAsync(createPortionDetailDto.PortionId))
                {
                    return ApiResponse<PortionDetailDetailViewModel>.ErrorResult("Portion not found");
                }

                // Check if name is unique in portion
                if (!await _portionDetailRepository.IsNameUniqueInPortionAsync(createPortionDetailDto.PortionId, createPortionDetailDto.Name))
                {
                    return ApiResponse<PortionDetailDetailViewModel>.ErrorResult("Portion detail with this name already exists for this portion");
                }

                var portionDetail = new PortionDetail
                {
                    PortionId = createPortionDetailDto.PortionId,
                    Name = createPortionDetailDto.Name,
                    Price = createPortionDetailDto.Price,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };

                var createdPortionDetail = await _portionDetailRepository.CreateAsync(portionDetail);
                var portionDetailViewModel = await GetPortionDetailByIdAsync(createdPortionDetail.Id);

                return portionDetailViewModel.Data != null
                    ? ApiResponse<PortionDetailDetailViewModel>.SuccessResult(portionDetailViewModel.Data, "Portion detail created successfully")
                    : ApiResponse<PortionDetailDetailViewModel>.ErrorResult("Failed to retrieve created portion detail");
            }
            catch (Exception ex)
            {
                return ApiResponse<PortionDetailDetailViewModel>.ErrorResult($"Failed to create portion detail: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PortionDetailDetailViewModel?>> UpdatePortionDetailAsync(int id, UpdatePortionDetailDto updatePortionDetailDto)
        {
            try
            {
                var portionDetail = await _portionDetailRepository.GetByIdAsync(id);
                if (portionDetail == null)
                {
                    return ApiResponse<PortionDetailDetailViewModel?>.ErrorResult("Portion detail not found");
                }

                // Check if portion exists
                if (!await _portionDetailRepository.PortionExistsAsync(updatePortionDetailDto.PortionId))
                {
                    return ApiResponse<PortionDetailDetailViewModel?>.ErrorResult("Portion not found");
                }

                // Check if name is unique in portion (excluding current portion detail)
                if (!await _portionDetailRepository.IsNameUniqueInPortionAsync(updatePortionDetailDto.PortionId, updatePortionDetailDto.Name, id))
                {
                    return ApiResponse<PortionDetailDetailViewModel?>.ErrorResult("Portion detail with this name already exists for this portion");
                }

                portionDetail.PortionId = updatePortionDetailDto.PortionId;
                portionDetail.Name = updatePortionDetailDto.Name;
                portionDetail.Price = updatePortionDetailDto.Price;
                portionDetail.UpdatedAt = DateTime.UtcNow;

                await _portionDetailRepository.UpdateAsync(portionDetail);
                return await GetPortionDetailByIdAsync(id);
            }
            catch (Exception ex)
            {
                return ApiResponse<PortionDetailDetailViewModel?>.ErrorResult($"Failed to update portion detail: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeletePortionDetailAsync(int id)
        {
            try
            {
                var portionDetail = await _portionDetailRepository.GetByIdAsync(id);
                if (portionDetail == null)
                {
                    return ApiResponse<bool>.ErrorResult("Portion detail not found");
                }

                var result = await _portionDetailRepository.DeleteAsync(id);
                if (!result)
                {
                    return ApiResponse<bool>.ErrorResult("Failed to delete portion detail");
                }

                return ApiResponse<bool>.SuccessResult(true, "Portion detail deleted successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResult($"Failed to delete portion detail: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<PortionDetailListViewModel>>> GetPortionDetailsByPortionIdAsync(int portionId)
        {
            try
            {
                var portionDetails = await _portionDetailRepository.GetByPortionIdAsync(portionId);
                
                // Load portion to get name
                var portion = await _portionRepository.GetByIdAsync(portionId);
                var portionName = portion?.Name ?? "";

                var portionDetailViewModels = portionDetails.Select(pd => new PortionDetailListViewModel
                {
                    Id = pd.Id,
                    PortionId = pd.PortionId,
                    PortionName = portionName,
                    Name = pd.Name,
                    Price = pd.Price,
                    CreatedAt = pd.CreatedAt
                }).ToList();

                return ApiResponse<List<PortionDetailListViewModel>>.SuccessResult(portionDetailViewModels);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<PortionDetailListViewModel>>.ErrorResult($"Failed to get portion details: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> IsNameUniqueInPortionAsync(int portionId, string name, int? excludeId = null)
        {
            try
            {
                var isUnique = await _portionDetailRepository.IsNameUniqueInPortionAsync(portionId, name, excludeId);
                return ApiResponse<bool>.SuccessResult(isUnique);
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResult($"Failed to check name uniqueness: {ex.Message}");
            }
        }
    }
}

