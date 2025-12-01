using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DotNet_Starter_Template.Migrations
{
    /// <inheritdoc />
    public partial class CreateOrderManagementTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3439));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3503));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3506));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3510));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3513));

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "CreatedAt", "PasswordHash", "SecurityStamp" },
                values: new object[] { "2eb2dce1-9095-42e1-bd81-13152c8083d1", new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3625), "AQAAAAIAAYagAAAAEMD/sBhvRiHvDrzblkdHEi+eefLC/acsug+Qylt+0ePnCp3h04B3lsuNlTkZEOteGA==", "44ca6238-d58a-455e-9054-31a2c88ba891" });

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3267));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3273));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3275));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3277));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3329));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3332));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3333));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3335));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3336));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 10,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3338));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 11,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3339));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 12,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3340));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 13,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3342));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 14,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3343));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 15,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3345));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 16,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3347));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 17,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3349));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 18,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3352));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 19,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3353));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 20,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3354));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 21,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3356));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 22,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3357));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 23,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3358));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 24,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3359));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 25,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 678, DateTimeKind.Utc).AddTicks(3361));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 1, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2201));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 2, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2205));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 3, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2207));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 4, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2208));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 5, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2209));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 6, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2210));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 7, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2210));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 8, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2211));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 9, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2212));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 10, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2212));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 11, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2213));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 12, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2213));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 13, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2214));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 14, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2214));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 15, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2215));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 16, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2216));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 17, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2217));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 18, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2217));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 19, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2218));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 20, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2218));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 21, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2219));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 22, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2219));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 23, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2220));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 24, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2221));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 25, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2222));

            migrationBuilder.UpdateData(
                table: "UserRole",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "1", "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 20, 12, 53, 31, 750, DateTimeKind.Utc).AddTicks(2088));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8201));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8260));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8263));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8266));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5",
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8283));

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "CreatedAt", "PasswordHash", "SecurityStamp" },
                values: new object[] { "332fdb3d-f9bc-48d9-96b1-a3f66e550522", new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8390), "AQAAAAIAAYagAAAAEL40morZ8nsIIQxv22Qr6JfsJC6qwdM56w5wAbz+eiPXhJghTAFV0xz63x4EizUoRw==", "6f29a55b-67e0-47b6-8b1e-6ec166597265" });

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8007));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8014));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8016));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8018));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8019));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8022));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8024));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8025));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8026));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 10,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8028));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 11,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8030));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 12,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8032));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 13,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8076));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 14,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8078));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 15,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8079));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 16,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8080));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 17,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8082));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 18,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8084));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 19,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8085));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 20,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8087));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 21,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8089));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 22,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8090));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 23,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8092));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 24,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8093));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 25,
                column: "CreatedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 611, DateTimeKind.Utc).AddTicks(8095));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 1, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(233));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 2, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(238));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 3, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(242));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 4, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(981));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 5, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(994));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 6, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(996));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 7, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(998));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 8, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(999));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 9, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1000));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 10, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1001));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 11, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1002));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 12, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1004));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 13, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1005));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 14, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1006));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 15, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1008));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 16, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1009));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 17, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1010));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 18, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1012));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 19, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1013));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 20, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1013));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 21, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1014));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 22, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1015));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 23, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1016));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 24, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1016));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 25, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(1017));

            migrationBuilder.UpdateData(
                table: "UserRole",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "1", "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 11, 19, 19, 15, 31, 679, DateTimeKind.Utc).AddTicks(73));
        }
    }
}
