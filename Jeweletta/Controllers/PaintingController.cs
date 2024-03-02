using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Jeweletta.Models;
using Jeweletta.Repositories;
using Microsoft.Extensions.Hosting;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Jeweletta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaintingController : ControllerBase
    {

        private readonly IPaintingRepository _paintingRepository;
        public PaintingController(IPaintingRepository paintingRepository)
        {
            _paintingRepository = paintingRepository;
        }

        // GET: api/<PaintingController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_paintingRepository.GetAllPaintings());
        }

        [HttpGet("{id}")]
        public IActionResult GetPaintingById(int id)
        {
            Painting painting = _paintingRepository.GetPaintingById(id);
            if (painting == null)
            {
                return NotFound();
            }
            return Ok(painting);
        }

        [HttpPost]
        public IActionResult Post(Painting painting)
        {
           
            _paintingRepository.Add(painting);
            return CreatedAtAction("Get", new { id = painting.Id }, painting);
        }


        [HttpPut("{id}")]
        public IActionResult Put(int id, Painting painting)
        {
            if (id != painting.Id)
            {
                return BadRequest();
            }
           
            _paintingRepository.Update(painting);
            return NoContent();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _paintingRepository.Delete(id);
                return NoContent();
            }
            catch (SqlException ex)
            {
             
                Console.WriteLine("SQL Exception occurred: " + ex.Message);
                return StatusCode(500, "An error occurred while deleting the post.");
            }
        }

    }
}
