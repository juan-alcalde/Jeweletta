using Jeweletta.Models;
using Jeweletta.Utils;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Jeweletta.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }


        //GetAll() Lists all Users
        public List<UserProfile> GetAllUsers()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT up.Id, up.UserName, up.FullName, 
                                up.UserTypeId, 
                               ut.Name AS UserTypeName, ut.Id
                          FROM UserProfile up
                               LEFT JOIN UserType ut on up.UserTypeId = ut.Id
                        ORDER BY FullName ASC;";
                    List<UserProfile> users = new List<UserProfile>();

                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        UserProfile user = new UserProfile()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            UserName = reader.GetString(reader.GetOrdinal("UserName")),


                            FullName = reader.GetString(reader.GetOrdinal("FullName")),
                            UserType = new UserType()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Name = reader.GetString(reader.GetOrdinal("UserTypeName"))
                            },
                        };
                        users.Add(user);
                    }

                    reader.Close();

                    return users;
                }
            }
        }

        public UserProfile GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, up.UserName, up.FullName, 
                               up.Email, up.ShippingAddress, up.UserTypeId,
                               ut.Name AS UserTypeName
                          FROM UserProfile up
                               LEFT JOIN UserType ut on up.UserTypeId = ut.Id
                         WHERE up.Id = @id";


                    DbUtils.AddParameter(cmd, "@id", id);
                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserName = DbUtils.GetString(reader, "UserName"),

                            FullName = DbUtils.GetString(reader, "FullName"),
                            Email = DbUtils.GetString(reader, "Email"),

                            ShippingAddress = DbUtils.GetString(reader, "ShippingAddress"),
                            UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                            UserType = new UserType()
                            {
                                Id = DbUtils.GetInt(reader, "UserTypeId"),
                                Name = DbUtils.GetString(reader, "UserTypeName"),
                            }
                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }

        public UserProfile GetByEmail(string email)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                         SELECT up.Id, up.UserName, up.FullName, 
                               up.Email, up.ShippingAddress, up.UserTypeId,
                               ut.Name AS UserTypeName
                          FROM UserProfile up
                               LEFT JOIN UserType ut on up.UserTypeId = ut.Id
                         WHERE Email = @email";

                    DbUtils.AddParameter(cmd, "@email", email);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserName = DbUtils.GetString(reader, "UserName"),

                            FullName = DbUtils.GetString(reader, "FullName"),
                            Email = DbUtils.GetString(reader, "Email"),

                            ShippingAddress = DbUtils.GetString(reader, "ShippingAddress"),
                            UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                            UserType = new UserType()
                            {
                                Id = DbUtils.GetInt(reader, "UserTypeId"),
                                Name = DbUtils.GetString(reader, "UserTypeName"),
                            }
                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }

        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO UserProfile (UserName, FullName, 
                                                                 Email, ShippingAddress, UserTypeId)
                                        OUTPUT INSERTED.ID
                                        VALUES (@FirstName, @LastName, @DisplayName, 
                                                @Email, @CreateDateTime, @ImageLocation, @UserTypeId)";
                    DbUtils.AddParameter(cmd, "@UserName", userProfile.UserName);

                    DbUtils.AddParameter(cmd, "@FullName", userProfile.FullName);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);

                    DbUtils.AddParameter(cmd, "@ShippingAddress", userProfile.ShippingAddress);
                    DbUtils.AddParameter(cmd, "@UserTypeId", userProfile.UserTypeId);

                    userProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}
