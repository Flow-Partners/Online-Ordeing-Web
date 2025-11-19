using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using DotNet_Starter_Template.Models.DTOs.Portions;
using DotNet_Starter_Template.Models.ViewModels.Portions;
using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Services.Interfaces;

namespace DotNet_Starter_Template.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    public class PortionsController : ControllerBase
    {
        private readonly IPortionService _portionService;
        private readonly ILogger<PortionsController> _logger;

        public PortionsController(IPortionService portionService, ILogger<PortionsController> logger)
        {
            _portionService = portionService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<ApiResponse<PagedResult<PortionListViewModel>>>> GetPortions([FromQuery] PaginationRequest request)
        {
            try
            {
                var result = await _portionService.GetAllPortionsAsync(request);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting portions");
                return StatusCode(500, ApiResponse<PagedResult<PortionListViewModel>>.ErrorResult("An error occurred while getting portions"));
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ApiResponse<PortionDetailViewModel>>> GetPortion(int id)
        {
            try
            {
                var result = await _portionService.GetPortionByIdAsync(id);
                if (result.Data == null)
                {
                    return NotFound(result);
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting portion {PortionId}", id);
                return StatusCode(500, ApiResponse<PortionDetailViewModel>.ErrorResult("An error occurred while getting portion"));
            }
        }

        [HttpPost]
        public async Task<ActionResult<ApiResponse<PortionDetailViewModel>>> CreatePortion(CreatePortionDto createPortionDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    var errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)).ToList();
                    return BadRequest(ApiResponse<PortionDetailViewModel>.ErrorResult("Validation failed", errors));
                }

                var result = await _portionService.CreatePortionAsync(createPortionDto);
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return CreatedAtAction(nameof(GetPortion), new { id = result.Data!.Id }, result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating portion");
                return StatusCode(500, ApiResponse<PortionDetailViewModel>.ErrorResult("An error occurred while creating portion"));
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ApiResponse<PortionDetailViewModel>>> UpdatePortion(int id, UpdatePortionDto updatePortionDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    var errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)).ToList();
                    return BadRequest(ApiResponse<PortionDetailViewModel>.ErrorResult("Validation failed", errors));
                }

                var result = await _portionService.UpdatePortionAsync(id, updatePortionDto);
                if (result.Data == null)
                {
                    return NotFound(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating portion {PortionId}", id);
                return StatusCode(500, ApiResponse<PortionDetailViewModel>.ErrorResult("An error occurred while updating portion"));
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ApiResponse<bool>>> DeletePortion(int id)
        {
            try
            {
                var result = await _portionService.DeletePortionAsync(id);
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting portion {PortionId}", id);
                return StatusCode(500, ApiResponse<bool>.ErrorResult("An error occurred while deleting portion"));
            }
        }

        [HttpPut("{id}/toggle-active")]
        public async Task<ActionResult<ApiResponse<bool>>> ToggleActiveStatus(int id, [FromBody] bool isActive)
        {
            try
            {
                var result = await _portionService.ToggleActiveStatusAsync(id, isActive);
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error toggling active status for portion {PortionId}", id);
                return StatusCode(500, ApiResponse<bool>.ErrorResult("An error occurred while updating portion status"));
            }
        }

        [HttpGet("menu-item/{menuItemId}")]
        public async Task<ActionResult<ApiResponse<List<PortionListViewModel>>>> GetPortionsByMenuItem(int menuItemId)
        {
            try
            {
                var result = await _portionService.GetPortionsByMenuItemIdAsync(menuItemId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting portions for menu item {MenuItemId}", menuItemId);
                return StatusCode(500, ApiResponse<List<PortionListViewModel>>.ErrorResult("An error occurred while getting portions"));
            }
        }

        [HttpGet("check-name")]
        public async Task<ActionResult<ApiResponse<bool>>> CheckName([FromQuery] int menuItemId, [FromQuery] string name, [FromQuery] int? excludeId = null)
        {
            try
            {
                var result = await _portionService.IsNameUniqueInMenuItemAsync(menuItemId, name, excludeId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error checking portion name uniqueness");
                return StatusCode(500, ApiResponse<bool>.ErrorResult("An error occurred while checking portion name"));
            }
        }
    }
}

