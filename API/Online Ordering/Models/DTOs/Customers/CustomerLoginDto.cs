using System.ComponentModel.DataAnnotations;

namespace DotNet_Starter_Template.Models.DTOs.Customers
{
    public class CustomerLoginDto
    {
        [Required]
        public string PhoneOrEmail { get; set; } = string.Empty;

        [Required]
        [MinLength(6)]
        public string Password { get; set; } = string.Empty;

        public bool RememberMe { get; set; } = false;
    }
}

