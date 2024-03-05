using Jeweletta.Models;
using Jeweletta.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Jeweletta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;
        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_orderRepository.GetAllOrders());
        }
        /*[HttpGet("{UserProfileId}")]
              public IActionResult Get(int UserProfileId)
              {
                  return Ok(_orderRepository.GetOrdersByUserProfileId(UserProfileId));
              }*/



        // GET api/<OrderController>/5
        /*  [HttpGet("{id}")]
          public string Get(int id)
          {
              return "value";
          }

          // POST api/<OrderController>
          [HttpPost]
          public void Post([FromBody] string value)
          {
          }

          // PUT api/<OrderController>/5
          [HttpPut("{id}")]
          public void Put(int id, [FromBody] string value)
          {
          }

          // DELETE api/<OrderController>/5
          [HttpDelete("{id}")]
          public void Delete(int id)
          {
          }*/
    }
}
