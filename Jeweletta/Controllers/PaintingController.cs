using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Jeweletta.Models;
using Jeweletta.Repositories;

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

        /* // GET api/<PaintingController>/5
         [HttpGet("{id}")]
         public string Get(int id)
         {
             return "value";
         }

         // POST api/<PaintingController>
         [HttpPost]
         public void Post([FromBody] string value)
         {
         }

         // PUT api/<PaintingController>/5
         [HttpPut("{id}")]
         public void Put(int id, [FromBody] string value)
         {
         }

         // DELETE api/<PaintingController>/5
         [HttpDelete("{id}")]
         public void Delete(int id)
         {
         }*/
    }
}
