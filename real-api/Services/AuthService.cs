using RealApi.Controllers;
using RealApi.Models;
using RealApi.Data;
using Microsoft.EntityFrameworkCore;

namespace RealApi.Services
{
    public class AuthService
    {
        private readonly AppDbContext _context;

        public AuthService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<User> CreateUser(string username, string password, string securityQuestion, string securityAnswer)
        {
            // Check if user already exists
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
            if (existingUser != null)
            {
                throw new Exception("Username already taken.");
            }

            // Hash the password and security answer using BCrypt
            var passwordHash = BCrypt.Net.BCrypt.HashPassword(password);
            var securityAnswerHash = BCrypt.Net.BCrypt.HashPassword(securityAnswer);

            var user = new User
            {
                Username = username,
                PasswordHash = passwordHash,
                SecurityQuestion = securityQuestion,
                SecurityAnswerHash = securityAnswerHash
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<User?> Authenticate(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
            if (user == null)
                return null;

            // verify password using BCrypt
            if (!BCrypt.Net.BCrypt.Verify(password, user.PasswordHash))
            {
                return null; // Invalid password
            }

            return user; // Success
        }
    }
}
