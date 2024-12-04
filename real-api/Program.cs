using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using RealApi.Data;
using RealApi.Services;
using RealApi.Models;
using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore.Extensions;


var builder = WebApplication.CreateBuilder(args);

// 1. Configure Services (dependency injection, authentication, CORS)
builder.Services.AddScoped<AuthService>();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000") // Frontend origin
                  .AllowCredentials()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });

});

// Add session services
builder.Services.AddDistributedMemoryCache(); // Required for sessions
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(120); // Session timeout duration
    options.Cookie.HttpOnly = true; // Prevent client-side scripts from accessing the cookie
    options.Cookie.IsEssential = true; // Required for GDPR compliance
});

// Add DbContext services
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySQL(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add Controllers and Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// 2. Configure Middleware (CORS, authentication, Swagger, etc.)
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

// CORS should be placed before UseAuthentication and UseAuthorization
app.UseCors("AllowFrontend"); // Use the configured CORS middleware

// Use sessions in the app pipeline
app.UseSession();

app.UseHttpsRedirection();
app.UseAuthentication(); // Authentication middleware
app.UseAuthorization();  // Authorization middleware

app.MapControllers(); // Map endpoints to controllers

// 3. Run the application
app.Run();
