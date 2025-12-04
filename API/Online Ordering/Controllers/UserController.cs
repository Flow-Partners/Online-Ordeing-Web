using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Services.Interfaces;
using System.Linq;

namespace DotNet_Starter_Template.Controllers
{
    [ApiController]
    [Route("api/user")]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly ILogger<UserController> _logger;

        public UserController(IAuthService authService, ILogger<UserController> logger)
        {
            _authService = authService;
            _logger = logger;
        }

        [HttpGet("profile")]
        public async Task<ActionResult<ApiResponse<object>>> GetProfile()
        {
            try
            {
                var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized(ApiResponse<object>.ErrorResult("User not authenticated"));
                }

                var result = await _authService.GetUserProfileAsync(userId);
                if (!result.Success || result.Data == null)
                {
                    return NotFound(result);
                }

                // Map UserProfileViewModel to frontend User model format
                var userData = result.Data;
                var mappedUser = new
                {
                    id = userData.Id,
                    email = userData.Email,
                    name = userData.FullName,
                    firstName = userData.FirstName,
                    lastName = userData.LastName,
                    avatar = userData.ProfilePicture,
                    role = userData.Roles?.FirstOrDefault() ?? string.Empty,
                    roles = userData.Roles ?? new List<string>(),
                    isActive = userData.IsActive,
                    createdAt = userData.CreatedAt,
                    updatedAt = userData.LastLoginAt
                };

                return Ok(ApiResponse<object>.SuccessResult(mappedUser));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting user profile");
                return StatusCode(500, ApiResponse<object>.ErrorResult("An error occurred while getting profile"));
            }
        }
    }
}

