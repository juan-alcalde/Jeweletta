using Jeweletta.Models;

namespace Jeweletta.Repositories
{
    public interface IPaintingRepository
    {
        List<Painting> GetAllPaintings();
        Painting GetPaintingById(int id);
    }
}