using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Jeweletta.Models
{
    public class Order
    {
        public int Id { get; set; }

        [DisplayName("User")]
        public int? UserProfileId { get; set; }
        public UserProfile? UserProfile { get; set; }

        [Required]
        public DateTime? OrderDate { get; set; }

        [Required]
        public decimal? TotalAmount { get; set; }
        public int PaintingId { get; set; }
        public Painting? Painting { get; set; }

    }
}
