using Jeweletta.Models;

namespace Jeweletta.Repositories
{
    public interface IOrderRepository
    {
        List<Order> GetAllOrders();
        List<Order> GetOrderByUserId(int userProfileId);
        void Add(Order order);
        void Delete(int id);
    }
}