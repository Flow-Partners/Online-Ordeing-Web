using System.ComponentModel.DataAnnotations;

namespace DotNet_Starter_Template.Models.DTOs.Orders
{
    public class UpdateTicketStatusDto
    {
        [Required]
        public string Status { get; set; } = "open"; // "open", "accept", "closed"
    }
}

