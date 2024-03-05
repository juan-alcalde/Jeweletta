using Jeweletta.Models;

namespace Jeweletta.Repositories
{
    public interface IOrderRepository
    {
        List<Order> GetAllOrders();
    }
}