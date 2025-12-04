using System.ComponentModel.DataAnnotations;

namespace DotNet_Starter_Template.Models.DTOs.Customers
{
    public class CustomerRegisterDto
    {
        [Required]
        [StringLength(50)]
        public string FirstName { get; set; } = string.Empty;

        [StringLength(50)]
        public string? LastName { get; set; }

        [StringLength(100)]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        [StringLength(20)]
        public string Phone { get; set; } = string.Empty;

        [StringLength(20)]
        public string? Mobile { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 6)]
        public string Password { get; set; } = string.Empty;

        [Required]
        [Compare(nameof(Password))]
        public string ConfirmPassword { get; set; } = string.Empty;
    }
}

