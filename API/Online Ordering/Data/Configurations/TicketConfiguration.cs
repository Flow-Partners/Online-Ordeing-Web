using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DotNet_Starter_Template.Models.Entities;

namespace DotNet_Starter_Template.Data.Configurations
{
    public class TicketConfiguration : IEntityTypeConfiguration<Ticket>
    {
        public void Configure(EntityTypeBuilder<Ticket> builder)
        {
            // Table name
            builder.ToTable("Tickets");

            // Primary Key
            builder.HasKey(e => e.Id);

            // Properties configuration
            builder.Property(e => e.LastUpdateTime)
                .IsRequired()
                .HasColumnType("datetime2")
                .HasDefaultValueSql("GETDATE()");

            builder.Property(e => e.TicketNumber)
                .HasMaxLength(50);

            builder.Property(e => e.Date)
                .IsRequired()
                .HasColumnType("datetime2")
                .HasDefaultValueSql("GETDATE()");

            builder.Property(e => e.LastOrderDate)
                .IsRequired()
                .HasColumnType("datetime2")
                .HasDefaultValueSql("GETDATE()");

            builder.Property(e => e.LastPaymentDate)
                .IsRequired()
                .HasColumnType("datetime2")
                .HasDefaultValueSql("GETDATE()");

            builder.Property(e => e.IsClosed)
                .IsRequired()
                .HasDefaultValue(false);

            builder.Property(e => e.IsLocked)
                .IsRequired()
                .HasDefaultValue(false);

            builder.Property(e => e.RemainingAmount)
                .IsRequired()
                .HasColumnType("decimal(16,2)")
                .HasDefaultValue(0);

            builder.Property(e => e.TotalAmount)
                .IsRequired()
                .HasColumnType("decimal(16,2)")
                .HasDefaultValue(0);

            builder.Property(e => e.DepartmentId)
                .IsRequired();

            builder.Property(e => e.TicketTypeId)
                .IsRequired();

            builder.Property(e => e.LastModifiedUserName)
                .HasMaxLength(100);

            builder.Property(e => e.ExchangeRate)
                .IsRequired()
                .HasColumnType("decimal(18,2)")
                .HasDefaultValue(1);

            builder.Property(e => e.TaxIncluded)
                .IsRequired()
                .HasDefaultValue(false);

            builder.Property(e => e.Name)
                .HasMaxLength(200);

            // Indexes
            builder.HasIndex(e => e.CustomerId)
                .HasDatabaseName("IX_Tickets_CustomerId")
                .HasFilter("[CustomerId] IS NOT NULL");

            builder.HasIndex(e => e.CustomerAddressId)
                .HasDatabaseName("IX_Tickets_CustomerAddressId")
                .HasFilter("[CustomerAddressId] IS NOT NULL");

            builder.HasIndex(e => e.TicketNumber)
                .HasDatabaseName("IX_Tickets_TicketNumber")
                .HasFilter("[TicketNumber] IS NOT NULL");

            builder.HasIndex(e => e.Date)
                .HasDatabaseName("IX_Tickets_Date");

            builder.HasIndex(e => e.IsClosed)
                .HasDatabaseName("IX_Tickets_IsClosed");

            builder.HasIndex(e => e.DepartmentId)
                .HasDatabaseName("IX_Tickets_DepartmentId");

            // Relationships
            builder.HasOne(e => e.Customer)
                .WithMany(c => c.Tickets)
                .HasForeignKey(e => e.CustomerId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(e => e.CustomerAddress)
                .WithMany(ca => ca.Tickets)
                .HasForeignKey(e => e.CustomerAddressId)
                .OnDelete(DeleteBehavior.SetNull); // Changed back to SetNull since CustomerAddresses -> Customers is now Restrict

            builder.HasMany(e => e.Orders)
                .WithOne(o => o.Ticket)
                .HasForeignKey(o => o.TicketId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}

