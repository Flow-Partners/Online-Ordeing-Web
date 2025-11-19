using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DotNet_Starter_Template.Migrations
{
    /// <inheritdoc />
    public partial class CreateMenuManagementTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Create Categories table
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    ImageUrl = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    IsVisible = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "UQ_Categories_Name",
                table: "Categories",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Categories_DisplayOrder",
                table: "Categories",
                column: "DisplayOrder");

            migrationBuilder.CreateIndex(
                name: "IX_Categories_IsVisible",
                table: "Categories",
                column: "IsVisible");

            migrationBuilder.CreateIndex(
                name: "IX_Categories_CreatedAt",
                table: "Categories",
                column: "CreatedAt");

            migrationBuilder.CreateIndex(
                name: "IX_Categories_UpdatedAt",
                table: "Categories",
                column: "UpdatedAt");

            // Create MenuItems table
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
                    IsAvailable = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    PreparationTime = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
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

            migrationBuilder.CreateIndex(
                name: "UQ_MenuItems_Category_Name",
                table: "MenuItems",
                columns: new[] { "CategoryId", "Name" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MenuItems_CategoryId",
                table: "MenuItems",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_MenuItems_IsAvailable",
                table: "MenuItems",
                column: "IsAvailable");

            migrationBuilder.CreateIndex(
                name: "IX_MenuItems_Name",
                table: "MenuItems",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_MenuItems_CreatedAt",
                table: "MenuItems",
                column: "CreatedAt");

            migrationBuilder.CreateIndex(
                name: "IX_MenuItems_UpdatedAt",
                table: "MenuItems",
                column: "UpdatedAt");

            // Create Portions table
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
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    MinSelection = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
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

            migrationBuilder.CreateIndex(
                name: "UQ_Portions_MenuItem_Name",
                table: "Portions",
                columns: new[] { "MenuItemId", "Name" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Portions_MenuItemId",
                table: "Portions",
                column: "MenuItemId");

            migrationBuilder.CreateIndex(
                name: "IX_Portions_IsActive",
                table: "Portions",
                column: "IsActive");

            migrationBuilder.CreateIndex(
                name: "IX_Portions_DisplayOrder",
                table: "Portions",
                column: "DisplayOrder");

            migrationBuilder.CreateIndex(
                name: "IX_Portions_CreatedAt",
                table: "Portions",
                column: "CreatedAt");

            migrationBuilder.CreateIndex(
                name: "IX_Portions_UpdatedAt",
                table: "Portions",
                column: "UpdatedAt");

            // Create PortionDetails table
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

            migrationBuilder.CreateIndex(
                name: "UQ_PortionDetails_Portion_Name",
                table: "PortionDetails",
                columns: new[] { "PortionId", "Name" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PortionDetails_PortionId",
                table: "PortionDetails",
                column: "PortionId");

            migrationBuilder.CreateIndex(
                name: "IX_PortionDetails_Name",
                table: "PortionDetails",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_PortionDetails_CreatedAt",
                table: "PortionDetails",
                column: "CreatedAt");

            migrationBuilder.CreateIndex(
                name: "IX_PortionDetails_UpdatedAt",
                table: "PortionDetails",
                column: "UpdatedAt");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3474));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3602));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3607));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3622));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3625));

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "CreatedAt", "PasswordHash", "SecurityStamp" },
                values: new object[] { "2bdc1d64-19ee-4979-89d1-b86d2d388e93", new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3800), "AQAAAAIAAYagAAAAENlouKfUrfZu7/x5eS7zFryHXpvIjbq0qskJQB7GgxKrVzHH8jjlW8NzY0WdBNF9sA==", "5123f419-1e28-4342-b2f6-a5a1eac3816c" });

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3221));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3243));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3246));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3248));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3250));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3254));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3256));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3257));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3259));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 10,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3262));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 11,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3266));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 12,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3267));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 13,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3283));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 14,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3285));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 15,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3287));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 16,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3288));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 17,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3290));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 18,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3293));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 19,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3295));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 20,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3296));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 21,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3298));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 22,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3299));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 23,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3301));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 24,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3303));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 25,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 659, DateTimeKind.Utc).AddTicks(3304));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 1, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(861));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 2, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(866));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 3, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(957));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 4, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(959));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 5, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(960));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 6, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(961));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 7, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(963));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 8, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(965));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 9, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(965));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 10, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(966));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 11, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(966));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 12, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(967));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 13, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(967));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 14, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(968));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 15, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(969));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 16, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(970));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 17, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(970));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 18, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(971));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 19, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(972));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 20, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(973));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 21, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(974));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 22, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(974));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 23, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(976));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 24, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(976));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 25, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(977));

            migrationBuilder.UpdateData(
                table: "UserRole",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "1", "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 17, 15, 15, 51, 793, DateTimeKind.Utc).AddTicks(639));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Drop tables in reverse order (due to foreign key dependencies)
            migrationBuilder.DropTable(name: "PortionDetails");
            migrationBuilder.DropTable(name: "Portions");
            migrationBuilder.DropTable(name: "MenuItems");
            migrationBuilder.DropTable(name: "Categories");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1",
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(216));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2",
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(284));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3",
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(288));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4",
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(307));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5",
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(310));

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "CreatedAt", "PasswordHash", "SecurityStamp" },
                values: new object[] { "382dd3bc-083b-4794-9dc8-1663573719af", new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(428), "AQAAAAIAAYagAAAAENVYyWaV5FFa2AZZAc1Q2/c/p1wFkyKaAs12dBBPeTMrKhcMkeqVAhPjugLQfvyc9Q==", "f3dea786-1dea-45fe-9427-19206fadb16f" });

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(1));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(10));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(13));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(15));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(17));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(20));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(89));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(92));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(93));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 10,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(97));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 11,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(98));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 12,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(100));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 13,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(101));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 14,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(103));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 15,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(105));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 16,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(106));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 17,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(108));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 18,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(111));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 19,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(113));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 20,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(114));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 21,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(116));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 22,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(117));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 23,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(119));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 24,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(120));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 25,
                column: "CreatedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 247, DateTimeKind.Utc).AddTicks(122));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 1, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9921));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 2, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9926));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 3, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9928));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 4, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9929));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 5, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9930));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 6, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9930));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 7, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9931));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 8, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9931));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 9, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9933));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 10, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9933));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 11, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9934));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 12, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9935));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 13, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9936));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 14, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9937));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 15, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9937));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 16, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9938));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 17, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9939));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 18, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9940));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 19, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9940));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 20, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9941));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 21, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9941));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 22, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9942));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 23, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9942));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 24, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9943));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 25, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9943));

            migrationBuilder.UpdateData(
                table: "UserRole",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "1", "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 10, 29, 23, 0, 10, 326, DateTimeKind.Utc).AddTicks(9822));
        }
    }
}
