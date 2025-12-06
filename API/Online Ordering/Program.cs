using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Serilog;
using Microsoft.Data.SqlClient;
using DotNet_Starter_Template.Data;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Repositories.Interfaces;
using DotNet_Starter_Template.Repositories.Implementations;
using DotNet_Starter_Template.Services.Interfaces;
using DotNet_Starter_Template.Services.Implementations;
using DotNet_Starter_Template.Middleware;

// Configure Serilog
Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(new ConfigurationBuilder()
        .AddJsonFile("appsettings.json")
        .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"}.json", optional: true)
        .Build())
    .CreateLogger();

try
{
    Log.Information("Starting web application");

    var builder = WebApplication.CreateBuilder(args);

    // Add Serilog
    builder.Host.UseSerilog();

    // Add services to the container
    builder.Services.AddControllers()
        .AddJsonOptions(options =>
        {
            // Configure JSON to use camelCase (matches frontend)
            options.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
            options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
        });

    // Add CORS
    builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowAll", policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
    });

    // Add Entity Framework
    builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

    // Add Identity
    builder.Services.AddIdentity<User, Role>(options =>
    {
        // Password settings
        options.Password.RequireDigit = true;
        options.Password.RequireLowercase = true;
        options.Password.RequireNonAlphanumeric = true;
        options.Password.RequireUppercase = true;
        options.Password.RequiredLength = 8;
        options.Password.RequiredUniqueChars = 1;

        // Lockout settings
        options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
        options.Lockout.MaxFailedAccessAttempts = 5;
        options.Lockout.AllowedForNewUsers = true;

        // User settings
        options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
        options.User.RequireUniqueEmail = true;
    })
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

    // Add JWT Authentication
    var jwtSettings = builder.Configuration.GetSection("JwtSettings");
    var secretKey = jwtSettings["SecretKey"] ?? "YourSuperSecretKeyThatIsAtLeast32CharactersLong!";
    var issuer = jwtSettings["Issuer"] ?? "DotNetStarterTemplate";
    var audience = jwtSettings["Audience"] ?? "DotNetStarterTemplate";

    builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = issuer,
            ValidAudience = audience,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey)),
            ClockSkew = TimeSpan.Zero
        };
    });

    // Register repositories
    builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
    builder.Services.AddScoped<IUserRepository, UserRepository>();
    builder.Services.AddScoped<IRoleRepository, RoleRepository>();
    builder.Services.AddScoped<IPermissionRepository, PermissionRepository>();
    builder.Services.AddScoped<IUserRoleRepository, UserRoleRepository>();
    builder.Services.AddScoped<IRolePermissionRepository, RolePermissionRepository>();



    // Register Menu Management repositories
    builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
    builder.Services.AddScoped<IMenuItemRepository, MenuItemRepository>();
    builder.Services.AddScoped<IPortionRepository, PortionRepository>();
    builder.Services.AddScoped<IPortionDetailRepository, PortionDetailRepository>();

    // Register Order Management repositories
    builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
    builder.Services.AddScoped<ITicketRepository, TicketRepository>();
    builder.Services.AddScoped<IOrderRepository, OrderRepository>();

    // Register services
    builder.Services.AddScoped<IAuthService, AuthService>();
    builder.Services.AddScoped<ICustomerAuthService, CustomerAuthService>();
    builder.Services.AddScoped<IRoleService, RoleService>();
    builder.Services.AddScoped<IPermissionService, PermissionService>();
    builder.Services.AddScoped<IUserService, UserService>();

    // Register Menu Management services
    builder.Services.AddScoped<ICategoryService, CategoryService>();
    builder.Services.AddScoped<IMenuItemService, MenuItemService>();
    builder.Services.AddScoped<IPortionService, PortionService>();
    builder.Services.AddScoped<IPortionDetailService, PortionDetailService>();
    builder.Services.AddScoped<IFileUploadService, FileUploadService>();

    // Register Order Management services
    builder.Services.AddScoped<IOrderService, OrderService>();

    // Add AutoMapper
    builder.Services.AddAutoMapper(typeof(Program));

    // Add Health Checks
    builder.Services.AddHealthChecks();

    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new() { Title = "DotNet Starter Template API", Version = "v1" });
        
        // Add JWT authentication to Swagger
        c.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
        {
            Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
            Name = "Authorization",
            In = Microsoft.OpenApi.Models.ParameterLocation.Header,
            Type = Microsoft.OpenApi.Models.SecuritySchemeType.ApiKey,
            Scheme = "Bearer"
        });

        c.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement
        {
            {
                new Microsoft.OpenApi.Models.OpenApiSecurityScheme
                {
                    Reference = new Microsoft.OpenApi.Models.OpenApiReference
                    {
                        Type = Microsoft.OpenApi.Models.ReferenceType.SecurityScheme,
                        Id = "Bearer"
                    }
                },
                Array.Empty<string>()
            }
        });
    });

    var app = builder.Build();

    // Configure the HTTP request pipeline
    // IMPORTANT: Swagger must be configured BEFORE database operations
    // so that Swagger UI is available even if database connection fails
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "DotNet Starter Template API v1");
            c.RoutePrefix = "swagger";
            c.DisplayRequestDuration();
        });
    }

    // Add middleware
    app.UseMiddleware<ErrorHandlingMiddleware>();
    app.UseMiddleware<RequestLoggingMiddleware>();

    app.UseCors("AllowAll");

    app.UseHttpsRedirection();

    // Enable static files (serves files from wwwroot)
    app.UseStaticFiles();

    app.UseAuthentication();
    app.UseAuthorization();

    app.MapControllers();

    // Map health checks
    app.MapHealthChecks("/health");

    // Ensure database exists and is migrated (with error handling to not block app startup)
    try
    {
        using (var scope = app.Services.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            var configuration = scope.ServiceProvider.GetRequiredService<IConfiguration>();
            var connectionString = configuration.GetConnectionString("DefaultConnection");
            
            try
            {
                // Extract database name from connection string
                var databaseName = "FOO"; // Default database name
                if (connectionString != null)
                {
                    var dbNameMatch = System.Text.RegularExpressions.Regex.Match(connectionString, @"Database=([^;]+)", System.Text.RegularExpressions.RegexOptions.IgnoreCase);
                    if (dbNameMatch.Success)
                    {
                        databaseName = dbNameMatch.Groups[1].Value.Trim();
                    }
                }

                // Create connection string to master database to check/create the database
                var masterConnectionString = connectionString?.Replace($"Database={databaseName}", "Database=master") 
                    ?? "Server=localhost,1433;Database=master;User Id=sa;Password=FaisalShabbir@55;TrustServerCertificate=True;Encrypt=False;";

                // Ensure the database exists
                using (var masterConnection = new SqlConnection(masterConnectionString))
                {
                    masterConnection.Open();
                    var command = masterConnection.CreateCommand();
                    command.CommandText = $@"
                        IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = '{databaseName}')
                        BEGIN
                            CREATE DATABASE [{databaseName}];
                            PRINT 'Database {databaseName} created successfully.';
                        END
                        ELSE
                        BEGIN
                            PRINT 'Database {databaseName} already exists.';
                        END";
                    command.ExecuteNonQuery();
                    Log.Information($"Database '{databaseName}' ensured to exist.");
                }

                // Now connect to the actual database and run migrations
                if (context.Database.CanConnect())
                {
                    Log.Information("Connected to database. Running migrations...");
                    context.Database.Migrate();
                    Log.Information("Database migration completed successfully");
                }
                else
                {
                    Log.Warning("Cannot connect to database after creation. Please check your connection string.");
                }
            }
            catch (SqlException sqlEx)
            {
                Log.Error(sqlEx, $"SQL Server error: {sqlEx.Message}. Please check your SQL Server connection settings.");
            }
            catch (Exception ex)
            {
                Log.Error(ex, "Error during database initialization. Trying alternative method...");
                try
                {
                    // Fallback: Try EnsureCreated if migrations fail
                    if (!context.Database.CanConnect())
                    {
                        context.Database.EnsureCreated();
                        Log.Information("Database created using EnsureCreated method");
                    }
                    else
                    {
                        context.Database.Migrate();
                        Log.Information("Database migration completed successfully (fallback method)");
                    }
                }
                catch (Exception ex2)
                {
                    Log.Error(ex2, "Failed to create/migrate database. The application will continue but database operations may fail. Please check your SQL Server connection settings.");
                }
            }
        }
    }
    catch (Exception ex)
    {
        Log.Error(ex, "Error during database initialization. Application will continue to start. Please check your SQL Server connection settings.");
    }

    // Ensure wwwroot/images directory exists
    var wwwrootPath = Path.Combine(app.Environment.ContentRootPath, "wwwroot");
    if (!Directory.Exists(wwwrootPath))
    {
        Directory.CreateDirectory(wwwrootPath);
    }
    var imagesPath = Path.Combine(wwwrootPath, "images");
    if (!Directory.Exists(imagesPath))
    {
        Directory.CreateDirectory(imagesPath);
        Directory.CreateDirectory(Path.Combine(imagesPath, "menu-items"));
        Directory.CreateDirectory(Path.Combine(imagesPath, "portions"));
        Log.Information("Created wwwroot/images directory structure");
    }

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Application terminated unexpectedly");
}
finally
{
    Log.CloseAndFlush();
}
