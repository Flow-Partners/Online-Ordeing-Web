using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Models.DTOs.Customers;
using DotNet_Starter_Template.Models.ViewModels.Customers;

namespace DotNet_Starter_Template.Services.Interfaces
{
    public interface ICustomerAuthService
    {
        Task<ApiResponse<CustomerAuthResponseViewModel>> LoginAsync(CustomerLoginDto loginDto);
        Task<ApiResponse<CustomerAuthResponseViewModel>> RegisterAsync(CustomerRegisterDto registerDto);
    }
}

