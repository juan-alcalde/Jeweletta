using Microsoft.AspNetCore.Mvc;
using Jeweletta.Models;
using Jeweletta.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Jeweletta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UserProfileController(IUserRepository userRepository)
        {
            //_userProfileRepository = userProfileRepository;
            _userRepository = userRepository;
        }
        /// <summary>
        /// ////////////////////////
        /// </summary>
        /// <returns></returns>
        // GET: api/<UserProfileController>
        [HttpGet("GetByEmail")]
        public IActionResult GetByEmail(string email)
        {
            var user = _userRepository.GetByEmail(email);

            if (email == null || user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        // GET api/<UserProfileController>/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_userRepository.GetById(id));
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_userRepository.GetAllUsers());
        }

        // POST api/<UserProfileController>
        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
          
            userProfile.UserTypeId = UserType.BUYER_ID;
            _userRepository.Add(userProfile);
            return CreatedAtAction(
                "GetByEmail",
                new { email = userProfile.Email },
                userProfile);
        }

        // PUT api/<UserProfileController>/5
       /* [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserProfileController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }*/
    }
}
