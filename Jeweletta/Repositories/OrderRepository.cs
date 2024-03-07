using Microsoft.Extensions.Hosting;
using Jeweletta.Models;
using Jeweletta.Utils;

namespace Jeweletta.Repositories
{
    public class OrderRepository : BaseRepository, IOrderRepository
    {
        public OrderRepository(IConfiguration configuration) : base(configuration) { }


        public void Add(Order order)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO [Order] (UserProfileId, OrderDate, TotalAmount, PaintingId) 
                        OUTPUT INSERTED.ID 
                        VALUES (@UserProfileId, @OrderDate, @TotalAmount, @PaintingId);";

               
                    DbUtils.AddParameter(cmd, "@UserProfileId", order.UserProfileId);
                    DbUtils.AddParameter(cmd, "@OrderDate", order.OrderDate);
                    DbUtils.AddParameter(cmd, "@TotalAmount", order.TotalAmount);
                    DbUtils.AddParameter(cmd, "@PaintingId", order.PaintingId);

                    order.Id = (int)cmd.ExecuteScalar();
                }
            }
        }


        public List<Order> GetAllOrders()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT o.Id as OrderId, o.UserProfileId, o.OrderDate, o.TotalAmount,o.PaintingId,
                       up.Id, up.UserName, up.FullName, 
                        up.Email,up.ShippingAddress, up.UserTypeId,p.Id AS PaintingId, p.Title, p.Description, p.Price,
                                      p.ImageLocation AS ImageLocation, p.Dimensions, 
                                      p.IsSold,
                        ut.[Name] AS UserTypeName
                 FROM [Order] o
                 LEFT JOIN UserProfile up ON o.UserProfileId = up.id
                 LEFT JOIN UserType ut ON up.UserTypeId = ut.id
LEFT JOIN Painting p ON o.paintingId = p.id
               ";
                    var reader = cmd.ExecuteReader();

                    var orders = new List<Order>();

                    while (reader.Read())
                    {
                        orders.Add(new Order()
                        {
                            Id = DbUtils.GetInt(reader, "OrderId"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "UserProfileId"),
                                UserName = DbUtils.GetString(reader, "UserName"),
                                FullName = DbUtils.GetString(reader, "FullName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                ShippingAddress = DbUtils.GetString(reader, "ShippingAddress"),
                                UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                UserType = new UserType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                    Name = reader.GetString(reader.GetOrdinal("UserTypeName"))
                                },
                            },
                            OrderDate = DbUtils.GetDateTime(reader, "OrderDate"),
                            TotalAmount = DbUtils.GetDecimal(reader, "TotalAmount"),
                            PaintingId = DbUtils.GetInt(reader, "PaintingId"),
                            Painting = new Painting()
                            {
                                Id = DbUtils.GetInt(reader, "PaintingId"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Description = DbUtils.GetString(reader, "Description"),
                                Price = DbUtils.GetDecimal(reader, "Price"),
                                ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                                Dimensions = DbUtils.GetString(reader, "Dimensions"),
                                IsSold = DbUtils.GetBoolean(reader, "IsSold"),
                            },
                        });
                    }

                    reader.Close();

                    return orders;
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM [Order] WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<Order> GetOrderByUserId(int userProfileId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                 SELECT o.Id as OrderId, o.UserProfileId, o.OrderDate, o.TotalAmount,o.PaintingId,
                       up.Id, up.UserName, up.FullName, 
                        up.Email,up.ShippingAddress, up.UserTypeId,p.Id AS PaintingId, p.Title, p.Description, p.Price,
                                      p.ImageLocation AS ImageLocation, p.Dimensions, 
                                      p.IsSold,
                        ut.[Name] AS UserTypeName
                 FROM [Order] o
                 LEFT JOIN UserProfile up ON o.UserProfileId = up.id
                 LEFT JOIN UserType ut ON up.UserTypeId = ut.id
LEFT JOIN Painting p ON o.paintingId = p.id
                 WHERE o.UserProfileId = @userProfileId";

                    cmd.Parameters.AddWithValue("@userProfileId", userProfileId);
                    var reader = cmd.ExecuteReader();

                    var orders = new List<Order>();

                    while (reader.Read())
                    {
                        orders.Add(new Order()
                        {
                            Id = DbUtils.GetInt(reader, "OrderId"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "UserProfileId"),
                                UserName = DbUtils.GetString(reader, "UserName"),
                                FullName = DbUtils.GetString(reader, "FullName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                ShippingAddress = DbUtils.GetString(reader, "ShippingAddress"),
                                UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                UserType = new UserType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                    Name = reader.GetString(reader.GetOrdinal("UserTypeName"))
                                },
                            },
                            OrderDate = DbUtils.GetDateTime(reader, "OrderDate"),
                            TotalAmount = DbUtils.GetDecimal(reader, "TotalAmount"),
                            PaintingId = DbUtils.GetInt(reader, "PaintingId"),
                            Painting = new Painting()
                            {
                                Id = DbUtils.GetInt(reader, "PaintingId"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Description = DbUtils.GetString(reader, "Description"),
                                Price = DbUtils.GetDecimal(reader, "Price"),
                                ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                                Dimensions = DbUtils.GetString(reader, "Dimensions"),
                                IsSold = DbUtils.GetBoolean(reader, "IsSold"),
                            },
                        });
                    }

                    reader.Close();

                    return orders;
                }
            }
        }

    }
}
