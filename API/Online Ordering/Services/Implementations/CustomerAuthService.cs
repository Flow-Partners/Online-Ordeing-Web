using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Models.DTOs.Customers;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Models.ViewModels.Customers;
using DotNet_Starter_Template.Repositories.Interfaces;
using DotNet_Starter_Template.Services.Interfaces;

namespace DotNet_Starter_Template.Services.Implementations
{
    public class CustomerAuthService : ICustomerAuthService
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration;

        public CustomerAuthService(
            ICustomerRepository customerRepository,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IConfiguration configuration)
        {
            _customerRepository = customerRepository;
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        public async Task<ApiResponse<CustomerAuthResponseViewModel>> LoginAsync(CustomerLoginDto loginDto)
        {
            try
            {
                // Find customer by phone or email
                Customer? customer = null;
                
                // Try to find by phone first
                if (!string.IsNullOrWhiteSpace(loginDto.PhoneOrEmail))
                {
                    customer = await _customerRepository.GetByPhoneAsync(loginDto.PhoneOrEmail);
                    
                    // If not found by phone, try email
                    if (customer == null && loginDto.PhoneOrEmail.Contains("@"))
                    {
                        customer = await _customerRepository.GetByEmailAsync(loginDto.PhoneOrEmail);
                    }
                }

                if (customer == null)
                {
                    return ApiResponse<CustomerAuthResponseViewModel>.ErrorResult("Invalid phone/email or password");
                }

                // Check if customer has a linked user account
                if (string.IsNullOrWhiteSpace(customer.UserId))
                {
                    return ApiResponse<CustomerAuthResponseViewModel>.ErrorResult("Account not set up. Please register first.");
                }

                // Find the user account
                var user = await _userManager.FindByIdAsync(customer.UserId);
                if (user == null)
                {
                    return ApiResponse<CustomerAuthResponseViewModel>.ErrorResult("Invalid phone/email or password");
                }

                // Verify password using ASP.NET Identity
                var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);
                if (!result.Succeeded)
                {
                    return ApiResponse<CustomerAuthResponseViewModel>.ErrorResult("Invalid phone/email or password");
                }

                // Check if user is active
                if (!user.IsActive)
                {
                    return ApiResponse<CustomerAuthResponseViewModel>.ErrorResult("Account is deactivated. Please contact support.");
                }

                // Check if customer is active
                if (!customer.IsActive)
                {
                    return ApiResponse<CustomerAuthResponseViewModel>.ErrorResult("Account is deactivated. Please contact support.");
                }

                // Check if customer is blocked
                if (customer.IsBlocked)
                {
                    return ApiResponse<CustomerAuthResponseViewModel>.ErrorResult("Account is blocked. Please contact support.");
                }

                // Update last login
                customer.LastLoginAt = DateTime.UtcNow;
                user.LastLoginAt = DateTime.UtcNow;
                await _customerRepository.UpdateAsync(customer);
                await _userManager.UpdateAsync(user);

                // Map to response view model
                var response = new CustomerAuthResponseViewModel
                {
                    CustomerId = customer.Id,
                    FirstName = customer.FirstName,
                    LastName = customer.LastName,
                    Email = customer.Email,
                    Phone = customer.Phone,
                    Mobile = customer.Mobile,
                    IsActive = customer.IsActive,
                    IsVerified = customer.IsVerified,
                    LoyaltyPoints = customer.LoyaltyPoints,
                    TotalOrders = customer.TotalOrders,
                    TotalSpent = customer.TotalSpent
                };

                return ApiResponse<CustomerAuthResponseViewModel>.SuccessResult(response, "Login successful");
            }
            catch (Exception ex)
            {
                return ApiResponse<CustomerAuthResponseViewModel>.ErrorResult($"Login failed: {ex.Message}");
            }
        }

        public async Task<ApiResponse<CustomerAuthResponseViewModel>> RegisterAsync(CustomerRegisterDto registerDto)
        {
            try
            {
                // Check if customer already exists by phone
                var existingCustomer = await _customerRepository.GetByPhoneAsync(registerDto.Phone);
                if (existingCustomer != null)
                {
                    // If customer exists but doesn't have a linked user, create one
                    if (string.IsNullOrWhiteSpace(existingCustomer.UserId))
                    {
                        // Create user account
                        var newUserName = registerDto.Email ?? registerDto.Phone;
                        var user = new User
                        {
                            UserName = newUserName,
                            Email = registerDto.Email,
                            PhoneNumber = registerDto.Phone,
                            FirstName = registerDto.FirstName,
                            LastName = registerDto.LastName ?? string.Empty,
                            IsActive = true,
                            CreatedAt = DateTime.UtcNow
                        };

                        var createUserResult = await _userManager.CreateAsync(user, registerDto.Password);
                        if (!createUserResult.Succeeded)
                        {
                            var errors = string.Join(", ", createUserResult.Errors.Select(e => e.Description));
                            return ApiResponse<CustomerAuthResponseViewModel>.ErrorResult($"Failed to create account: {errors}");
                        }

                        // Link customer to user
                        existingCustomer.UserId = user.Id;
                        existingCustomer.Email = registerDto.Email ?? existingCustomer.Email;
                        existingCustomer.Mobile = registerDto.Mobile ?? existingCustomer.Mobile;
                        existingCustomer.FirstName = registerDto.FirstName;
                        existingCustomer.LastName = registerDto.LastName;
                        existingCustomer.UpdatedAt = DateTime.UtcNow;
                        
                        await _customerRepository.UpdateAsync(existingCustomer);

                        var response = new CustomerAuthResponseViewModel
                        {
                            CustomerId = existingCustomer.Id,
                            FirstName = existingCustomer.FirstName,
                            LastName = existingCustomer.LastName,
                            Email = existingCustomer.Email,
                            Phone = existingCustomer.Phone,
                            Mobile = existingCustomer.Mobile,
                            IsActive = existingCustomer.IsActive,
                            IsVerified = existingCustomer.IsVerified,
                            LoyaltyPoints = existingCustomer.LoyaltyPoints,
                            TotalOrders = existingCustomer.TotalOrders,
                            TotalSpent = existingCustomer.TotalSpent
                        };

                        return ApiResponse<CustomerAuthResponseViewModel>.SuccessResult(response, "Account created successfully");
                    }
                    else
                    {
                        return ApiResponse<CustomerAuthResponseViewModel>.ErrorResult("Customer with this phone number already exists. Please login instead.");
                    }
                }

                // Check if user already exists by email (if provided)
                User? existingUser = null;
                if (!string.IsNullOrWhiteSpace(registerDto.Email))
                {
                    existingUser = await _userManager.FindByEmailAsync(registerDto.Email);
                    if (existingUser != null)
                    {
                        return ApiResponse<CustomerAuthResponseViewModel>.ErrorResult("User with this email already exists. Please login instead.");
                    }
                }

                // Create new user account
                var userName = registerDto.Email ?? registerDto.Phone;
                var newUser = new User
                {
                    UserName = userName,
                    Email = registerDto.Email,
                    PhoneNumber = registerDto.Phone,
                    FirstName = registerDto.FirstName,
                    LastName = registerDto.LastName ?? string.Empty,
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                };

                var createResult = await _userManager.CreateAsync(newUser, registerDto.Password);
                if (!createResult.Succeeded)
                {
                    var errors = string.Join(", ", createResult.Errors.Select(e => e.Description));
                    return ApiResponse<CustomerAuthResponseViewModel>.ErrorResult($"Failed to create account: {errors}");
                }

                // Create new customer and link to user
                var customer = new Customer
                {
                    FirstName = registerDto.FirstName,
                    LastName = registerDto.LastName,
                    Email = registerDto.Email,
                    Phone = registerDto.Phone,
                    Mobile = registerDto.Mobile ?? registerDto.Phone,
                    UserId = newUser.Id,
                    IsActive = true,
                    IsVerified = false,
                    IsBlocked = false,
                    LoyaltyPoints = 0,
                    TotalOrders = 0,
                    TotalSpent = 0,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };

                var createdCustomer = await _customerRepository.CreateAsync(customer);

                var registerResponse = new CustomerAuthResponseViewModel
                {
                    CustomerId = createdCustomer.Id,
                    FirstName = createdCustomer.FirstName,
                    LastName = createdCustomer.LastName,
                    Email = createdCustomer.Email,
                    Phone = createdCustomer.Phone,
                    Mobile = createdCustomer.Mobile,
                    IsActive = createdCustomer.IsActive,
                    IsVerified = createdCustomer.IsVerified,
                    LoyaltyPoints = createdCustomer.LoyaltyPoints,
                    TotalOrders = createdCustomer.TotalOrders,
                    TotalSpent = createdCustomer.TotalSpent
                };

                return ApiResponse<CustomerAuthResponseViewModel>.SuccessResult(registerResponse, "Registration successful");
            }
            catch (Exception ex)
            {
                return ApiResponse<CustomerAuthResponseViewModel>.ErrorResult($"Registration failed: {ex.Message}");
            }
        }
    }
}

