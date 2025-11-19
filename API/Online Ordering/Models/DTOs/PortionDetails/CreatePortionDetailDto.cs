using System.ComponentModel.DataAnnotations;

namespace DotNet_Starter_Template.Models.DTOs.PortionDetails
{
    public class CreatePortionDetailDto
    {
        [Required]
        public int PortionId { get; set; }

        [Required]
        [Range(0.01, 999999.99)]
        public decimal Price { get; set; }

        [Required]
        [StringLength(200)]
        public string Name { get; set; } = string.Empty;
    }
}

