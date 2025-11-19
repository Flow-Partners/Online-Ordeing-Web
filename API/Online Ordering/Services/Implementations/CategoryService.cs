using Microsoft.EntityFrameworkCore;
using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Models.DTOs.Categories;
using DotNet_Starter_Template.Models.ViewModels.Categories;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Repositories.Interfaces;
using DotNet_Starter_Template.Services.Interfaces;

namespace DotNet_Starter_Template.Services.Implementations
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryService(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task<ApiResponse<PagedResult<CategoryListViewModel>>> GetAllCategoriesAsync(PaginationRequest request)
        {
            try
            {
                var categories = await _categoryRepository.GetAllAsync();
                var categoryViewModels = categories.Select(c => new CategoryListViewModel
                {
                    Id = c.Id,
                    Name = c.Name,
                    Description = c.Description,
                    ImageUrl = c.ImageUrl,
                    DisplayOrder = c.DisplayOrder,
                    IsVisible = c.IsVisible,
                    CreatedAt = c.CreatedAt,
                    MenuItemCount = c.MenuItems?.Count ?? 0
                }).ToList();

                // Apply search filter
                if (!string.IsNullOrWhiteSpace(request.SearchTerm))
                {
                    var searchTerm = request.SearchTerm.ToLower();
                    categoryViewModels = categoryViewModels
                        .Where(c => c.Name.ToLower().Contains(searchTerm) ||
                                   (c.Description != null && c.Description.ToLower().Contains(searchTerm)))
                        .ToList();
                }

                // Apply sorting
                if (!string.IsNullOrWhiteSpace(request.SortBy))
                {
                    categoryViewModels = request.SortBy.ToLower() switch
                    {
                        "name" => request.SortDescending
                            ? categoryViewModels.OrderByDescending(c => c.Name).ToList()
                            : categoryViewModels.OrderBy(c => c.Name).ToList(),
                        "displayorder" => request.SortDescending
                            ? categoryViewModels.OrderByDescending(c => c.DisplayOrder).ToList()
                            : categoryViewModels.OrderBy(c => c.DisplayOrder).ToList(),
                        "createdat" => request.SortDescending
                            ? categoryViewModels.OrderByDescending(c => c.CreatedAt).ToList()
                            : categoryViewModels.OrderBy(c => c.CreatedAt).ToList(),
                        _ => categoryViewModels.OrderBy(c => c.DisplayOrder).ToList()
                    };
                }
                else
                {
                    categoryViewModels = categoryViewModels.OrderBy(c => c.DisplayOrder).ToList();
                }

                var totalCount = categoryViewModels.Count;
                var pagedItems = categoryViewModels
                    .Skip((request.PageNumber - 1) * request.PageSize)
                    .Take(request.PageSize)
                    .ToList();

                var pagedResult = new PagedResult<CategoryListViewModel>(pagedItems, totalCount, request.PageNumber, request.PageSize);
                return ApiResponse<PagedResult<CategoryListViewModel>>.SuccessResult(pagedResult);
            }
            catch (Exception ex)
            {
                return ApiResponse<PagedResult<CategoryListViewModel>>.ErrorResult($"Failed to get categories: {ex.Message}");
            }
        }

        public async Task<ApiResponse<CategoryDetailViewModel?>> GetCategoryByIdAsync(int id)
        {
            try
            {
                var category = await _categoryRepository.GetByIdWithMenuItemsAsync(id);
                if (category == null)
                {
                    return ApiResponse<CategoryDetailViewModel?>.ErrorResult("Category not found");
                }

                var categoryDetail = new CategoryDetailViewModel
                {
                    Id = category.Id,
                    Name = category.Name,
                    Description = category.Description,
                    ImageUrl = category.ImageUrl,
                    DisplayOrder = category.DisplayOrder,
                    IsVisible = category.IsVisible,
                    CreatedAt = category.CreatedAt,
                    UpdatedAt = category.UpdatedAt,
                    CreatedBy = category.CreatedBy,
                    UpdatedBy = category.UpdatedBy,
                    MenuItemCount = category.MenuItems?.Count ?? 0,
                    MenuItems = category.MenuItems?.Select(mi => new MenuItemBasicViewModel
                    {
                        Id = mi.Id,
                        Name = mi.Name,
                        IsAvailable = mi.IsAvailable
                    }).ToList() ?? new List<MenuItemBasicViewModel>()
                };

                return ApiResponse<CategoryDetailViewModel?>.SuccessResult(categoryDetail);
            }
            catch (Exception ex)
            {
                return ApiResponse<CategoryDetailViewModel?>.ErrorResult($"Failed to get category: {ex.Message}");
            }
        }

        public async Task<ApiResponse<CategoryDetailViewModel>> CreateCategoryAsync(CreateCategoryDto createCategoryDto)
        {
            try
            {
                // Check if name is unique
                if (!await _categoryRepository.IsNameUniqueAsync(createCategoryDto.Name))
                {
                    return ApiResponse<CategoryDetailViewModel>.ErrorResult("Category with this name already exists");
                }

                var category = new Category
                {
                    Name = createCategoryDto.Name,
                    Description = createCategoryDto.Description,
                    ImageUrl = createCategoryDto.ImageUrl,
                    DisplayOrder = createCategoryDto.DisplayOrder,
                    IsVisible = createCategoryDto.IsVisible,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };

                var createdCategory = await _categoryRepository.CreateAsync(category);
                var categoryDetail = MapToCategoryDetailViewModel(createdCategory);

                return ApiResponse<CategoryDetailViewModel>.SuccessResult(categoryDetail, "Category created successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<CategoryDetailViewModel>.ErrorResult($"Failed to create category: {ex.Message}");
            }
        }

        public async Task<ApiResponse<CategoryDetailViewModel?>> UpdateCategoryAsync(int id, UpdateCategoryDto updateCategoryDto)
        {
            try
            {
                var category = await _categoryRepository.GetByIdAsync(id);
                if (category == null)
                {
                    return ApiResponse<CategoryDetailViewModel?>.ErrorResult("Category not found");
                }

                // Check if name is unique (excluding current category)
                if (!await _categoryRepository.IsNameUniqueAsync(updateCategoryDto.Name, id))
                {
                    return ApiResponse<CategoryDetailViewModel?>.ErrorResult("Category with this name already exists");
                }

                category.Name = updateCategoryDto.Name;
                category.Description = updateCategoryDto.Description;
                category.ImageUrl = updateCategoryDto.ImageUrl;
                category.DisplayOrder = updateCategoryDto.DisplayOrder;
                category.IsVisible = updateCategoryDto.IsVisible;
                category.UpdatedAt = DateTime.UtcNow;

                var updatedCategory = await _categoryRepository.UpdateAsync(category);
                var categoryDetail = await GetCategoryByIdAsync(updatedCategory.Id);

                return categoryDetail;
            }
            catch (Exception ex)
            {
                return ApiResponse<CategoryDetailViewModel?>.ErrorResult($"Failed to update category: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteCategoryAsync(int id)
        {
            try
            {
                var category = await _categoryRepository.GetByIdWithMenuItemsAsync(id);
                if (category == null)
                {
                    return ApiResponse<bool>.ErrorResult("Category not found");
                }

                // Check if category has menu items
                if (category.MenuItems != null && category.MenuItems.Any())
                {
                    return ApiResponse<bool>.ErrorResult("Cannot delete category that has menu items. Please delete or move menu items first.");
                }

                var result = await _categoryRepository.DeleteAsync(id);
                if (!result)
                {
                    return ApiResponse<bool>.ErrorResult("Failed to delete category");
                }

                return ApiResponse<bool>.SuccessResult(true, "Category deleted successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResult($"Failed to delete category: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> ToggleVisibilityAsync(int id, bool isVisible)
        {
            try
            {
                var category = await _categoryRepository.GetByIdAsync(id);
                if (category == null)
                {
                    return ApiResponse<bool>.ErrorResult("Category not found");
                }

                category.IsVisible = isVisible;
                category.UpdatedAt = DateTime.UtcNow;

                await _categoryRepository.UpdateAsync(category);
                return ApiResponse<bool>.SuccessResult(true, $"Category {(isVisible ? "shown" : "hidden")} successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResult($"Failed to update category visibility: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> IsNameUniqueAsync(string name, int? excludeId = null)
        {
            try
            {
                var isUnique = await _categoryRepository.IsNameUniqueAsync(name, excludeId);
                return ApiResponse<bool>.SuccessResult(isUnique);
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResult($"Failed to check name uniqueness: {ex.Message}");
            }
        }

        private CategoryDetailViewModel MapToCategoryDetailViewModel(Category category)
        {
            return new CategoryDetailViewModel
            {
                Id = category.Id,
                Name = category.Name,
                Description = category.Description,
                ImageUrl = category.ImageUrl,
                DisplayOrder = category.DisplayOrder,
                IsVisible = category.IsVisible,
                CreatedAt = category.CreatedAt,
                UpdatedAt = category.UpdatedAt,
                CreatedBy = category.CreatedBy,
                UpdatedBy = category.UpdatedBy,
                MenuItemCount = category.MenuItems?.Count ?? 0,
                MenuItems = category.MenuItems?.Select(mi => new MenuItemBasicViewModel
                {
                    Id = mi.Id,
                    Name = mi.Name,
                    IsAvailable = mi.IsAvailable
                }).ToList() ?? new List<MenuItemBasicViewModel>()
            };
        }
    }
}

