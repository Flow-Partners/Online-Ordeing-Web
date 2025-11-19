using Microsoft.EntityFrameworkCore;
using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Models.DTOs.Portions;
using DotNet_Starter_Template.Models.ViewModels.Portions;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Repositories.Interfaces;
using DotNet_Starter_Template.Services.Interfaces;

namespace DotNet_Starter_Template.Services.Implementations
{
    public class PortionService : IPortionService
    {
        private readonly IPortionRepository _portionRepository;

        public PortionService(IPortionRepository portionRepository)
        {
            _portionRepository = portionRepository;
        }

        public async Task<ApiResponse<PagedResult<PortionListViewModel>>> GetAllPortionsAsync(PaginationRequest request)
        {
            try
            {
                var portions = await _portionRepository.GetAllAsync();
                var portionViewModels = portions.Select(p => new PortionListViewModel
                {
                    Id = p.Id,
                    MenuItemId = p.MenuItemId,
                    MenuItemName = p.MenuItem?.Name ?? "",
                    Name = p.Name,
                    Description = p.Description,
                    ImageUrl = p.ImageUrl,
                    IsActive = p.IsActive,
                    DisplayOrder = p.DisplayOrder,
                    MinSelection = p.MinSelection,
                    MaxSelection = p.MaxSelection,
                    CreatedAt = p.CreatedAt,
                    PortionDetailCount = p.PortionDetails?.Count ?? 0
                }).ToList();

                // Apply search filter
                if (!string.IsNullOrWhiteSpace(request.SearchTerm))
                {
                    var searchTerm = request.SearchTerm.ToLower();
                    portionViewModels = portionViewModels
                        .Where(p => p.Name.ToLower().Contains(searchTerm) ||
                                   (p.Description != null && p.Description.ToLower().Contains(searchTerm)) ||
                                   p.MenuItemName.ToLower().Contains(searchTerm))
                        .ToList();
                }

                // Apply sorting
                if (!string.IsNullOrWhiteSpace(request.SortBy))
                {
                    portionViewModels = request.SortBy.ToLower() switch
                    {
                        "name" => request.SortDescending
                            ? portionViewModels.OrderByDescending(p => p.Name).ToList()
                            : portionViewModels.OrderBy(p => p.Name).ToList(),
                        "displayorder" => request.SortDescending
                            ? portionViewModels.OrderByDescending(p => p.DisplayOrder).ToList()
                            : portionViewModels.OrderBy(p => p.DisplayOrder).ToList(),
                        _ => portionViewModels.OrderBy(p => p.DisplayOrder).ToList()
                    };
                }
                else
                {
                    portionViewModels = portionViewModels.OrderBy(p => p.DisplayOrder).ToList();
                }

                var totalCount = portionViewModels.Count;
                var pagedItems = portionViewModels
                    .Skip((request.PageNumber - 1) * request.PageSize)
                    .Take(request.PageSize)
                    .ToList();

                var pagedResult = new PagedResult<PortionListViewModel>(pagedItems, totalCount, request.PageNumber, request.PageSize);
                return ApiResponse<PagedResult<PortionListViewModel>>.SuccessResult(pagedResult);
            }
            catch (Exception ex)
            {
                return ApiResponse<PagedResult<PortionListViewModel>>.ErrorResult($"Failed to get portions: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PortionDetailViewModel?>> GetPortionByIdAsync(int id)
        {
            try
            {
                var portion = await _portionRepository.GetByIdWithPortionDetailsAsync(id);
                if (portion == null)
                {
                    return ApiResponse<PortionDetailViewModel?>.ErrorResult("Portion not found");
                }

                var portionDetail = new PortionDetailViewModel
                {
                    Id = portion.Id,
                    MenuItemId = portion.MenuItemId,
                    MenuItemName = portion.MenuItem?.Name ?? "",
                    Name = portion.Name,
                    Description = portion.Description,
                    ImageUrl = portion.ImageUrl,
                    IsActive = portion.IsActive,
                    DisplayOrder = portion.DisplayOrder,
                    MinSelection = portion.MinSelection,
                    MaxSelection = portion.MaxSelection,
                    CreatedAt = portion.CreatedAt,
                    UpdatedAt = portion.UpdatedAt,
                    CreatedBy = portion.CreatedBy,
                    UpdatedBy = portion.UpdatedBy,
                    PortionDetails = portion.PortionDetails?.Select(pd => new PortionDetailBasicViewModel
                    {
                        Id = pd.Id,
                        Name = pd.Name,
                        Price = pd.Price
                    }).ToList() ?? new List<PortionDetailBasicViewModel>()
                };

                return ApiResponse<PortionDetailViewModel?>.SuccessResult(portionDetail);
            }
            catch (Exception ex)
            {
                return ApiResponse<PortionDetailViewModel?>.ErrorResult($"Failed to get portion: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PortionDetailViewModel>> CreatePortionAsync(CreatePortionDto createPortionDto)
        {
            try
            {
                // Check if menu item exists
                if (!await _portionRepository.MenuItemExistsAsync(createPortionDto.MenuItemId))
                {
                    return ApiResponse<PortionDetailViewModel>.ErrorResult("Menu item not found");
                }

                // Check if name is unique in menu item
                if (!await _portionRepository.IsNameUniqueInMenuItemAsync(createPortionDto.MenuItemId, createPortionDto.Name))
                {
                    return ApiResponse<PortionDetailViewModel>.ErrorResult("Portion with this name already exists for this menu item");
                }

                var portion = new Portion
                {
                    MenuItemId = createPortionDto.MenuItemId,
                    Name = createPortionDto.Name,
                    Description = createPortionDto.Description,
                    ImageUrl = createPortionDto.ImageUrl,
                    IsActive = createPortionDto.IsActive,
                    DisplayOrder = createPortionDto.DisplayOrder,
                    MinSelection = createPortionDto.MinSelection,
                    MaxSelection = createPortionDto.MaxSelection,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };

                var createdPortion = await _portionRepository.CreateAsync(portion);
                var portionDetail = await GetPortionByIdAsync(createdPortion.Id);

                return portionDetail.Data != null
                    ? ApiResponse<PortionDetailViewModel>.SuccessResult(portionDetail.Data, "Portion created successfully")
                    : ApiResponse<PortionDetailViewModel>.ErrorResult("Failed to retrieve created portion");
            }
            catch (Exception ex)
            {
                return ApiResponse<PortionDetailViewModel>.ErrorResult($"Failed to create portion: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PortionDetailViewModel?>> UpdatePortionAsync(int id, UpdatePortionDto updatePortionDto)
        {
            try
            {
                var portion = await _portionRepository.GetByIdAsync(id);
                if (portion == null)
                {
                    return ApiResponse<PortionDetailViewModel?>.ErrorResult("Portion not found");
                }

                // Check if menu item exists
                if (!await _portionRepository.MenuItemExistsAsync(updatePortionDto.MenuItemId))
                {
                    return ApiResponse<PortionDetailViewModel?>.ErrorResult("Menu item not found");
                }

                // Check if name is unique in menu item (excluding current portion)
                if (!await _portionRepository.IsNameUniqueInMenuItemAsync(updatePortionDto.MenuItemId, updatePortionDto.Name, id))
                {
                    return ApiResponse<PortionDetailViewModel?>.ErrorResult("Portion with this name already exists for this menu item");
                }

                portion.MenuItemId = updatePortionDto.MenuItemId;
                portion.Name = updatePortionDto.Name;
                portion.Description = updatePortionDto.Description;
                portion.ImageUrl = updatePortionDto.ImageUrl;
                portion.IsActive = updatePortionDto.IsActive;
                portion.DisplayOrder = updatePortionDto.DisplayOrder;
                portion.MinSelection = updatePortionDto.MinSelection;
                portion.MaxSelection = updatePortionDto.MaxSelection;
                portion.UpdatedAt = DateTime.UtcNow;

                await _portionRepository.UpdateAsync(portion);
                return await GetPortionByIdAsync(id);
            }
            catch (Exception ex)
            {
                return ApiResponse<PortionDetailViewModel?>.ErrorResult($"Failed to update portion: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeletePortionAsync(int id)
        {
            try
            {
                var portion = await _portionRepository.GetByIdAsync(id);
                if (portion == null)
                {
                    return ApiResponse<bool>.ErrorResult("Portion not found");
                }

                // Cascade delete will handle portion details
                var result = await _portionRepository.DeleteAsync(id);
                if (!result)
                {
                    return ApiResponse<bool>.ErrorResult("Failed to delete portion");
                }

                return ApiResponse<bool>.SuccessResult(true, "Portion deleted successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResult($"Failed to delete portion: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> ToggleActiveStatusAsync(int id, bool isActive)
        {
            try
            {
                var portion = await _portionRepository.GetByIdAsync(id);
                if (portion == null)
                {
                    return ApiResponse<bool>.ErrorResult("Portion not found");
                }

                portion.IsActive = isActive;
                portion.UpdatedAt = DateTime.UtcNow;

                await _portionRepository.UpdateAsync(portion);
                return ApiResponse<bool>.SuccessResult(true, $"Portion {(isActive ? "activated" : "deactivated")} successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResult($"Failed to update portion status: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<PortionListViewModel>>> GetPortionsByMenuItemIdAsync(int menuItemId)
        {
            try
            {
                var portions = await _portionRepository.GetByMenuItemIdAsync(menuItemId);
                var portionViewModels = portions.Select(p => new PortionListViewModel
                {
                    Id = p.Id,
                    MenuItemId = p.MenuItemId,
                    MenuItemName = p.MenuItem?.Name ?? "",
                    Name = p.Name,
                    Description = p.Description,
                    ImageUrl = p.ImageUrl,
                    IsActive = p.IsActive,
                    DisplayOrder = p.DisplayOrder,
                    MinSelection = p.MinSelection,
                    MaxSelection = p.MaxSelection,
                    CreatedAt = p.CreatedAt,
                    PortionDetailCount = p.PortionDetails?.Count ?? 0
                }).ToList();

                return ApiResponse<List<PortionListViewModel>>.SuccessResult(portionViewModels);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<PortionListViewModel>>.ErrorResult($"Failed to get portions: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> IsNameUniqueInMenuItemAsync(int menuItemId, string name, int? excludeId = null)
        {
            try
            {
                var isUnique = await _portionRepository.IsNameUniqueInMenuItemAsync(menuItemId, name, excludeId);
                return ApiResponse<bool>.SuccessResult(isUnique);
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResult($"Failed to check name uniqueness: {ex.Message}");
            }
        }
    }
}

