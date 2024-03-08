using Jeweletta.Models;
using Jeweletta.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System.Security.Claims;

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

        [HttpGet("GetUserOrders/{id}")]
        public IActionResult Get(int id)
        {
            List<Order> orders = _orderRepository.GetOrderByUserId(id);
            if (orders == null)

            {
                return NotFound();
            }

            return Ok(orders);
        }

        [HttpPost]
        public IActionResult Post(Order order)
        {
            _orderRepository.Add(order);
            return CreatedAtAction("Get", new { id = order.Id }, order);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _orderRepository.Delete(id);
            return NoContent();
        }

        [HttpDelete]
        public IActionResult DeleteCart()
        {
            _orderRepository.DeleteCart();
            return NoContent();
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
