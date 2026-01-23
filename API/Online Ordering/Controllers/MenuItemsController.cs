using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using DotNet_Starter_Template.Models.DTOs.MenuItems;
using DotNet_Starter_Template.Models.ViewModels.MenuItems;
using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Services.Interfaces;

namespace DotNet_Starter_Template.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    public class MenuItemsController : ControllerBase
    {
        private readonly IMenuItemService _menuItemService;
        private readonly ILogger<MenuItemsController> _logger;

        public MenuItemsController(IMenuItemService menuItemService, ILogger<MenuItemsController> logger)
        {
            _menuItemService = menuItemService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<ApiResponse<PagedResult<MenuItemListViewModel>>>> GetMenuItems([FromQuery] PaginationRequest request)
        {
            try
            {
                var result = await _menuItemService.GetAllMenuItemsAsync(request);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting menu items");
                return StatusCode(500, ApiResponse<PagedResult<MenuItemListViewModel>>.ErrorResult("An error occurred while getting menu items"));
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ApiResponse<MenuItemDetailViewModel>>> GetMenuItem(int id)
        {
            try
            {
                var result = await _menuItemService.GetMenuItemByIdAsync(id);
                if (result.Data == null)
                {
                    return NotFound(result);
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting menu item {MenuItemId}", id);
                return StatusCode(500, ApiResponse<MenuItemDetailViewModel>.ErrorResult("An error occurred while getting menu item"));
            }
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<ActionResult<ApiResponse<MenuItemDetailViewModel>>> CreateOrUpdateMenuItem([FromForm] CreateMenuItemWithPriceDto dto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    var errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)).ToList();
                    return BadRequest(ApiResponse<MenuItemDetailViewModel>.ErrorResult("Validation failed", errors));
                }

                var result = await _menuItemService.CreateOrUpdateMenuItemWithPriceAsync(dto);
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                // If Id was provided, it's an update - return OK, otherwise return Created
                if (dto.Id.HasValue && dto.Id.Value > 0)
                {
                    return Ok(result);
                }

                return CreatedAtAction(nameof(GetMenuItem), new { id = result.Data!.Id }, result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating/updating menu item");
                return StatusCode(500, ApiResponse<MenuItemDetailViewModel>.ErrorResult("An error occurred while creating/updating menu item"));
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ApiResponse<MenuItemDetailViewModel>>> UpdateMenuItem(int id, UpdateMenuItemDto updateMenuItemDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    var errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)).ToList();
                    return BadRequest(ApiResponse<MenuItemDetailViewModel>.ErrorResult("Validation failed", errors));
                }

                var result = await _menuItemService.UpdateMenuItemAsync(id, updateMenuItemDto);
                if (result.Data == null)
                {
                    return NotFound(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating menu item {MenuItemId}", id);
                return StatusCode(500, ApiResponse<MenuItemDetailViewModel>.ErrorResult("An error occurred while updating menu item"));
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ApiResponse<bool>>> DeleteMenuItem(int id)
        {
            try
            {
                var result = await _menuItemService.DeleteMenuItemAsync(id);
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting menu item {MenuItemId}", id);
                return StatusCode(500, ApiResponse<bool>.ErrorResult("An error occurred while deleting menu item"));
            }
        }

        [HttpPut("{id}/toggle-availability")]
        public async Task<ActionResult<ApiResponse<bool>>> ToggleAvailability(int id, [FromBody] bool isAvailable)
        {
            try
            {
                var result = await _menuItemService.ToggleAvailabilityAsync(id, isAvailable);
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error toggling availability for menu item {MenuItemId}", id);
                return StatusCode(500, ApiResponse<bool>.ErrorResult("An error occurred while updating menu item availability"));
            }
        }

        [HttpGet("category/{categoryId}")]
        public async Task<ActionResult<ApiResponse<List<MenuItemListViewModel>>>> GetMenuItemsByCategory(int categoryId)
        {
            try
            {
                var result = await _menuItemService.GetMenuItemsByCategoryIdAsync(categoryId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting menu items for category {CategoryId}", categoryId);
                return StatusCode(500, ApiResponse<List<MenuItemListViewModel>>.ErrorResult("An error occurred while getting menu items"));
            }
        }

        [HttpGet("check-name")]
        public async Task<ActionResult<ApiResponse<bool>>> CheckName([FromQuery] int categoryId, [FromQuery] string name, [FromQuery] int? excludeId = null)
        {
            try
            {
                var result = await _menuItemService.IsNameUniqueInCategoryAsync(categoryId, name, excludeId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error checking menu item name uniqueness");
                return StatusCode(500, ApiResponse<bool>.ErrorResult("An error occurred while checking menu item name"));
            }
        }

        [HttpPut("update-order")]
        public async Task<ActionResult<ApiResponse<bool>>> UpdateMenuItemOrder([FromBody] UpdateMenuItemOrderDto updateOrderDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    var errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)).ToList();
                    return BadRequest(ApiResponse<bool>.ErrorResult("Validation failed", errors));
                }

                var result = await _menuItemService.UpdateMenuItemOrderAsync(updateOrderDto);
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating menu item order");
                return StatusCode(500, ApiResponse<bool>.ErrorResult("An error occurred while updating menu item order"));
            }
        }

    }
}

