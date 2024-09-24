namespace real_api;
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();

        // services.AddDbContext<ApplicationDbContext>(options =>
        //     options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

        // // Register repositories and services
        // services.AddScoped<IProductRepository, ProductRepository>();
        // services.AddScoped<IProductService, ProductService>();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseRouting();
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}