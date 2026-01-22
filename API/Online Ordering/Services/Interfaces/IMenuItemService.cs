using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Models.DTOs.MenuItems;
using DotNet_Starter_Template.Models.ViewModels.MenuItems;

namespace DotNet_Starter_Template.Services.Interfaces
{
    public interface IMenuItemService
    {
        Task<ApiResponse<PagedResult<MenuItemListViewModel>>> GetAllMenuItemsAsync(PaginationRequest request);
        Task<ApiResponse<MenuItemDetailViewModel?>> GetMenuItemByIdAsync(int id);
        Task<ApiResponse<MenuItemDetailViewModel>> CreateMenuItemAsync(CreateMenuItemDto createMenuItemDto);
        Task<ApiResponse<MenuItemDetailViewModel?>> UpdateMenuItemAsync(int id, UpdateMenuItemDto updateMenuItemDto);
        Task<ApiResponse<bool>> DeleteMenuItemAsync(int id);
        Task<ApiResponse<bool>> ToggleAvailabilityAsync(int id, bool isAvailable);
        Task<ApiResponse<List<MenuItemListViewModel>>> GetMenuItemsByCategoryIdAsync(int categoryId);
        Task<ApiResponse<bool>> IsNameUniqueInCategoryAsync(int categoryId, string name, int? excludeId = null);
        Task<ApiResponse<MenuItemDetailViewModel>> CreateMenuItemWithPriceAsync(CreateMenuItemWithPriceDto createDto);
        Task<ApiResponse<MenuItemDetailViewModel>> CreateOrUpdateMenuItemWithPriceAsync(CreateMenuItemWithPriceDto dto);
        Task<ApiResponse<bool>> UpdateMenuItemOrderAsync(UpdateMenuItemOrderDto updateOrderDto);
    }
}

