using System.ComponentModel.DataAnnotations;

namespace DotNet_Starter_Template.Models.DTOs.Portions
{
    public class CreatePortionDto
    {
        [Required]
        public int MenuItemId { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        [StringLength(500)]
        public string? Description { get; set; }

        [StringLength(500)]
        public string? ImageUrl { get; set; }

        [Required]
        public bool IsActive { get; set; } = true;

        [Required]
        public int DisplayOrder { get; set; } = 0;

        [Required]
        public int MinSelection { get; set; } = 0;

        public int? MaxSelection { get; set; }
    }
}

