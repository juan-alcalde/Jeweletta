using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace Jeweletta.Models
{
    public class Painting
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(255)] 
        public string? Title { get; set; }

        [Required]
        [MaxLength(1000)] 
        public string? Description { get; set; }

        [Required]
        public decimal Price { get; set; }

        [DisplayName("Image URL")] 
        public string? ImageLocation { get; set; }

        public string? Dimension { get; set; }

        public bool IsSold { get; set; }

        [DisplayName("Category")]
        public int? CategoryId { get; set; }

        public Category? Category { get; set; }
    }
}
