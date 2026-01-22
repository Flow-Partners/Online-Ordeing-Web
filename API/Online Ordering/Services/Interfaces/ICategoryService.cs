using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Models.DTOs.Categories;
using DotNet_Starter_Template.Models.ViewModels.Categories;

namespace DotNet_Starter_Template.Services.Interfaces
{
    public interface ICategoryService
    {
        Task<ApiResponse<PagedResult<CategoryListViewModel>>> GetAllCategoriesAsync(PaginationRequest request);
        Task<ApiResponse<CategoryDetailViewModel?>> GetCategoryByIdAsync(int id);
        Task<ApiResponse<CategoryDetailViewModel>> CreateCategoryAsync(CreateCategoryDto createCategoryDto);
        Task<ApiResponse<CategoryDetailViewModel?>> UpdateCategoryAsync(int id, UpdateCategoryDto updateCategoryDto);
        Task<ApiResponse<bool>> DeleteCategoryAsync(int id);
        Task<ApiResponse<bool>> ToggleVisibilityAsync(int id, bool isVisible);
        Task<ApiResponse<bool>> IsNameUniqueAsync(string name, int? excludeId = null);
        Task<ApiResponse<bool>> UpdateCategoryOrderAsync(UpdateCategoryOrderDto updateOrderDto);
    }
}

