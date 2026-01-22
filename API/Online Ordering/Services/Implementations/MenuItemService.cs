using Microsoft.EntityFrameworkCore;
using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Models.DTOs.MenuItems;
using DotNet_Starter_Template.Models.ViewModels.MenuItems;
using DotNet_Starter_Template.Models.ViewModels.Portions;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Repositories.Interfaces;
using DotNet_Starter_Template.Services.Interfaces;

namespace DotNet_Starter_Template.Services.Implementations
{
    public class MenuItemService : IMenuItemService
    {
        private readonly IMenuItemRepository _menuItemRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IPortionRepository _portionRepository;
        private readonly IPortionDetailRepository _portionDetailRepository;
        private readonly IFileUploadService _fileUploadService;

        public MenuItemService(
            IMenuItemRepository menuItemRepository, 
            ICategoryRepository categoryRepository,
            IPortionRepository portionRepository,
            IPortionDetailRepository portionDetailRepository,
            IFileUploadService fileUploadService)
        {
            _menuItemRepository = menuItemRepository;
            _categoryRepository = categoryRepository;
            _portionRepository = portionRepository;
            _portionDetailRepository = portionDetailRepository;
            _fileUploadService = fileUploadService;
        }

        public async Task<ApiResponse<PagedResult<MenuItemListViewModel>>> GetAllMenuItemsAsync(PaginationRequest request)
        {
            try
            {
                var menuItems = await _menuItemRepository.GetAllAsync();
                var menuItemViewModels = menuItems.Select(mi => new MenuItemListViewModel
                {
                    Id = mi.Id,
                    CategoryId = mi.CategoryId,
                    CategoryName = mi.Category?.Name ?? "",
                    Name = mi.Name,
                    Description = mi.Description,
                    BaseImageUrl = mi.BaseImageUrl,
                    IsAvailable = mi.IsAvailable,
                    PreparationTime = mi.PreparationTime,
                    DisplayOrder = mi.DisplayOrder,
                    CreatedAt = mi.CreatedAt,
                    PortionCount = mi.Portions?.Count ?? 0
                }).ToList();

                // Apply search filter
                if (!string.IsNullOrWhiteSpace(request.SearchTerm))
                {
                    var searchTerm = request.SearchTerm.ToLower();
                    menuItemViewModels = menuItemViewModels
                        .Where(mi => mi.Name.ToLower().Contains(searchTerm) ||
                                   (mi.Description != null && mi.Description.ToLower().Contains(searchTerm)) ||
                                   mi.CategoryName.ToLower().Contains(searchTerm))
                        .ToList();
                }

                // Apply sorting
                if (!string.IsNullOrWhiteSpace(request.SortBy))
                {
                    menuItemViewModels = request.SortBy.ToLower() switch
                    {
                        "name" => request.SortDescending
                            ? menuItemViewModels.OrderByDescending(mi => mi.Name).ToList()
                            : menuItemViewModels.OrderBy(mi => mi.Name).ToList(),
                        "category" => request.SortDescending
                            ? menuItemViewModels.OrderByDescending(mi => mi.CategoryName).ToList()
                            : menuItemViewModels.OrderBy(mi => mi.CategoryName).ToList(),
                        "createdat" => request.SortDescending
                            ? menuItemViewModels.OrderByDescending(mi => mi.CreatedAt).ToList()
                            : menuItemViewModels.OrderBy(mi => mi.CreatedAt).ToList(),
                        _ => menuItemViewModels.OrderBy(mi => mi.Name).ToList()
                    };
                }
                else
                {
                    menuItemViewModels = menuItemViewModels.OrderBy(mi => mi.Name).ToList();
                }

                var totalCount = menuItemViewModels.Count;
                var pagedItems = menuItemViewModels
                    .Skip((request.PageNumber - 1) * request.PageSize)
                    .Take(request.PageSize)
                    .ToList();

                var pagedResult = new PagedResult<MenuItemListViewModel>(pagedItems, totalCount, request.PageNumber, request.PageSize);
                return ApiResponse<PagedResult<MenuItemListViewModel>>.SuccessResult(pagedResult);
            }
            catch (Exception ex)
            {
                return ApiResponse<PagedResult<MenuItemListViewModel>>.ErrorResult($"Failed to get menu items: {ex.Message}");
            }
        }

        public async Task<ApiResponse<MenuItemDetailViewModel?>> GetMenuItemByIdAsync(int id)
        {
            try
            {
                var menuItem = await _menuItemRepository.GetByIdWithPortionsAsync(id);
                if (menuItem == null)
                {
                    return ApiResponse<MenuItemDetailViewModel?>.ErrorResult("Menu item not found");
                }

                var menuItemDetail = new MenuItemDetailViewModel
                {
                    Id = menuItem.Id,
                    CategoryId = menuItem.CategoryId,
                    CategoryName = menuItem.Category?.Name ?? "",
                    Name = menuItem.Name,
                    Description = menuItem.Description,
                    BaseImageUrl = menuItem.BaseImageUrl,
                    IsAvailable = menuItem.IsAvailable,
                    PreparationTime = menuItem.PreparationTime,
                    DisplayOrder = menuItem.DisplayOrder,
                    CreatedAt = menuItem.CreatedAt,
                    UpdatedAt = menuItem.UpdatedAt,
                    CreatedBy = menuItem.CreatedBy,
                    UpdatedBy = menuItem.UpdatedBy,
                    Portions = menuItem.Portions?.Select(p => new PortionDetailViewModel
                    {
                        Id = p.Id,
                        MenuItemId = p.MenuItemId,
                        MenuItemName = menuItem.Name,
                        Name = p.Name,
                        Description = p.Description,
                        ImageUrl = p.ImageUrl,
                        IsActive = p.IsActive,
                        DisplayOrder = p.DisplayOrder,
                        MinSelection = p.MinSelection,
                        MaxSelection = p.MaxSelection,
                        CreatedAt = p.CreatedAt,
                        UpdatedAt = p.UpdatedAt,
                        CreatedBy = p.CreatedBy,
                        UpdatedBy = p.UpdatedBy,
                        PortionDetails = p.PortionDetails?.Select(pd => new PortionDetailBasicViewModel
                        {
                            Id = pd.Id,
                            Name = pd.Name,
                            Price = pd.Price
                        }).ToList() ?? new List<PortionDetailBasicViewModel>()
                    }).OrderBy(p => p.DisplayOrder).ToList() ?? new List<PortionDetailViewModel>()
                };

                return ApiResponse<MenuItemDetailViewModel?>.SuccessResult(menuItemDetail);
            }
            catch (Exception ex)
            {
                return ApiResponse<MenuItemDetailViewModel?>.ErrorResult($"Failed to get menu item: {ex.Message}");
            }
        }

        public async Task<ApiResponse<MenuItemDetailViewModel>> CreateMenuItemAsync(CreateMenuItemDto createMenuItemDto)
        {
            try
            {
                // Check if category exists
                if (!await _menuItemRepository.CategoryExistsAsync(createMenuItemDto.CategoryId))
                {
                    return ApiResponse<MenuItemDetailViewModel>.ErrorResult("Category not found");
                }

                // Check if name is unique in category
                if (!await _menuItemRepository.IsNameUniqueInCategoryAsync(createMenuItemDto.CategoryId, createMenuItemDto.Name))
                {
                    return ApiResponse<MenuItemDetailViewModel>.ErrorResult("Menu item with this name already exists in this category");
                }

                var menuItem = new MenuItem
                {
                    CategoryId = createMenuItemDto.CategoryId,
                    Name = createMenuItemDto.Name,
                    Description = createMenuItemDto.Description,
                    BaseImageUrl = createMenuItemDto.BaseImageUrl,
                    IsAvailable = createMenuItemDto.IsAvailable,
                    PreparationTime = createMenuItemDto.PreparationTime,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };

                var createdMenuItem = await _menuItemRepository.CreateAsync(menuItem);
                var menuItemDetail = await GetMenuItemByIdAsync(createdMenuItem.Id);

                return menuItemDetail.Data != null
                    ? ApiResponse<MenuItemDetailViewModel>.SuccessResult(menuItemDetail.Data, "Menu item created successfully")
                    : ApiResponse<MenuItemDetailViewModel>.ErrorResult("Failed to retrieve created menu item");
            }
            catch (Exception ex)
            {
                return ApiResponse<MenuItemDetailViewModel>.ErrorResult($"Failed to create menu item: {ex.Message}");
            }
        }

        public async Task<ApiResponse<MenuItemDetailViewModel?>> UpdateMenuItemAsync(int id, UpdateMenuItemDto updateMenuItemDto)
        {
            try
            {
                var menuItem = await _menuItemRepository.GetByIdAsync(id);
                if (menuItem == null)
                {
                    return ApiResponse<MenuItemDetailViewModel?>.ErrorResult("Menu item not found");
                }

                // Check if category exists
                if (!await _menuItemRepository.CategoryExistsAsync(updateMenuItemDto.CategoryId))
                {
                    return ApiResponse<MenuItemDetailViewModel?>.ErrorResult("Category not found");
                }

                // Check if name is unique in category (excluding current menu item)
                if (!await _menuItemRepository.IsNameUniqueInCategoryAsync(updateMenuItemDto.CategoryId, updateMenuItemDto.Name, id))
                {
                    return ApiResponse<MenuItemDetailViewModel?>.ErrorResult("Menu item with this name already exists in this category");
                }

                menuItem.CategoryId = updateMenuItemDto.CategoryId;
                menuItem.Name = updateMenuItemDto.Name;
                menuItem.Description = updateMenuItemDto.Description;
                menuItem.BaseImageUrl = updateMenuItemDto.BaseImageUrl;
                menuItem.IsAvailable = updateMenuItemDto.IsAvailable;
                menuItem.PreparationTime = updateMenuItemDto.PreparationTime;
                menuItem.UpdatedAt = DateTime.UtcNow;

                await _menuItemRepository.UpdateAsync(menuItem);
                return await GetMenuItemByIdAsync(id);
            }
            catch (Exception ex)
            {
                return ApiResponse<MenuItemDetailViewModel?>.ErrorResult($"Failed to update menu item: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteMenuItemAsync(int id)
        {
            try
            {
                var menuItem = await _menuItemRepository.GetByIdAsync(id);
                if (menuItem == null)
                {
                    return ApiResponse<bool>.ErrorResult("Menu item not found");
                }

                // Cascade delete will handle portions and portion details
                var result = await _menuItemRepository.DeleteAsync(id);
                if (!result)
                {
                    return ApiResponse<bool>.ErrorResult("Failed to delete menu item");
                }

                return ApiResponse<bool>.SuccessResult(true, "Menu item deleted successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResult($"Failed to delete menu item: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> ToggleAvailabilityAsync(int id, bool isAvailable)
        {
            try
            {
                var menuItem = await _menuItemRepository.GetByIdAsync(id);
                if (menuItem == null)
                {
                    return ApiResponse<bool>.ErrorResult("Menu item not found");
                }

                menuItem.IsAvailable = isAvailable;
                menuItem.UpdatedAt = DateTime.UtcNow;

                await _menuItemRepository.UpdateAsync(menuItem);
                return ApiResponse<bool>.SuccessResult(true, $"Menu item {(isAvailable ? "made available" : "made unavailable")} successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResult($"Failed to update menu item availability: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<MenuItemListViewModel>>> GetMenuItemsByCategoryIdAsync(int categoryId)
        {
            try
            {
                var menuItems = await _menuItemRepository.GetByCategoryIdAsync(categoryId);
                var menuItemViewModels = menuItems.Select(mi => new MenuItemListViewModel
                {
                    Id = mi.Id,
                    CategoryId = mi.CategoryId,
                    CategoryName = mi.Category?.Name ?? "",
                    Name = mi.Name,
                    Description = mi.Description,
                    BaseImageUrl = mi.BaseImageUrl,
                    IsAvailable = mi.IsAvailable,
                    PreparationTime = mi.PreparationTime,
                    DisplayOrder = mi.DisplayOrder,
                    CreatedAt = mi.CreatedAt,
                    PortionCount = mi.Portions?.Count ?? 0
                }).ToList();

                return ApiResponse<List<MenuItemListViewModel>>.SuccessResult(menuItemViewModels);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<MenuItemListViewModel>>.ErrorResult($"Failed to get menu items: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> IsNameUniqueInCategoryAsync(int categoryId, string name, int? excludeId = null)
        {
            try
            {
                var isUnique = await _menuItemRepository.IsNameUniqueInCategoryAsync(categoryId, name, excludeId);
                return ApiResponse<bool>.SuccessResult(isUnique);
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResult($"Failed to check name uniqueness: {ex.Message}");
            }
        }

        public async Task<ApiResponse<MenuItemDetailViewModel>> CreateMenuItemWithPriceAsync(CreateMenuItemWithPriceDto createDto)
        {
            try
            {
                // Validate category exists
                if (!await _menuItemRepository.CategoryExistsAsync(createDto.CategoryId))
                {
                    return ApiResponse<MenuItemDetailViewModel>.ErrorResult("Category not found");
                }

                // Check if menu item name is unique in category
                if (!await _menuItemRepository.IsNameUniqueInCategoryAsync(createDto.CategoryId, createDto.MenuItemName))
                {
                    return ApiResponse<MenuItemDetailViewModel>.ErrorResult("Menu item with this name already exists in this category");
                }

                // Validate: Either Portions array OR simple fields (Price) must be provided
                if (createDto.Portions == null || createDto.Portions.Count == 0)
                {
                    // Simple mode: Use flat properties
                    if (!createDto.Price.HasValue)
                    {
                        return ApiResponse<MenuItemDetailViewModel>.ErrorResult("Price is required when Portions array is not provided");
                    }
                }
                else
                {
                    // Complete mode: Validate Portions array
                    if (createDto.Portions.Count == 0)
                    {
                        return ApiResponse<MenuItemDetailViewModel>.ErrorResult("At least one portion is required");
                    }

                    // Validate each portion has at least one portion detail OR a price (top-level)
                    foreach (var portion in createDto.Portions)
                    {
                        bool hasPortionDetails = portion.PortionDetails != null && portion.PortionDetails.Count > 0;
                        bool hasTopLevelPrice = createDto.Price.HasValue;
                        
                        if (!hasPortionDetails && !hasTopLevelPrice)
                        {
                            return ApiResponse<MenuItemDetailViewModel>.ErrorResult(
                                $"Portion '{portion.Name}' must have at least one portion detail, or a price must be provided at top level");
                        }
                    }
                }

                // Create Menu Item
                var menuItem = new MenuItem
                {
                    CategoryId = createDto.CategoryId,
                    Name = createDto.MenuItemName,
                    Description = createDto.MenuItemDescription,
                    BaseImageUrl = createDto.MenuItemBaseImageUrl,
                    IsAvailable = createDto.MenuItemIsAvailable,
                    PreparationTime = createDto.MenuItemPreparationTime,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };

                var createdMenuItem = await _menuItemRepository.CreateAsync(menuItem);

                // Handle two modes: Complete body (Portions array) or Simple (flat properties)
                if (createDto.Portions != null && createDto.Portions.Count > 0)
                {
                    // Complete mode: Create multiple portions with multiple portion details
                    int displayOrder = 1;
                    foreach (var portionInput in createDto.Portions)
                    {
                        // Check if portion name is unique in menu item
                        if (!await _portionRepository.IsNameUniqueInMenuItemAsync(createdMenuItem.Id, portionInput.Name))
                        {
                            await _menuItemRepository.DeleteAsync(createdMenuItem.Id);
                            return ApiResponse<MenuItemDetailViewModel>.ErrorResult($"Portion with name '{portionInput.Name}' already exists for this menu item");
                        }

                        var portion = new Portion
                        {
                            MenuItemId = createdMenuItem.Id,
                            Name = portionInput.Name,
                            Description = portionInput.Description,
                            ImageUrl = portionInput.ImageUrl,
                            IsActive = portionInput.IsActive,
                            DisplayOrder = displayOrder++,
                            MinSelection = portionInput.MinSelection,
                            MaxSelection = portionInput.MaxSelection,
                            CreatedAt = DateTime.UtcNow,
                            UpdatedAt = DateTime.UtcNow
                        };

                        var createdPortion = await _portionRepository.CreateAsync(portion);

                        // Create all portion details for this portion
                        if (portionInput.PortionDetails == null || portionInput.PortionDetails.Count == 0)
                        {
                            // If no portion details provided, use top-level price to create default
                            if (!createDto.Price.HasValue)
                            {
                                await _portionRepository.DeleteAsync(createdPortion.Id);
                                await _menuItemRepository.DeleteAsync(createdMenuItem.Id);
                                return ApiResponse<MenuItemDetailViewModel>.ErrorResult(
                                    $"Portion '{portionInput.Name}' must have at least one portion detail, or a price must be provided at top level");
                            }

                            // Create default portion detail with "Normal" name using top-level price
                            var defaultPortionDetail = new PortionDetail
                            {
                                PortionId = createdPortion.Id,
                                Name = "Normal",
                                Price = createDto.Price.Value,
                                CreatedAt = DateTime.UtcNow,
                                UpdatedAt = DateTime.UtcNow
                            };

                            await _portionDetailRepository.CreateAsync(defaultPortionDetail);
                        }
                        else
                        {
                            // Existing logic: Create all provided portion details
                            foreach (var portionDetailInput in portionInput.PortionDetails)
                            {
                                // Check if portion detail name is unique in portion
                                if (!await _portionDetailRepository.IsNameUniqueInPortionAsync(createdPortion.Id, portionDetailInput.Name))
                                {
                                    await _portionRepository.DeleteAsync(createdPortion.Id);
                                    await _menuItemRepository.DeleteAsync(createdMenuItem.Id);
                                    return ApiResponse<MenuItemDetailViewModel>.ErrorResult(
                                        $"Portion detail with name '{portionDetailInput.Name}' already exists for portion '{portionInput.Name}'");
                                }

                                var portionDetail = new PortionDetail
                                {
                                    PortionId = createdPortion.Id,
                                    Name = portionDetailInput.Name,
                                    Price = portionDetailInput.Price,
                                    CreatedAt = DateTime.UtcNow,
                                    UpdatedAt = DateTime.UtcNow
                                };

                                await _portionDetailRepository.CreateAsync(portionDetail);
                            }
                        }
                    }
                }
                else
                {
                    // Simple mode: Create single portion with single portion detail (backward compatible)
                    var portionName = string.IsNullOrWhiteSpace(createDto.PortionName) ? "Normal" : createDto.PortionName;
                    var portionDetailName = string.IsNullOrWhiteSpace(createDto.PortionDetailName) ? "Normal" : createDto.PortionDetailName;

                    var portion = new Portion
                    {
                        MenuItemId = createdMenuItem.Id,
                        Name = portionName,
                        Description = createDto.PortionDescription,
                        ImageUrl = createDto.PortionImageUrl,
                        IsActive = true,
                        DisplayOrder = 1,
                        MinSelection = 1,
                        MaxSelection = 1,
                        CreatedAt = DateTime.UtcNow,
                        UpdatedAt = DateTime.UtcNow
                    };

                    var createdPortion = await _portionRepository.CreateAsync(portion);

                    var portionDetail = new PortionDetail
                    {
                        PortionId = createdPortion.Id,
                        Name = portionDetailName,
                        Price = createDto.Price!.Value,
                        CreatedAt = DateTime.UtcNow,
                        UpdatedAt = DateTime.UtcNow
                    };

                    await _portionDetailRepository.CreateAsync(portionDetail);
                }

                // Return the complete menu item with all related data
                var result = await GetMenuItemByIdAsync(createdMenuItem.Id);
                if (result.Data != null)
                {
                    return ApiResponse<MenuItemDetailViewModel>.SuccessResult(result.Data, "Menu item with price created successfully");
                }

                return ApiResponse<MenuItemDetailViewModel>.ErrorResult("Failed to retrieve created menu item");
            }
            catch (Exception ex)
            {
                return ApiResponse<MenuItemDetailViewModel>.ErrorResult($"Failed to create menu item with price: {ex.Message}");
            }
        }

        public async Task<ApiResponse<MenuItemDetailViewModel>> CreateOrUpdateMenuItemWithPriceAsync(CreateMenuItemWithPriceDto dto)
        {
            try
            {
                // Check if this is an update operation
                bool isUpdate = dto.Id.HasValue && dto.Id.Value > 0;
                MenuItem? existingMenuItem = null;

                if (isUpdate)
                {
                    existingMenuItem = await _menuItemRepository.GetByIdAsync(dto.Id.Value);
                    if (existingMenuItem == null)
                    {
                        return ApiResponse<MenuItemDetailViewModel>.ErrorResult("Menu item not found");
                    }
                }

                // Validate category exists
                if (!await _menuItemRepository.CategoryExistsAsync(dto.CategoryId))
                {
                    return ApiResponse<MenuItemDetailViewModel>.ErrorResult("Category not found");
                }

                // Check if menu item name is unique in category (excluding current menu item if updating)
                int? excludeId = isUpdate ? dto.Id : null;
                if (!await _menuItemRepository.IsNameUniqueInCategoryAsync(dto.CategoryId, dto.MenuItemName, excludeId))
                {
                    return ApiResponse<MenuItemDetailViewModel>.ErrorResult("Menu item with this name already exists in this category");
                }

                // Validate: Either Portions array OR simple fields (Price) must be provided
                if (dto.Portions == null || dto.Portions.Count == 0)
                {
                    // Simple mode: Use flat properties
                    if (!dto.Price.HasValue)
                    {
                        return ApiResponse<MenuItemDetailViewModel>.ErrorResult("Price is required when Portions array is not provided");
                    }
                }
                else
                {
                    // Complete mode: Validate Portions array
                    if (dto.Portions.Count == 0)
                    {
                        return ApiResponse<MenuItemDetailViewModel>.ErrorResult("At least one portion is required");
                    }

                    // Validate each portion has at least one portion detail OR a price (top-level)
                    foreach (var portion in dto.Portions)
                    {
                        bool hasPortionDetails = portion.PortionDetails != null && portion.PortionDetails.Count > 0;
                        bool hasTopLevelPrice = dto.Price.HasValue;
                        
                        if (!hasPortionDetails && !hasTopLevelPrice)
                        {
                            return ApiResponse<MenuItemDetailViewModel>.ErrorResult(
                                $"Portion '{portion.Name}' must have at least one portion detail, or a price must be provided at top level");
                        }
                    }
                }

                // Handle MenuItem image upload
                string? menuItemImageUrl = null;
                if (dto.MenuItemBaseImage != null && dto.MenuItemBaseImage.Length > 0)
                {
                    try
                    {
                        menuItemImageUrl = await _fileUploadService.UploadImageAsync(dto.MenuItemBaseImage, "menu-items");
                    }
                    catch (Exception ex)
                    {
                        return ApiResponse<MenuItemDetailViewModel>.ErrorResult($"Failed to upload menu item image: {ex.Message}");
                    }
                }
                else if (!string.IsNullOrWhiteSpace(dto.MenuItemBaseImageUrl))
                {
                    // Use provided URL (for backward compatibility or updates)
                    menuItemImageUrl = dto.MenuItemBaseImageUrl;
                }

                MenuItem menuItem;
                if (isUpdate)
                {
                    // Delete old image if new one is uploaded
                    if (dto.MenuItemBaseImage != null && dto.MenuItemBaseImage.Length > 0 && !string.IsNullOrWhiteSpace(existingMenuItem!.BaseImageUrl))
                    {
                        await _fileUploadService.DeleteImageAsync(existingMenuItem.BaseImageUrl);
                    }

                    // Update existing menu item
                    existingMenuItem!.CategoryId = dto.CategoryId;
                    existingMenuItem.Name = dto.MenuItemName;
                    existingMenuItem.Description = dto.MenuItemDescription;
                    existingMenuItem.BaseImageUrl = menuItemImageUrl;
                    existingMenuItem.IsAvailable = dto.MenuItemIsAvailable;
                    existingMenuItem.PreparationTime = dto.MenuItemPreparationTime;
                    existingMenuItem.UpdatedAt = DateTime.UtcNow;

                    await _menuItemRepository.UpdateAsync(existingMenuItem);
                    menuItem = existingMenuItem;

                    // Delete all existing portions (cascade will delete portion details)
                    var existingPortions = await _portionRepository.GetByMenuItemIdAsync(menuItem.Id);
                    foreach (var portion in existingPortions)
                    {
                        await _portionRepository.DeleteAsync(portion.Id);
                    }
                }
                else
                {
                    // Create new menu item
                    menuItem = new MenuItem
                    {
                        CategoryId = dto.CategoryId,
                        Name = dto.MenuItemName,
                        Description = dto.MenuItemDescription,
                        BaseImageUrl = menuItemImageUrl,
                        IsAvailable = dto.MenuItemIsAvailable,
                        PreparationTime = dto.MenuItemPreparationTime,
                        CreatedAt = DateTime.UtcNow,
                        UpdatedAt = DateTime.UtcNow
                    };

                    menuItem = await _menuItemRepository.CreateAsync(menuItem);
                }

                // Handle two modes: Complete body (Portions array) or Simple (flat properties)
                if (dto.Portions != null && dto.Portions.Count > 0)
                {
                    // Complete mode: Create multiple portions with multiple portion details
                    int displayOrder = 1;
                    foreach (var portionInput in dto.Portions)
                    {
                        // Check if portion name is unique in menu item
                        if (!await _portionRepository.IsNameUniqueInMenuItemAsync(menuItem.Id, portionInput.Name))
                        {
                            if (!isUpdate)
                            {
                                await _menuItemRepository.DeleteAsync(menuItem.Id);
                            }
                            return ApiResponse<MenuItemDetailViewModel>.ErrorResult($"Portion with name '{portionInput.Name}' already exists for this menu item");
                        }

                        // Handle portion image upload
                        string? portionImageUrl = null;
                        if (portionInput.Image != null && portionInput.Image.Length > 0)
                        {
                            try
                            {
                                portionImageUrl = await _fileUploadService.UploadImageAsync(portionInput.Image, "portions");
                            }
                            catch (Exception ex)
                            {
                                if (!isUpdate)
                                {
                                    await _menuItemRepository.DeleteAsync(menuItem.Id);
                                }
                                return ApiResponse<MenuItemDetailViewModel>.ErrorResult($"Failed to upload portion image for '{portionInput.Name}': {ex.Message}");
                            }
                        }
                        else if (!string.IsNullOrWhiteSpace(portionInput.ImageUrl))
                        {
                            portionImageUrl = portionInput.ImageUrl;
                        }

                        var portion = new Portion
                        {
                            MenuItemId = menuItem.Id,
                            Name = portionInput.Name,
                            Description = portionInput.Description,
                            ImageUrl = portionImageUrl,
                            IsActive = portionInput.IsActive,
                            DisplayOrder = displayOrder++,
                            MinSelection = portionInput.MinSelection,
                            MaxSelection = portionInput.MaxSelection,
                            CreatedAt = DateTime.UtcNow,
                            UpdatedAt = DateTime.UtcNow
                        };

                        var createdPortion = await _portionRepository.CreateAsync(portion);

                        // Create all portion details for this portion
                        if (portionInput.PortionDetails == null || portionInput.PortionDetails.Count == 0)
                        {
                            // No portion details provided, use top-level price as fallback
                            if (!dto.Price.HasValue)
                            {
                                await _portionRepository.DeleteAsync(createdPortion.Id);
                                if (!isUpdate)
                                {
                                    await _menuItemRepository.DeleteAsync(menuItem.Id);
                                }
                                return ApiResponse<MenuItemDetailViewModel>.ErrorResult(
                                    $"Portion '{portionInput.Name}' has no portion details and no top-level price provided");
                            }

                            var defaultPortionDetail = new PortionDetail
                            {
                                PortionId = createdPortion.Id,
                                Name = "Normal",
                                Price = dto.Price.Value,
                                CreatedAt = DateTime.UtcNow,
                                UpdatedAt = DateTime.UtcNow
                            };

                            await _portionDetailRepository.CreateAsync(defaultPortionDetail);
                        }
                        else
                        {
                            // Create all provided portion details
                            foreach (var portionDetailInput in portionInput.PortionDetails)
                            {
                                // Check if portion detail name is unique in portion
                                if (!await _portionDetailRepository.IsNameUniqueInPortionAsync(createdPortion.Id, portionDetailInput.Name))
                                {
                                    await _portionRepository.DeleteAsync(createdPortion.Id);
                                    if (!isUpdate)
                                    {
                                        await _menuItemRepository.DeleteAsync(menuItem.Id);
                                    }
                                    return ApiResponse<MenuItemDetailViewModel>.ErrorResult(
                                        $"Portion detail with name '{portionDetailInput.Name}' already exists for portion '{portionInput.Name}'");
                                }

                                var portionDetail = new PortionDetail
                                {
                                    PortionId = createdPortion.Id,
                                    Name = portionDetailInput.Name,
                                    Price = portionDetailInput.Price,
                                    CreatedAt = DateTime.UtcNow,
                                    UpdatedAt = DateTime.UtcNow
                                };

                                await _portionDetailRepository.CreateAsync(portionDetail);
                            }
                        }
                    }
                }
                else
                {
                    // Simple mode: Create single portion with single portion detail (backward compatible)
                    var portionName = string.IsNullOrWhiteSpace(dto.PortionName) ? "Normal" : dto.PortionName;
                    var portionDetailName = string.IsNullOrWhiteSpace(dto.PortionDetailName) ? "Normal" : dto.PortionDetailName;

                    // Handle portion image upload in simple mode
                    string? portionImageUrl = null;
                    if (dto.PortionImage != null && dto.PortionImage.Length > 0)
                    {
                        try
                        {
                            portionImageUrl = await _fileUploadService.UploadImageAsync(dto.PortionImage, "portions");
                        }
                        catch (Exception ex)
                        {
                            if (!isUpdate)
                            {
                                await _menuItemRepository.DeleteAsync(menuItem.Id);
                            }
                            return ApiResponse<MenuItemDetailViewModel>.ErrorResult($"Failed to upload portion image: {ex.Message}");
                        }
                    }
                    else if (!string.IsNullOrWhiteSpace(dto.PortionImageUrl))
                    {
                        portionImageUrl = dto.PortionImageUrl;
                    }

                    var portion = new Portion
                    {
                        MenuItemId = menuItem.Id,
                        Name = portionName,
                        Description = dto.PortionDescription,
                        ImageUrl = portionImageUrl,
                        IsActive = true,
                        DisplayOrder = 1,
                        MinSelection = 1,
                        MaxSelection = 1,
                        CreatedAt = DateTime.UtcNow,
                        UpdatedAt = DateTime.UtcNow
                    };

                    var createdPortion = await _portionRepository.CreateAsync(portion);

                    var portionDetail = new PortionDetail
                    {
                        PortionId = createdPortion.Id,
                        Name = portionDetailName,
                        Price = dto.Price!.Value,
                        CreatedAt = DateTime.UtcNow,
                        UpdatedAt = DateTime.UtcNow
                    };

                    await _portionDetailRepository.CreateAsync(portionDetail);
                }

                // Return the complete menu item with all related data
                var result = await GetMenuItemByIdAsync(menuItem.Id);
                if (result.Data != null)
                {
                    var message = isUpdate 
                        ? "Menu item with price updated successfully" 
                        : "Menu item with price created successfully";
                    return ApiResponse<MenuItemDetailViewModel>.SuccessResult(result.Data, message);
                }

                return ApiResponse<MenuItemDetailViewModel>.ErrorResult("Failed to retrieve menu item");
            }
            catch (Exception ex)
            {
                return ApiResponse<MenuItemDetailViewModel>.ErrorResult($"Failed to create/update menu item with price: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> UpdateMenuItemOrderAsync(UpdateMenuItemOrderDto updateOrderDto)
        {
            try
            {
                if (updateOrderDto.MenuItems == null || !updateOrderDto.MenuItems.Any())
                {
                    return ApiResponse<bool>.ErrorResult("Menu items list cannot be empty");
                }

                // Verify category exists
                if (!await _categoryRepository.CategoryExistsAsync(updateOrderDto.CategoryId))
                {
                    return ApiResponse<bool>.ErrorResult("Category not found");
                }

                var menuItemIds = updateOrderDto.MenuItems.Select(mi => mi.Id).ToList();
                var existingMenuItems = await _menuItemRepository.GetByIdsAsync(menuItemIds);

                // Verify all menu items exist and belong to the category
                if (existingMenuItems.Count() != menuItemIds.Count)
                {
                    return ApiResponse<bool>.ErrorResult("One or more menu items not found");
                }

                if (existingMenuItems.Any(mi => mi.CategoryId != updateOrderDto.CategoryId))
                {
                    return ApiResponse<bool>.ErrorResult("One or more menu items do not belong to the specified category");
                }

                // Update display order for each menu item
                foreach (var orderItem in updateOrderDto.MenuItems)
                {
                    var menuItem = existingMenuItems.FirstOrDefault(mi => mi.Id == orderItem.Id);
                    if (menuItem != null)
                    {
                        menuItem.DisplayOrder = orderItem.DisplayOrder;
                        menuItem.UpdatedAt = DateTime.UtcNow;
                        await _menuItemRepository.UpdateAsync(menuItem);
                    }
                }

                return ApiResponse<bool>.SuccessResult(true, "Menu item order updated successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResult($"Failed to update menu item order: {ex.Message}");
            }
        }
    }
}

