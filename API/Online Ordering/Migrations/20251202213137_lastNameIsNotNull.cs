using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DotNet_Starter_Template.Migrations
{
    /// <inheritdoc />
    public partial class lastNameIsNotNull : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "LastName",
                table: "Customers",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldMaxLength: 50);

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "LastName",
                table: "Customers",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldMaxLength: 50,
                oldNullable: true);

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
    }
}
