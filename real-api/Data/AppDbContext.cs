using Microsoft.EntityFrameworkCore;
using RealApi.Models;

namespace RealApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // Define DbSet for User model
        public DbSet<User> Users { get; set; }
        public DbSet<Phase> Phases { get; set; }
    }
}