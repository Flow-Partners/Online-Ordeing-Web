using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DotNet_Starter_Template.Migrations
{
    /// <inheritdoc />
    public partial class AddUserIdToCustomers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Customers",
                type: "nvarchar(450)",
                maxLength: 450,
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1",
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8283));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2",
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8378));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3",
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8383));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4",
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8387));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5",
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8390));

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "CreatedAt", "PasswordHash", "SecurityStamp" },
                values: new object[] { "81f7395c-3d8f-44cf-9582-e96a1bba0f0a", new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8620), "AQAAAAIAAYagAAAAEBPLmKungjIisphJlU7bGd7wIDs9VVgJFBMfqKfVjaoOKGDDVGxRxRlPCydv42xQ1Q==", "785d7d57-737e-4ba9-b34b-f713ed123af2" });

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8086));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8099));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8102));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8104));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8105));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8108));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8110));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8111));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8113));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 10,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8117));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 11,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8119));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 12,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8121));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 13,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8122));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 14,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8124));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 15,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8125));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 16,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8126));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 17,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8128));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 18,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8131));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 19,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8132));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 20,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8133));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 21,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8135));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 22,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8136));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 23,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8138));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 24,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8139));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 25,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 312, DateTimeKind.Utc).AddTicks(8140));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 1, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5120));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 2, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5126));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 3, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5127));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 4, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5128));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 5, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5129));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 6, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5129));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 7, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5130));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 8, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5131));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 9, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5131));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 10, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5132));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 11, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5132));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 12, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5133));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 13, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5134));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 14, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5134));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 15, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5135));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 16, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5136));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 17, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5137));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 18, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5137));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 19, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5138));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 20, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5140));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 21, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5141));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 22, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5142));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 23, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5143));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 24, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5144));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 25, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(5145));

            migrationBuilder.UpdateData(
                table: "UserRole",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "1", "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 23, 10, 13, 382, DateTimeKind.Utc).AddTicks(4977));

            migrationBuilder.CreateIndex(
                name: "IX_Customers_UserId",
                table: "Customers",
                column: "UserId",
                filter: "[UserId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_AspNetUsers_UserId",
                table: "Customers",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_AspNetUsers_UserId",
                table: "Customers");

            migrationBuilder.DropIndex(
                name: "IX_Customers_UserId",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Customers");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1",
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9172));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2",
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9250));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3",
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9265));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4",
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9268));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5",
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9299));

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "CreatedAt", "PasswordHash", "SecurityStamp" },
                values: new object[] { "1cbf4105-5880-4ed2-822c-53f6a980c0ef", new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9403), "AQAAAAIAAYagAAAAEJJXAFjjys0VqO0ZEd0wI/rkfafkOHDo7SoAYwbGavg5uNwaFGe7oT1AUvzf3rk/Pw==", "f88e8577-af86-44ac-b953-74cdbbf9c9b8" });

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9033));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9040));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9042));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9043));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9044));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9047));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9048));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9051));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9052));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 10,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9054));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 11,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9056));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 12,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9057));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 13,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9058));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 14,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9060));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 15,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9061));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 16,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9062));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 17,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9064));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 18,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9066));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 19,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9067));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 20,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9068));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 21,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9069));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 22,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9071));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 23,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9072));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 24,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9073));

            migrationBuilder.UpdateData(
                table: "Permissions",
                keyColumn: "Id",
                keyValue: 25,
                column: "CreatedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 609, DateTimeKind.Utc).AddTicks(9074));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 1, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(63));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 2, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(71));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 3, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(73));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 4, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(75));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 5, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(77));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 6, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(78));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 7, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(79));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 8, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(79));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 9, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(82));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 10, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(83));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 11, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(84));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 12, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(85));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 13, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(86));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 14, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(88));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 15, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(89));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 16, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(90));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 17, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(91));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 18, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(93));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 19, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(93));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 20, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(95));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 21, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(95));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 22, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(97));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 23, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(98));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 24, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(99));

            migrationBuilder.UpdateData(
                table: "RolePermissions",
                keyColumns: new[] { "PermissionId", "RoleId" },
                keyValues: new object[] { 25, "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 710, DateTimeKind.Utc).AddTicks(100));

            migrationBuilder.UpdateData(
                table: "UserRole",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "1", "1" },
                column: "AssignedAt",
                value: new DateTime(2025, 12, 2, 21, 31, 36, 709, DateTimeKind.Utc).AddTicks(9886));
        }
    }
}
