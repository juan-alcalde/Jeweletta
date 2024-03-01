using Jeweletta.Models;

namespace Jeweletta.Repositories
{
    public interface ICategoryRepository
    {
        void Add(Category category);
        void Delete(int id);
        List<Category> GetAll();
        Category GetCategoryById(int id);
        void UpdateCategory(Category category);
    }
}