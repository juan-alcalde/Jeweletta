﻿using Jeweletta.Models;
using Jeweletta.Utils;
using Microsoft.Extensions.Hosting;


namespace Jeweletta.Repositories
{
    public class PaintingRepository : BaseRepository, IPaintingRepository
    {
        public PaintingRepository(IConfiguration configuration) : base(configuration) { }

        public void Add(Painting painting)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
            INSERT INTO Painting (Title, [Description], Price, ImageLocation, Dimensions, IsSold, CategoryId)
                OUTPUT INSERTED.ID
                VALUES(@title, @description, @price, @imageLocation, @dimensions, @isSold,
                 @categoryId)";

                    DbUtils.AddParameter(cmd, "@title", painting.Title);
                    DbUtils.AddParameter(cmd, "@description", painting.Description);
                    DbUtils.AddParameter(cmd, "@price", painting.Price);
                    DbUtils.AddParameter(cmd, "@imageLocation", painting.ImageLocation);
                    DbUtils.AddParameter(cmd, "@dimensions", painting.Dimensions);
                    DbUtils.AddParameter(cmd, "@isSold", painting.IsSold);
                    DbUtils.AddParameter(cmd, "@categoryId", painting.CategoryId);
                   

                    painting.Id = (int)cmd.ExecuteScalar();


                }

            }
        }
        public Painting GetPaintingById(int id)
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
                                LEFT JOIN Category c ON p.CategoryId = c.id
                                     WHERE p.id = @id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    var reader = cmd.ExecuteReader();
                    Painting painting = null;
                    if (reader.Read())
                    {
                        painting = new Painting()
                        {
                            Id = DbUtils.GetInt(reader, "PaintingId"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Description = DbUtils.GetString(reader, "Description"),
                            Price = DbUtils.GetDecimal(reader, "Price"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            Dimensions = DbUtils.GetString(reader, "Dimensions"),
                            IsSold = DbUtils.GetBoolean(reader, "IsSold"),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            Category = new Category()
                            {
                                Id = DbUtils.GetInt(reader, "CategoryId"),
                                Name = DbUtils.GetString(reader, "CategoryName")
                            }
                        };
                    };
                    reader.Close();
                    return painting;
                }
            }
        }
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
                            Id = DbUtils.GetInt(reader, "PaintingId"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Description = DbUtils.GetString(reader, "Description"),
                            Price = DbUtils.GetDecimal(reader, "Price"), 
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"), 
                            Dimensions = DbUtils.GetString(reader, "Dimensions"),
                            IsSold = DbUtils.GetBoolean(reader,"IsSold"), 
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
