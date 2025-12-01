using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DotNet_Starter_Template.Models.Entities;

namespace DotNet_Starter_Template.Data.Configurations
{
    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            // Table name
            builder.ToTable("Orders");

            // Primary Key
            builder.HasKey(e => e.Id);

            // Properties configuration
            builder.Property(e => e.TicketId)
                .IsRequired();

            builder.Property(e => e.WarehouseId)
                .IsRequired();

            builder.Property(e => e.DepartmentId)
                .IsRequired();

            builder.Property(e => e.MenuItemId)
                .IsRequired();

            builder.Property(e => e.MenuItemName)
                .HasMaxLength(200);

            builder.Property(e => e.PortionName)
                .HasMaxLength(100);

            builder.Property(e => e.Price)
                .IsRequired()
                .HasColumnType("decimal(16,2)");

            builder.Property(e => e.Quantity)
                .IsRequired()
                .HasColumnType("decimal(16,3)");

            builder.Property(e => e.PortionCount)
                .IsRequired();

            builder.Property(e => e.Locked)
                .IsRequired()
                .HasDefaultValue(false);

            builder.Property(e => e.CalculatePrice)
                .IsRequired()
                .HasDefaultValue(true);

            builder.Property(e => e.DecreaseInventory)
                .IsRequired()
                .HasDefaultValue(false);

            builder.Property(e => e.IncreaseInventory)
                .IsRequired()
                .HasDefaultValue(false);

            builder.Property(e => e.OrderNumber)
                .IsRequired();

            builder.Property(e => e.CreatingUserName)
                .HasMaxLength(100);

            builder.Property(e => e.CreatedDateTime)
                .IsRequired()
                .HasColumnType("datetime2")
                .HasDefaultValueSql("GETDATE()");

            builder.Property(e => e.AccountTransactionTypeId)
                .IsRequired();

            builder.Property(e => e.PriceTag)
                .HasMaxLength(100);

            builder.Property(e => e.Tag)
                .HasMaxLength(100);

            // Indexes
            builder.HasIndex(e => e.TicketId)
                .HasDatabaseName("IX_Orders_TicketId");

            builder.HasIndex(e => e.MenuItemId)
                .HasDatabaseName("IX_Orders_MenuItemId");

            builder.HasIndex(e => e.PortionId)
                .HasDatabaseName("IX_Orders_PortionId")
                .HasFilter("[PortionId] IS NOT NULL");

            builder.HasIndex(e => e.PortionDetailId)
                .HasDatabaseName("IX_Orders_PortionDetailId")
                .HasFilter("[PortionDetailId] IS NOT NULL");

            builder.HasIndex(e => e.CreatedDateTime)
                .HasDatabaseName("IX_Orders_CreatedDateTime");

            // Relationships
            builder.HasOne(e => e.Ticket)
                .WithMany(t => t.Orders)
                .HasForeignKey(e => e.TicketId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(e => e.MenuItem)
                .WithMany()
                .HasForeignKey(e => e.MenuItemId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(e => e.Portion)
                .WithMany()
                .HasForeignKey(e => e.PortionId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(e => e.PortionDetail)
                .WithMany()
                .HasForeignKey(e => e.PortionDetailId)
                .OnDelete(DeleteBehavior.NoAction); // Changed to NoAction to avoid multiple cascade paths (PortionDetail is deleted when Portion is deleted via cascade)
        }
    }
}

