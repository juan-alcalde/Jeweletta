using Jeweletta.Models;
using Jeweletta.Utils;


namespace Jeweletta.Repositories
{
    public class PaintingRepository : BaseRepository, IPaintingRepository
    {
        public PaintingRepository(IConfiguration configuration) : base(configuration) { }
        public List<Painting> GetAllPaintings()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT p.Id AS PaintingId, p.Title, p.Description, p.Price,
                                      p.ImageLocation AS ImageLocation, p.Dimensions, 
                                      p.IsSold,
                                      p.CategoryId,
                                      c.[Name] AS CategoryName
                                FROM Painting p
                                LEFT JOIN Category c ON p.CategoryId = c.id";
                    var reader = cmd.ExecuteReader();

                    var paintings = new List<Painting>();
                    while (reader.Read())
                    {
                        paintings.Add(new Painting()
                        {
                            Id = DbUtils.GetInt(reader, "PaintingId"), // Use alias PaintingId
                            Title = DbUtils.GetString(reader, "Title"),
                            Description = DbUtils.GetString(reader, "Description"),
                            Price = DbUtils.GetDecimal(reader, "Price"), // Assuming Price is decimal
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"), // Use alias ImageLocation
                            Dimension = DbUtils.GetString(reader, "Dimensions"),
                            IsSold = reader.GetBoolean(reader.GetOrdinal("IsSold")), // Assuming IsSold is boolean
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            Category = new Category()
                            {
                                Id = DbUtils.GetInt(reader, "CategoryId"),
                                Name = DbUtils.GetString(reader, "CategoryName")
                            }
                        });
                    }

                    reader.Close();
                    return paintings;
                }
            }
        }

    }

}
