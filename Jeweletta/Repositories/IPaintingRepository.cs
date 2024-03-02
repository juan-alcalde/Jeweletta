using Jeweletta.Models;

namespace Jeweletta.Repositories
{
    public interface IPaintingRepository
    {
        List<Painting> GetAllPaintings();
        Painting GetPaintingById(int id);
        void Add(Painting painting);
        void Delete(int id);
        void Update(Painting painting);
    }
}