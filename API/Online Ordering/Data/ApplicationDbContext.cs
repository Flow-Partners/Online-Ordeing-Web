using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using DotNet_Starter_Template.Models.Entities;
using DotNet_Starter_Template.Data.Configurations;

namespace DotNet_Starter_Template.Data
{
    public class ApplicationDbContext : IdentityDbContext<User, Role, string>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Permission> Permissions { get; set; }
        public DbSet<RolePermission> RolePermissions { get; set; }

        // Menu Management entities
        public DbSet<Category> Categories { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }
        public DbSet<Portion> Portions { get; set; }
        public DbSet<PortionDetail> PortionDetails { get; set; }

        // Customer Management entities
        public DbSet<Customer> Customers { get; set; }
        public DbSet<CustomerAddress> CustomerAddresses { get; set; }
        public DbSet<CustomerPreference> CustomerPreferences { get; set; }

        // Order Management entities
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Configure UserRole many-to-many
            builder.Entity<UserRole>()
                .HasKey(ur => new { ur.UserId, ur.RoleId });

            builder.Entity<UserRole>()
                .HasOne(ur => ur.User)
                .WithMany(u => u.UserRoles)
                .HasForeignKey(ur => ur.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<UserRole>()
                .HasOne(ur => ur.Role)
                .WithMany(r => r.UserRoles)
                .HasForeignKey(ur => ur.RoleId)
                .OnDelete(DeleteBehavior.Cascade);

            // Configure RolePermission many-to-many
            builder.Entity<RolePermission>()
                .HasKey(rp => new { rp.RoleId, rp.PermissionId });

            builder.Entity<RolePermission>()
                .HasOne(rp => rp.Role)
                .WithMany(r => r.RolePermissions)
                .HasForeignKey(rp => rp.RoleId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<RolePermission>()
                .HasOne(rp => rp.Permission)
                .WithMany(p => p.RolePermissions)
                .HasForeignKey(rp => rp.PermissionId)
                .OnDelete(DeleteBehavior.Cascade);

            // Configure Menu Management entities
            ConfigureMenuEntities(builder);

            // Apply entity configurations from separate files
            builder.ApplyConfiguration(new CustomerConfiguration());
            builder.ApplyConfiguration(new CustomerAddressConfiguration());
            builder.ApplyConfiguration(new CustomerPreferenceConfiguration());
            builder.ApplyConfiguration(new TicketConfiguration());
            builder.ApplyConfiguration(new OrderConfiguration());

            // Seed initial data
            SeedData(builder);
        }

        private void SeedData(ModelBuilder builder)
        {
            // Seed Permissions
            var permissions = new List<Permission>
            {
                new Permission { Id = 1, Name = "Users.Create", Description = "Create users", Module = "Users", Action = "Create", Category = "CRUD" },
                new Permission { Id = 2, Name = "Users.Read", Description = "View users", Module = "Users", Action = "Read", Category = "CRUD" },
                new Permission { Id = 3, Name = "Users.Update", Description = "Update users", Module = "Users", Action = "Update", Category = "CRUD" },
                new Permission { Id = 4, Name = "Users.Delete", Description = "Delete users", Module = "Users", Action = "Delete", Category = "CRUD" },
                new Permission { Id = 5, Name = "Users.Activate", Description = "Activate/deactivate users", Module = "Users", Action = "Activate", Category = "Admin" },
                new Permission { Id = 6, Name = "Users.ResetPassword", Description = "Reset user passwords", Module = "Users", Action = "ResetPassword", Category = "Admin" },
                new Permission { Id = 7, Name = "Users.AssignRoles", Description = "Assign roles to users", Module = "Users", Action = "AssignRoles", Category = "Admin" },
                new Permission { Id = 8, Name = "Users.ViewAuditLog", Description = "View user audit logs", Module = "Users", Action = "ViewAuditLog", Category = "Audit" },
                
                new Permission { Id = 9, Name = "Roles.Create", Description = "Create roles", Module = "Roles", Action = "Create", Category = "CRUD" },
                new Permission { Id = 10, Name = "Roles.Read", Description = "View roles", Module = "Roles", Action = "Read", Category = "CRUD" },
                new Permission { Id = 11, Name = "Roles.Update", Description = "Update roles", Module = "Roles", Action = "Update", Category = "CRUD" },
                new Permission { Id = 12, Name = "Roles.Delete", Description = "Delete roles", Module = "Roles", Action = "Delete", Category = "CRUD" },
                new Permission { Id = 13, Name = "Roles.AssignPermissions", Description = "Assign permissions to roles", Module = "Roles", Action = "AssignPermissions", Category = "Admin" },
                new Permission { Id = 14, Name = "Roles.AssignUsers", Description = "Assign users to roles", Module = "Roles", Action = "AssignUsers", Category = "Admin" },
                
                new Permission { Id = 15, Name = "Permissions.Create", Description = "Create permissions", Module = "Permissions", Action = "Create", Category = "CRUD" },
                new Permission { Id = 16, Name = "Permissions.Read", Description = "View permissions", Module = "Permissions", Action = "Read", Category = "CRUD" },
                new Permission { Id = 17, Name = "Permissions.Update", Description = "Update permissions", Module = "Permissions", Action = "Update", Category = "CRUD" },
                new Permission { Id = 18, Name = "Permissions.Delete", Description = "Delete permissions", Module = "Permissions", Action = "Delete", Category = "CRUD" },
                new Permission { Id = 19, Name = "Permissions.Assign", Description = "Assign permissions to roles", Module = "Permissions", Action = "Assign", Category = "Admin" },
                
                new Permission { Id = 20, Name = "System.Settings", Description = "Manage system settings", Module = "System", Action = "Settings", Category = "Admin" },
                new Permission { Id = 21, Name = "System.Backup", Description = "Create system backups", Module = "System", Action = "Backup", Category = "Admin" },
                new Permission { Id = 22, Name = "System.Restore", Description = "Restore system backups", Module = "System", Action = "Restore", Category = "Admin" },
                new Permission { Id = 23, Name = "System.Logs", Description = "View system logs", Module = "System", Action = "Logs", Category = "Admin" },
                new Permission { Id = 24, Name = "System.Monitoring", Description = "System monitoring access", Module = "System", Action = "Monitoring", Category = "Admin" },
                new Permission { Id = 25, Name = "System.Maintenance", Description = "System maintenance access", Module = "System", Action = "Maintenance", Category = "Admin" }
            };

            builder.Entity<Permission>().HasData(permissions);

            // Seed Roles
            var roles = new List<Role>
            {
                new Role { Id = "1", Name = "SuperAdmin", NormalizedName = "SUPERADMIN", Description = "Full system access", IsSystemRole = true, Priority = 1, Category = "System" },
                new Role { Id = "2", Name = "Admin", NormalizedName = "ADMIN", Description = "Administrative access", IsSystemRole = true, Priority = 2, Category = "Admin" },
                new Role { Id = "3", Name = "Manager", NormalizedName = "MANAGER", Description = "Management access", IsSystemRole = true, Priority = 3, Category = "Management" },
                new Role { Id = "4", Name = "User", NormalizedName = "USER", Description = "Basic user access", IsSystemRole = true, Priority = 4, Category = "User" },
                new Role { Id = "5", Name = "Guest", NormalizedName = "GUEST", Description = "Limited guest access", IsSystemRole = true, Priority = 5, Category = "Guest" }
            };

            builder.Entity<Role>().HasData(roles);

            // Seed SuperAdmin user
            var hasher = new Microsoft.AspNetCore.Identity.PasswordHasher<User>();
            var superAdmin = new User
            {
                Id = "1",
                UserName = "superadmin@example.com",
                NormalizedUserName = "SUPERADMIN@EXAMPLE.COM",
                Email = "superadmin@example.com",
                NormalizedEmail = "SUPERADMIN@EXAMPLE.COM",
                EmailConfirmed = true,
                FirstName = "Super",
                LastName = "Admin",
                SecurityStamp = Guid.NewGuid().ToString(),
                CreatedAt = DateTime.UtcNow,
                IsActive = true
            };
            superAdmin.PasswordHash = hasher.HashPassword(superAdmin, "SuperAdmin123!");

            builder.Entity<User>().HasData(superAdmin);

            // Assign SuperAdmin role to super admin user
            builder.Entity<UserRole>().HasData(
                new UserRole { UserId = "1", RoleId = "1", AssignedBy = "System", IsPrimary = true }
            );

            // Assign all permissions to SuperAdmin role
            var rolePermissions = permissions.Select(p => new RolePermission
            {
                RoleId = "1",
                PermissionId = p.Id,
                AssignedBy = "System"
            }).ToList();

            builder.Entity<RolePermission>().HasData(rolePermissions);
        }

        private void ConfigureMenuEntities(ModelBuilder builder)
        {
            // Configure Category entity
            builder.Entity<Category>(entity =>
            {
                // Unique constraint on Name
                entity.HasIndex(e => e.Name)
                    .IsUnique()
                    .HasDatabaseName("UQ_Categories_Name");

                // Indexes
                entity.HasIndex(e => e.DisplayOrder)
                    .HasDatabaseName("IX_Categories_DisplayOrder");
                entity.HasIndex(e => e.IsVisible)
                    .HasDatabaseName("IX_Categories_IsVisible");
                entity.HasIndex(e => e.CreatedAt)
                    .HasDatabaseName("IX_Categories_CreatedAt");
                entity.HasIndex(e => e.UpdatedAt)
                    .HasDatabaseName("IX_Categories_UpdatedAt");

                // Default values for timestamps
                entity.Property(e => e.CreatedAt)
                    .HasDefaultValueSql("GETDATE()");
                entity.Property(e => e.UpdatedAt)
                    .HasDefaultValueSql("GETDATE()");
            });

            // Configure MenuItem entity
            builder.Entity<MenuItem>(entity =>
            {
                // Foreign key relationship
                entity.HasOne(e => e.Category)
                    .WithMany(c => c.MenuItems)
                    .HasForeignKey(e => e.CategoryId)
                    .OnDelete(DeleteBehavior.Restrict); // Prevent cascade delete of category with menu items

                // Unique constraint on CategoryId + Name
                entity.HasIndex(e => new { e.CategoryId, e.Name })
                    .IsUnique()
                    .HasDatabaseName("UQ_MenuItems_Category_Name");

                // Indexes
                entity.HasIndex(e => e.CategoryId)
                    .HasDatabaseName("IX_MenuItems_CategoryId");
                entity.HasIndex(e => e.IsAvailable)
                    .HasDatabaseName("IX_MenuItems_IsAvailable");
                entity.HasIndex(e => e.Name)
                    .HasDatabaseName("IX_MenuItems_Name");
                entity.HasIndex(e => e.CreatedAt)
                    .HasDatabaseName("IX_MenuItems_CreatedAt");
                entity.HasIndex(e => e.UpdatedAt)
                    .HasDatabaseName("IX_MenuItems_UpdatedAt");

                // Default values for timestamps
                entity.Property(e => e.CreatedAt)
                    .HasDefaultValueSql("GETDATE()");
                entity.Property(e => e.UpdatedAt)
                    .HasDefaultValueSql("GETDATE()");
            });

            // Configure Portion entity
            builder.Entity<Portion>(entity =>
            {
                // Foreign key relationship with cascade delete
                entity.HasOne(e => e.MenuItem)
                    .WithMany(mi => mi.Portions)
                    .HasForeignKey(e => e.MenuItemId)
                    .OnDelete(DeleteBehavior.Cascade); // Cascade delete when MenuItem is deleted

                // Unique constraint on MenuItemId + Name
                entity.HasIndex(e => new { e.MenuItemId, e.Name })
                    .IsUnique()
                    .HasDatabaseName("UQ_Portions_MenuItem_Name");

                // Indexes
                entity.HasIndex(e => e.MenuItemId)
                    .HasDatabaseName("IX_Portions_MenuItemId");
                entity.HasIndex(e => e.IsActive)
                    .HasDatabaseName("IX_Portions_IsActive");
                entity.HasIndex(e => e.DisplayOrder)
                    .HasDatabaseName("IX_Portions_DisplayOrder");
                entity.HasIndex(e => e.CreatedAt)
                    .HasDatabaseName("IX_Portions_CreatedAt");
                entity.HasIndex(e => e.UpdatedAt)
                    .HasDatabaseName("IX_Portions_UpdatedAt");

                // Default values for timestamps
                entity.Property(e => e.CreatedAt)
                    .HasDefaultValueSql("GETDATE()");
                entity.Property(e => e.UpdatedAt)
                    .HasDefaultValueSql("GETDATE()");
            });

            // Configure PortionDetail entity
            builder.Entity<PortionDetail>(entity =>
            {
                // Foreign key relationship with cascade delete
                entity.HasOne(e => e.Portion)
                    .WithMany(p => p.PortionDetails)
                    .HasForeignKey(e => e.PortionId)
                    .OnDelete(DeleteBehavior.Cascade); // Cascade delete when Portion is deleted

                // Unique constraint on PortionId + Name
                entity.HasIndex(e => new { e.PortionId, e.Name })
                    .IsUnique()
                    .HasDatabaseName("UQ_PortionDetails_Portion_Name");

                // Indexes
                entity.HasIndex(e => e.PortionId)
                    .HasDatabaseName("IX_PortionDetails_PortionId");
                entity.HasIndex(e => e.Name)
                    .HasDatabaseName("IX_PortionDetails_Name");
                entity.HasIndex(e => e.CreatedAt)
                    .HasDatabaseName("IX_PortionDetails_CreatedAt");
                entity.HasIndex(e => e.UpdatedAt)
                    .HasDatabaseName("IX_PortionDetails_UpdatedAt");

                // Default values for timestamps
                entity.Property(e => e.CreatedAt)
                    .HasDefaultValueSql("GETDATE()");
                entity.Property(e => e.UpdatedAt)
                    .HasDefaultValueSql("GETDATE()");
            });
        }
    }
}
