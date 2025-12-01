using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DotNet_Starter_Template.Migrations
{
    /// <inheritdoc />
    public partial class Inittables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    IsSystemRole = table.Column<bool>(type: "bit", nullable: false),
                    Priority = table.Column<int>(type: "int", nullable: false),
                    ParentRoleId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Color = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Icon = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    LastLoginAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ProfilePicture = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Address = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    City = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    State = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Country = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    PostalCode = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Timezone = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Language = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Theme = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    ImageUrl = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    IsVisible = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Mobile = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    AlternatePhone = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    IsVerified = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    IsBlocked = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DateOfBirth = table.Column<DateTime>(type: "date", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    LoyaltyPoints = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    TotalOrders = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    TotalSpent = table.Column<decimal>(type: "decimal(18,2)", nullable: false, defaultValue: 0m),
                    LastOrderDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    FirstOrderDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    PreferredLanguage = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true, defaultValue: "en"),
                    PreferredCurrency = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    NotificationEnabled = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    PromotionalEmails = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    DefaultPaymentMethod = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    SavedPaymentMethods = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InternalNotes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExternalCustomerId = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    LastLoginAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Permissions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Module = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Action = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Category = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Group = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    SubModule = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Feature = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Component = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Page = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Section = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    IsSystemPermission = table.Column<bool>(type: "bit", nullable: false),
                    IsDeprecated = table.Column<bool>(type: "bit", nullable: false),
                    ReplacementId = table.Column<int>(type: "int", nullable: true),
                    Level = table.Column<int>(type: "int", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Scope = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Priority = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Permissions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserRole",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    AssignedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AssignedBy = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExpiryDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    IsPrimary = table.Column<bool>(type: "bit", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRole", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_UserRole_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserRole_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MenuItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: true),
                    BaseImageUrl = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    IsAvailable = table.Column<bool>(type: "bit", nullable: false),
                    PreparationTime = table.Column<int>(type: "int", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MenuItems_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CustomerAddresses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerId = table.Column<int>(type: "int", nullable: false),
                    AddressType = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false, defaultValue: "Home"),
                    IsDefault = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    Label = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ContactName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    ContactPhone = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    AddressLine1 = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    AddressLine2 = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    BuildingNumber = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Floor = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Apartment = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Landmark = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    City = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    State = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Country = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PostalCode = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Latitude = table.Column<decimal>(type: "decimal(18,10)", nullable: true),
                    Longitude = table.Column<decimal>(type: "decimal(18,10)", nullable: true),
                    DeliveryInstructions = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerAddresses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CustomerAddresses_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CustomerPreferences",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerId = table.Column<int>(type: "int", nullable: false),
                    Allergies = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DietaryRestrictions = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SpiceLevel = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    FavoriteMenuItemIds = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FavoriteCategoryIds = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PreferredOrderTime = table.Column<TimeSpan>(type: "time", nullable: true),
                    AutoReorder = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerPreferences", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CustomerPreferences_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RolePermissions",
                columns: table => new
                {
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PermissionId = table.Column<int>(type: "int", nullable: false),
                    AssignedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AssignedBy = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExpiryDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    Conditions = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RolePermissions", x => new { x.RoleId, x.PermissionId });
                    table.ForeignKey(
                        name: "FK_RolePermissions_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RolePermissions_Permissions_PermissionId",
                        column: x => x.PermissionId,
                        principalTable: "Permissions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Portions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MenuItemId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    ImageUrl = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    MinSelection = table.Column<int>(type: "int", nullable: false),
                    MaxSelection = table.Column<int>(type: "int", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Portions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Portions_MenuItems_MenuItemId",
                        column: x => x.MenuItemId,
                        principalTable: "MenuItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Tickets",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LastUpdateTime = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    TicketNumber = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    LastOrderDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    LastPaymentDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    IsClosed = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    IsLocked = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    RemainingAmount = table.Column<decimal>(type: "decimal(16,2)", nullable: false, defaultValue: 0m),
                    TotalAmount = table.Column<decimal>(type: "decimal(16,2)", nullable: false, defaultValue: 0m),
                    DepartmentId = table.Column<int>(type: "int", nullable: false),
                    TicketTypeId = table.Column<int>(type: "int", nullable: false),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModifiedUserName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    TicketTags = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TicketStates = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TicketLogs = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExchangeRate = table.Column<decimal>(type: "decimal(18,2)", nullable: false, defaultValue: 1m),
                    TaxIncluded = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    Name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    TransactionDocument_Id = table.Column<int>(type: "int", nullable: true),
                    CustomerId = table.Column<int>(type: "int", nullable: true),
                    CustomerAddressId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tickets", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tickets_CustomerAddresses_CustomerAddressId",
                        column: x => x.CustomerAddressId,
                        principalTable: "CustomerAddresses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                    table.ForeignKey(
                        name: "FK_Tickets_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateTable(
                name: "PortionDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PortionId = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PortionDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PortionDetails_Portions_PortionId",
                        column: x => x.PortionId,
                        principalTable: "Portions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TicketId = table.Column<int>(type: "int", nullable: false),
                    WarehouseId = table.Column<int>(type: "int", nullable: false),
                    DepartmentId = table.Column<int>(type: "int", nullable: false),
                    MenuItemId = table.Column<int>(type: "int", nullable: false),
                    PortionId = table.Column<int>(type: "int", nullable: true),
                    PortionDetailId = table.Column<int>(type: "int", nullable: true),
                    MenuItemName = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    PortionName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Price = table.Column<decimal>(type: "decimal(16,2)", nullable: false),
                    Quantity = table.Column<decimal>(type: "decimal(16,3)", nullable: false),
                    PortionCount = table.Column<int>(type: "int", nullable: false),
                    Locked = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    CalculatePrice = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    DecreaseInventory = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    IncreaseInventory = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    OrderNumber = table.Column<int>(type: "int", nullable: false),
                    CreatingUserName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    CreatedDateTime = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    AccountTransactionTypeId = table.Column<int>(type: "int", nullable: false),
                    ProductTimerValueId = table.Column<int>(type: "int", nullable: true),
                    PriceTag = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Tag = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Taxes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrderTags = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrderStates = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Orders_MenuItems_MenuItemId",
                        column: x => x.MenuItemId,
                        principalTable: "MenuItems",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Orders_PortionDetails_PortionDetailId",
                        column: x => x.PortionDetailId,
                        principalTable: "PortionDetails",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Orders_Portions_PortionId",
                        column: x => x.PortionId,
                        principalTable: "Portions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                    table.ForeignKey(
                        name: "FK_Orders_Tickets_TicketId",
                        column: x => x.TicketId,
                        principalTable: "Tickets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "Category", "Color", "ConcurrencyStamp", "CreatedAt", "Description", "Icon", "IsActive", "IsSystemRole", "Name", "NormalizedName", "ParentRoleId", "Priority", "UpdatedAt" },
                values: new object[,]
                {
                    { "1", "System", null, null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8201), "Full system access", null, true, true, "SuperAdmin", "SUPERADMIN", null, 1, null },
                    { "2", "Admin", null, null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8260), "Administrative access", null, true, true, "Admin", "ADMIN", null, 2, null },
                    { "3", "Management", null, null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8263), "Management access", null, true, true, "Manager", "MANAGER", null, 3, null },
                    { "4", "User", null, null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8266), "Basic user access", null, true, true, "User", "USER", null, 4, null },
                    { "5", "Guest", null, null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8283), "Limited guest access", null, true, true, "Guest", "GUEST", null, 5, null }
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "Address", "City", "ConcurrencyStamp", "Country", "CreatedAt", "DateOfBirth", "Email", "EmailConfirmed", "FirstName", "Gender", "IsActive", "Language", "LastLoginAt", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "PostalCode", "ProfilePicture", "SecurityStamp", "State", "Theme", "Timezone", "TwoFactorEnabled", "UpdatedAt", "UserName" },
                values: new object[] { "1", 0, null, null, "332fdb3d-f9bc-48d9-96b1-a3f66e550522", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8390), null, "superadmin@example.com", true, "Super", null, true, "en", null, "Admin", false, null, "SUPERADMIN@EXAMPLE.COM", "SUPERADMIN@EXAMPLE.COM", "AQAAAAIAAYagAAAAEL40morZ8nsIIQxv22Qr6JfsJC6qwdM56w5wAbz+eiPXhJghTAFV0xz63x4EizUoRw==", null, false, null, null, "6f29a55b-67e0-47b6-8b1e-6ec166597265", null, "light", null, false, null, "superadmin@example.com" });

            migrationBuilder.InsertData(
                table: "Permissions",
                columns: new[] { "Id", "Action", "Category", "Component", "CreatedAt", "Description", "Feature", "Group", "IsActive", "IsDeprecated", "IsSystemPermission", "Level", "Module", "Name", "Page", "Priority", "ReplacementId", "Scope", "Section", "SubModule", "Type" },
                values: new object[,]
                {
                    { 1, "Create", "CRUD", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8007), "Create users", null, null, true, false, false, 1, "Users", "Users.Create", null, 0, null, "Global", null, null, "Functional" },
                    { 2, "Read", "CRUD", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8014), "View users", null, null, true, false, false, 1, "Users", "Users.Read", null, 0, null, "Global", null, null, "Functional" },
                    { 3, "Update", "CRUD", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8016), "Update users", null, null, true, false, false, 1, "Users", "Users.Update", null, 0, null, "Global", null, null, "Functional" },
                    { 4, "Delete", "CRUD", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8018), "Delete users", null, null, true, false, false, 1, "Users", "Users.Delete", null, 0, null, "Global", null, null, "Functional" },
                    { 5, "Activate", "Admin", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8019), "Activate/deactivate users", null, null, true, false, false, 1, "Users", "Users.Activate", null, 0, null, "Global", null, null, "Functional" },
                    { 6, "ResetPassword", "Admin", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8022), "Reset user passwords", null, null, true, false, false, 1, "Users", "Users.ResetPassword", null, 0, null, "Global", null, null, "Functional" },
                    { 7, "AssignRoles", "Admin", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8024), "Assign roles to users", null, null, true, false, false, 1, "Users", "Users.AssignRoles", null, 0, null, "Global", null, null, "Functional" },
                    { 8, "ViewAuditLog", "Audit", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8025), "View user audit logs", null, null, true, false, false, 1, "Users", "Users.ViewAuditLog", null, 0, null, "Global", null, null, "Functional" },
                    { 9, "Create", "CRUD", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8026), "Create roles", null, null, true, false, false, 1, "Roles", "Roles.Create", null, 0, null, "Global", null, null, "Functional" },
                    { 10, "Read", "CRUD", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8028), "View roles", null, null, true, false, false, 1, "Roles", "Roles.Read", null, 0, null, "Global", null, null, "Functional" },
                    { 11, "Update", "CRUD", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8030), "Update roles", null, null, true, false, false, 1, "Roles", "Roles.Update", null, 0, null, "Global", null, null, "Functional" },
                    { 12, "Delete", "CRUD", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8032), "Delete roles", null, null, true, false, false, 1, "Roles", "Roles.Delete", null, 0, null, "Global", null, null, "Functional" },
                    { 13, "AssignPermissions", "Admin", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8076), "Assign permissions to roles", null, null, true, false, false, 1, "Roles", "Roles.AssignPermissions", null, 0, null, "Global", null, null, "Functional" },
                    { 14, "AssignUsers", "Admin", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8078), "Assign users to roles", null, null, true, false, false, 1, "Roles", "Roles.AssignUsers", null, 0, null, "Global", null, null, "Functional" },
                    { 15, "Create", "CRUD", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8079), "Create permissions", null, null, true, false, false, 1, "Permissions", "Permissions.Create", null, 0, null, "Global", null, null, "Functional" },
                    { 16, "Read", "CRUD", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8080), "View permissions", null, null, true, false, false, 1, "Permissions", "Permissions.Read", null, 0, null, "Global", null, null, "Functional" },
                    { 17, "Update", "CRUD", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8082), "Update permissions", null, null, true, false, false, 1, "Permissions", "Permissions.Update", null, 0, null, "Global", null, null, "Functional" },
                    { 18, "Delete", "CRUD", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8084), "Delete permissions", null, null, true, false, false, 1, "Permissions", "Permissions.Delete", null, 0, null, "Global", null, null, "Functional" },
                    { 19, "Assign", "Admin", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8085), "Assign permissions to roles", null, null, true, false, false, 1, "Permissions", "Permissions.Assign", null, 0, null, "Global", null, null, "Functional" },
                    { 20, "Settings", "Admin", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8087), "Manage system settings", null, null, true, false, false, 1, "System", "System.Settings", null, 0, null, "Global", null, null, "Functional" },
                    { 21, "Backup", "Admin", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8089), "Create system backups", null, null, true, false, false, 1, "System", "System.Backup", null, 0, null, "Global", null, null, "Functional" },
                    { 22, "Restore", "Admin", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8090), "Restore system backups", null, null, true, false, false, 1, "System", "System.Restore", null, 0, null, "Global", null, null, "Functional" },
                    { 23, "Logs", "Admin", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8092), "View system logs", null, null, true, false, false, 1, "System", "System.Logs", null, 0, null, "Global", null, null, "Functional" },
                    { 24, "Monitoring", "Admin", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8093), "System monitoring access", null, null, true, false, false, 1, "System", "System.Monitoring", null, 0, null, "Global", null, null, "Functional" },
                    { 25, "Maintenance", "Admin", null, new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8095), "System maintenance access", null, null, true, false, false, 1, "System", "System.Maintenance", null, 0, null, "Global", null, null, "Functional" }
                });

            migrationBuilder.InsertData(
                table: "RolePermissions",
                columns: new[] { "PermissionId", "RoleId", "AssignedAt", "AssignedBy", "Conditions", "ExpiryDate", "IsActive", "Notes" },
                values: new object[,]
                {
                    { 1, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(233), "System", null, null, true, null },
                    { 2, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(238), "System", null, null, true, null },
                    { 3, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(242), "System", null, null, true, null },
                    { 4, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(981), "System", null, null, true, null },
                    { 5, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(994), "System", null, null, true, null },
                    { 6, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(996), "System", null, null, true, null },
                    { 7, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(998), "System", null, null, true, null },
                    { 8, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(999), "System", null, null, true, null },
                    { 9, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1000), "System", null, null, true, null },
                    { 10, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1001), "System", null, null, true, null },
                    { 11, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1002), "System", null, null, true, null },
                    { 12, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1004), "System", null, null, true, null },
                    { 13, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1005), "System", null, null, true, null },
                    { 14, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1006), "System", null, null, true, null },
                    { 15, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1008), "System", null, null, true, null },
                    { 16, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1009), "System", null, null, true, null },
                    { 17, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1010), "System", null, null, true, null },
                    { 18, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1012), "System", null, null, true, null },
                    { 19, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1013), "System", null, null, true, null },
                    { 20, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1013), "System", null, null, true, null },
                    { 21, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1014), "System", null, null, true, null },
                    { 22, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1015), "System", null, null, true, null },
                    { 23, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1016), "System", null, null, true, null },
                    { 24, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1016), "System", null, null, true, null },
                    { 25, "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1017), "System", null, null, true, null }
                });

            migrationBuilder.InsertData(
                table: "UserRole",
                columns: new[] { "RoleId", "UserId", "AssignedAt", "AssignedBy", "ExpiryDate", "IsActive", "IsPrimary", "Notes" },
                values: new object[] { "1", "1", new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(73), "System", null, true, true, null });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Categories_CreatedAt",
                table: "Categories",
                column: "CreatedAt");

            migrationBuilder.CreateIndex(
                name: "IX_Categories_DisplayOrder",
                table: "Categories",
                column: "DisplayOrder");

            migrationBuilder.CreateIndex(
                name: "IX_Categories_IsVisible",
                table: "Categories",
                column: "IsVisible");

            migrationBuilder.CreateIndex(
                name: "IX_Categories_UpdatedAt",
                table: "Categories",
                column: "UpdatedAt");

            migrationBuilder.CreateIndex(
                name: "UQ_Categories_Name",
                table: "Categories",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CustomerAddresses_City",
                table: "CustomerAddresses",
                column: "City");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerAddresses_CustomerId",
                table: "CustomerAddresses",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerAddresses_IsActive",
                table: "CustomerAddresses",
                column: "IsActive");

            migrationBuilder.CreateIndex(
                name: "UQ_CustomerAddresses_DefaultPerCustomer",
                table: "CustomerAddresses",
                columns: new[] { "CustomerId", "IsDefault" },
                unique: true,
                filter: "[IsDefault] = 1");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerPreferences_CustomerId",
                table: "CustomerPreferences",
                column: "CustomerId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Customers_CreatedAt",
                table: "Customers",
                column: "CreatedAt");

            migrationBuilder.CreateIndex(
                name: "IX_Customers_Email",
                table: "Customers",
                column: "Email",
                filter: "[Email] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Customers_IsActive",
                table: "Customers",
                column: "IsActive");

            migrationBuilder.CreateIndex(
                name: "IX_Customers_Phone",
                table: "Customers",
                column: "Phone");

            migrationBuilder.CreateIndex(
                name: "IX_MenuItems_CategoryId",
                table: "MenuItems",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_MenuItems_CreatedAt",
                table: "MenuItems",
                column: "CreatedAt");

            migrationBuilder.CreateIndex(
                name: "IX_MenuItems_IsAvailable",
                table: "MenuItems",
                column: "IsAvailable");

            migrationBuilder.CreateIndex(
                name: "IX_MenuItems_Name",
                table: "MenuItems",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_MenuItems_UpdatedAt",
                table: "MenuItems",
                column: "UpdatedAt");

            migrationBuilder.CreateIndex(
                name: "UQ_MenuItems_Category_Name",
                table: "MenuItems",
                columns: new[] { "CategoryId", "Name" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Orders_CreatedDateTime",
                table: "Orders",
                column: "CreatedDateTime");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_MenuItemId",
                table: "Orders",
                column: "MenuItemId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_PortionDetailId",
                table: "Orders",
                column: "PortionDetailId",
                filter: "[PortionDetailId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_PortionId",
                table: "Orders",
                column: "PortionId",
                filter: "[PortionId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_TicketId",
                table: "Orders",
                column: "TicketId");

            migrationBuilder.CreateIndex(
                name: "IX_PortionDetails_CreatedAt",
                table: "PortionDetails",
                column: "CreatedAt");

            migrationBuilder.CreateIndex(
                name: "IX_PortionDetails_Name",
                table: "PortionDetails",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_PortionDetails_PortionId",
                table: "PortionDetails",
                column: "PortionId");

            migrationBuilder.CreateIndex(
                name: "IX_PortionDetails_UpdatedAt",
                table: "PortionDetails",
                column: "UpdatedAt");

            migrationBuilder.CreateIndex(
                name: "UQ_PortionDetails_Portion_Name",
                table: "PortionDetails",
                columns: new[] { "PortionId", "Name" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Portions_CreatedAt",
                table: "Portions",
                column: "CreatedAt");

            migrationBuilder.CreateIndex(
                name: "IX_Portions_DisplayOrder",
                table: "Portions",
                column: "DisplayOrder");

            migrationBuilder.CreateIndex(
                name: "IX_Portions_IsActive",
                table: "Portions",
                column: "IsActive");

            migrationBuilder.CreateIndex(
                name: "IX_Portions_MenuItemId",
                table: "Portions",
                column: "MenuItemId");

            migrationBuilder.CreateIndex(
                name: "IX_Portions_UpdatedAt",
                table: "Portions",
                column: "UpdatedAt");

            migrationBuilder.CreateIndex(
                name: "UQ_Portions_MenuItem_Name",
                table: "Portions",
                columns: new[] { "MenuItemId", "Name" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RolePermissions_PermissionId",
                table: "RolePermissions",
                column: "PermissionId");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_CustomerAddressId",
                table: "Tickets",
                column: "CustomerAddressId",
                filter: "[CustomerAddressId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_CustomerId",
                table: "Tickets",
                column: "CustomerId",
                filter: "[CustomerId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_Date",
                table: "Tickets",
                column: "Date");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_DepartmentId",
                table: "Tickets",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_IsClosed",
                table: "Tickets",
                column: "IsClosed");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_TicketNumber",
                table: "Tickets",
                column: "TicketNumber",
                filter: "[TicketNumber] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_UserRole_RoleId",
                table: "UserRole",
                column: "RoleId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "CustomerPreferences");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "RolePermissions");

            migrationBuilder.DropTable(
                name: "UserRole");

            migrationBuilder.DropTable(
                name: "PortionDetails");

            migrationBuilder.DropTable(
                name: "Tickets");

            migrationBuilder.DropTable(
                name: "Permissions");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Portions");

            migrationBuilder.DropTable(
                name: "CustomerAddresses");

            migrationBuilder.DropTable(
                name: "MenuItems");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
