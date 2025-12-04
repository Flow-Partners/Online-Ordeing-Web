using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using DotNet_Starter_Template.Models.DTOs.Categories;
using DotNet_Starter_Template.Models.ViewModels.Categories;
using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Services.Interfaces;



namespace DotNet_Starter_Template.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        private readonly ILogger<CategoriesController> _logger;

        public CategoriesController(ICategoryService categoryService, ILogger<CategoriesController> logger)
        {
            _categoryService = categoryService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<ApiResponse<PagedResult<CategoryListViewModel>>>> GetCategories([FromQuery] PaginationRequest request)
        {
            try
            {
                var result = await _categoryService.GetAllCategoriesAsync(request);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting categories");
                return StatusCode(500, ApiResponse<PagedResult<CategoryListViewModel>>.ErrorResult("An error occurred while getting categories"));
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ApiResponse<CategoryDetailViewModel>>> GetCategory(int id)
        {
            try
            {
                var result = await _categoryService.GetCategoryByIdAsync(id);
                if (result.Data == null)
                {
                    return NotFound(result);
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting category {CategoryId}", id);
                return StatusCode(500, ApiResponse<CategoryDetailViewModel>.ErrorResult("An error occurred while getting category"));
            }
        }

        [HttpPost]
        public async Task<ActionResult<ApiResponse<CategoryDetailViewModel>>> CreateCategory(CreateCategoryDto createCategoryDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    var errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)).ToList();
                    return BadRequest(ApiResponse<CategoryDetailViewModel>.ErrorResult("Validation failed", errors));
                }

                var result = await _categoryService.CreateCategoryAsync(createCategoryDto);
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return CreatedAtAction(nameof(GetCategory), new { id = result.Data!.Id }, result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating category");
                return StatusCode(500, ApiResponse<CategoryDetailViewModel>.ErrorResult("An error occurred while creating category"));
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ApiResponse<CategoryDetailViewModel>>> UpdateCategory(int id, UpdateCategoryDto updateCategoryDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    var errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)).ToList();
                    return BadRequest(ApiResponse<CategoryDetailViewModel>.ErrorResult("Validation failed", errors));
                }

                var result = await _categoryService.UpdateCategoryAsync(id, updateCategoryDto);
                if (result.Data == null)
                {
                    return NotFound(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating category {CategoryId}", id);
                return StatusCode(500, ApiResponse<CategoryDetailViewModel>.ErrorResult("An error occurred while updating category"));
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ApiResponse<bool>>> DeleteCategory(int id)
        {
            try
            {
                var result = await _categoryService.DeleteCategoryAsync(id);
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting category {CategoryId}", id);
                return StatusCode(500, ApiResponse<bool>.ErrorResult("An error occurred while deleting category"));
            }
        }

        [HttpPut("{id}/toggle-visibility")]
        public async Task<ActionResult<ApiResponse<bool>>> ToggleVisibility(int id, [FromBody] bool isVisible)
        {
            try
            {
                var result = await _categoryService.ToggleVisibilityAsync(id, isVisible);
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error toggling visibility for category {CategoryId}", id);
                return StatusCode(500, ApiResponse<bool>.ErrorResult("An error occurred while updating category visibility"));
            }
        }

        [HttpGet("check-name")]
        public async Task<ActionResult<ApiResponse<bool>>> CheckName([FromQuery] string name, [FromQuery] int? excludeId = null)
        {
            try
            {
                var result = await _categoryService.IsNameUniqueAsync(name, excludeId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error checking category name uniqueness");
                return StatusCode(500, ApiResponse<bool>.ErrorResult("An error occurred while checking category name"));
            }
        }
    }
}

