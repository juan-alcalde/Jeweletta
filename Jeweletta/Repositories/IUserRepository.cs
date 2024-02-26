using Jeweletta.Models;

namespace Jeweletta.Repositories
{
    public interface IUserRepository
    {
        void Add(UserProfile userProfile);
        List<UserProfile> GetAllUsers();
        UserProfile GetByEmail(string email);
        UserProfile GetById(int id);
    }
}