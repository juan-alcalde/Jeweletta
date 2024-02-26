using System.ComponentModel.DataAnnotations;

namespace Jeweletta.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string? UserName { get; set; }


        [Required]
        [MaxLength(50)]
        public string? FullName { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(255)]
        public string? Email { get; set; }

        [MaxLength(255)]
        public string? ShippingAddress { get; set; }

        [Required]
        public int UserTypeId { get; set; }
        public UserType? UserType { get; set; }

      
    }
}
