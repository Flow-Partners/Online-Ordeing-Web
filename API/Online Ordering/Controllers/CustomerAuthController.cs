using Microsoft.AspNetCore.Mvc;
using DotNet_Starter_Template.Models.DTOs.Customers;
using DotNet_Starter_Template.Services.Interfaces;
using DotNet_Starter_Template.Models.Common;

namespace DotNet_Starter_Template.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerAuthController : ControllerBase
    {
        private readonly ICustomerAuthService _customerAuthService;
        private readonly ILogger<CustomerAuthController> _logger;

        public CustomerAuthController(
            ICustomerAuthService customerAuthService,
            ILogger<CustomerAuthController> logger)
        {
            _customerAuthService = customerAuthService;
            _logger = logger;
        }

        [HttpPost("login")]
        public async Task<ActionResult<ApiResponse<Models.ViewModels.Customers.CustomerAuthResponseViewModel>>> Login(CustomerLoginDto loginDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    var errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)).ToList();
                    return BadRequest(ApiResponse<Models.ViewModels.Customers.CustomerAuthResponseViewModel>.ErrorResult("Validation failed", errors));
                }

                var result = await _customerAuthService.LoginAsync(loginDto);
                
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error during customer login");
                return StatusCode(500, ApiResponse<Models.ViewModels.Customers.CustomerAuthResponseViewModel>.ErrorResult("An error occurred during login"));
            }
        }

        [HttpPost("register")]
        public async Task<ActionResult<ApiResponse<Models.ViewModels.Customers.CustomerAuthResponseViewModel>>> Register(CustomerRegisterDto registerDto)
            {
            try
            {
                if (!ModelState.IsValid)
                {
                    var errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)).ToList();
                    return BadRequest(ApiResponse<Models.ViewModels.Customers.CustomerAuthResponseViewModel>.ErrorResult("Validation failed", errors));
                }

                var result = await _customerAuthService.RegisterAsync(registerDto);
                
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error during customer registration");
                return StatusCode(500, ApiResponse<Models.ViewModels.Customers.CustomerAuthResponseViewModel>.ErrorResult("An error occurred during registration"));
            }
        }
    }
}

