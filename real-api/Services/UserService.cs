using System.Collections.Concurrent;
using System.Security.Cryptography;
using System.Text;
using RealApi.Models;

namespace RealApi.Services {
    public class UserService
    {
        private readonly ConcurrentDictionary<string, User> _users = new();

        public User CreateUser(string username, string password, string securityQuestion, string securityAnswer)
        {
            if (_users.ContainsKey(username))
                throw new Exception("User already exists");

            var user = new User
            {
                Username = username,
                PasswordHash = Hash(password),
                SecurityQuestion = securityQuestion,
                SecurityAnswerHash = Hash(securityAnswer)
            };

            _users[username] = user;
            return user;
        }

        public User Authenticate(string username, string password)
        {
            if (_users.TryGetValue(username, out var user) &&
                VerifyHash(password, user.PasswordHash))
            {
                return user;
            }
            return null;
        }

        private string Hash(string input)
        {
            using var sha256 = SHA256.Create();
            var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(input));
            return Convert.ToBase64String(bytes);
        }

        private bool VerifyHash(string input, string hash)
        {
            return Hash(input) == hash;
        }

        public User GetUserByUsername(string username)
        {
            _users.TryGetValue(username, out var user);
            return user;
        }
    }
}