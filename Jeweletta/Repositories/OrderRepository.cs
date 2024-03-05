using Microsoft.Extensions.Hosting;
using Jeweletta.Models;
using Jeweletta.Utils;

namespace Jeweletta.Repositories
{
    public class OrderRepository : BaseRepository, IOrderRepository
    {
        public OrderRepository(IConfiguration configuration) : base(configuration) { }

        public List<Order> GetAllOrders()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT o.Id as OrderId, o.UserProfileId, o.OrderDate, o.TotalAmount,
                      up.Id, up.UserName, up.FullName, 
                       up.Email,up.ShippingAddress, up.UserTypeId,
                       ut.[Name] AS UserTypeName
                FROM [Order] o
                LEFT JOIN UserProfile up ON o.UserProfileId = up.id
                LEFT JOIN UserType ut ON up.UserTypeId = ut.id
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
                                UserType = new UserType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                    Name = reader.GetString(reader.GetOrdinal("UserTypeName"))
                                },
                            },
                            OrderDate = DbUtils.GetDateTime(reader, "OrderDate"),
                            TotalAmount = DbUtils.GetDecimal(reader, "TotalAmount")

                        });
                    }

                    reader.Close();

                    return orders;
                }
            }
        }


        /* public List<Order> GetOrdersByUserProfileId(int UserProfileId)
         {
             using (var conn = Connection)
             {
                 conn.Open();
                 using (var cmd = conn.CreateCommand())
                 {
                     cmd.CommandText = @"
                 SELECT o.Id as OrderId, o.UserProfileId, o.OrderDate, o.TotalAmount,
                       up.Id, up.UserName, up.FullName, 
                        up.Email,up.ShippingAddress, up.UserTypeId,
                        ut.[Name] AS UserTypeName
                 FROM [Order] o
                 LEFT JOIN UserProfile up ON o.UserProfileId = up.id
                 LEFT JOIN UserType ut ON up.UserTypeId = ut.id
                 WHERE o.UserProfileId = @userProfileId";

                     cmd.Parameters.AddWithValue("@userProfileId", UserProfileId);
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
                                 UserType = new UserType()
                                 {
                                     Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                     Name = reader.GetString(reader.GetOrdinal("UserTypeName"))
                                 },
                             },
                             OrderDate = DbUtils.GetDateTime(reader, "OrderDate"),
                             TotalAmount = DbUtils.GetDecimal(reader, "TotalAmount")

                         });
                     }

                     reader.Close();

                     return orders;
                 }
             }
         }*/

    }
}
