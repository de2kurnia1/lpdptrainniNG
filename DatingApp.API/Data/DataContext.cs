using Microsoft.EntityFrameworkCore;
using DatingApp.API.Models;


public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }

    public DbSet<DatingApp.API.Models.Value> Values { get; set; }

    public DbSet<User> Users { get; set; }
    public DbSet<Photo> Photos{get; set;}
    
}
