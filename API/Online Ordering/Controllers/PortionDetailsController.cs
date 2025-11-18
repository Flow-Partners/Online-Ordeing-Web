using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using DotNet_Starter_Template.Models.DTOs.PortionDetails;
using DotNet_Starter_Template.Models.ViewModels.PortionDetails;
using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Services.Interfaces;

namespace DotNet_Starter_Template.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    public class PortionDetailsController : ControllerBase
    {
        private readonly IPortionDetailService _portionDetailService;
        private readonly ILogger<PortionDetailsController> _logger;

        public PortionDetailsController(IPortionDetailService portionDetailService, ILogger<PortionDetailsController> logger)
        {
            _portionDetailService = portionDetailService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<ApiResponse<PagedResult<PortionDetailListViewModel>>>> GetPortionDetails([FromQuery] PaginationRequest request)
        {
            try
            {
                var result = await _portionDetailService.GetAllPortionDetailsAsync(request);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting portion details");
                return StatusCode(500, ApiResponse<PagedResult<PortionDetailListViewModel>>.ErrorResult("An error occurred while getting portion details"));
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ApiResponse<PortionDetailDetailViewModel>>> GetPortionDetail(int id)
        {
            try
            {
                var result = await _portionDetailService.GetPortionDetailByIdAsync(id);
                if (result.Data == null)
                {
                    return NotFound(result);
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting portion detail {PortionDetailId}", id);
                return StatusCode(500, ApiResponse<PortionDetailDetailViewModel>.ErrorResult("An error occurred while getting portion detail"));
            }
        }

        [HttpPost]
        public async Task<ActionResult<ApiResponse<PortionDetailDetailViewModel>>> CreatePortionDetail(CreatePortionDetailDto createPortionDetailDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    var errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)).ToList();
                    return BadRequest(ApiResponse<PortionDetailDetailViewModel>.ErrorResult("Validation failed", errors));
                }

                var result = await _portionDetailService.CreatePortionDetailAsync(createPortionDetailDto);
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return CreatedAtAction(nameof(GetPortionDetail), new { id = result.Data!.Id }, result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating portion detail");
                return StatusCode(500, ApiResponse<PortionDetailDetailViewModel>.ErrorResult("An error occurred while creating portion detail"));
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ApiResponse<PortionDetailDetailViewModel>>> UpdatePortionDetail(int id, UpdatePortionDetailDto updatePortionDetailDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    var errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)).ToList();
                    return BadRequest(ApiResponse<PortionDetailDetailViewModel>.ErrorResult("Validation failed", errors));
                }

                var result = await _portionDetailService.UpdatePortionDetailAsync(id, updatePortionDetailDto);
                if (result.Data == null)
                {
                    return NotFound(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating portion detail {PortionDetailId}", id);
                return StatusCode(500, ApiResponse<PortionDetailDetailViewModel>.ErrorResult("An error occurred while updating portion detail"));
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ApiResponse<bool>>> DeletePortionDetail(int id)
        {
            try
            {
                var result = await _portionDetailService.DeletePortionDetailAsync(id);
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting portion detail {PortionDetailId}", id);
                return StatusCode(500, ApiResponse<bool>.ErrorResult("An error occurred while deleting portion detail"));
            }
        }

        [HttpGet("portion/{portionId}")]
        public async Task<ActionResult<ApiResponse<List<PortionDetailListViewModel>>>> GetPortionDetailsByPortion(int portionId)
        {
            try
            {
                var result = await _portionDetailService.GetPortionDetailsByPortionIdAsync(portionId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting portion details for portion {PortionId}", portionId);
                return StatusCode(500, ApiResponse<List<PortionDetailListViewModel>>.ErrorResult("An error occurred while getting portion details"));
            }
        }

        [HttpGet("check-name")]
        public async Task<ActionResult<ApiResponse<bool>>> CheckName([FromQuery] int portionId, [FromQuery] string name, [FromQuery] int? excludeId = null)
        {
            try
            {
                var result = await _portionDetailService.IsNameUniqueInPortionAsync(portionId, name, excludeId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error checking portion detail name uniqueness");
                return StatusCode(500, ApiResponse<bool>.ErrorResult("An error occurred while checking portion detail name"));
            }
        }
    }
}

