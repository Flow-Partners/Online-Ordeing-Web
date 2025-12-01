using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DotNet_Starter_Template.Models.Entities;

namespace DotNet_Starter_Template.Data.Configurations
{
    public class CustomerAddressConfiguration : IEntityTypeConfiguration<CustomerAddress>
    {
        public void Configure(EntityTypeBuilder<CustomerAddress> builder)
        {
            // Table name
            builder.ToTable("CustomerAddresses");

            // Primary Key
            builder.HasKey(e => e.Id);

            // Properties configuration
            builder.Property(e => e.CustomerId)
                .IsRequired();

            builder.Property(e => e.AddressType)
                .IsRequired()
                .HasMaxLength(20)
                .HasDefaultValue("Home");

            builder.Property(e => e.IsDefault)
                .IsRequired()
                .HasDefaultValue(false);

            builder.Property(e => e.IsActive)
                .IsRequired()
                .HasDefaultValue(true);

            builder.Property(e => e.Label)
                .HasMaxLength(50);

            builder.Property(e => e.ContactName)
                .HasMaxLength(100);

            builder.Property(e => e.ContactPhone)
                .HasMaxLength(20);

            builder.Property(e => e.AddressLine1)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(e => e.AddressLine2)
                .HasMaxLength(200);

            builder.Property(e => e.BuildingNumber)
                .HasMaxLength(50);

            builder.Property(e => e.Floor)
                .HasMaxLength(20);

            builder.Property(e => e.Apartment)
                .HasMaxLength(20);

            builder.Property(e => e.Landmark)
                .HasMaxLength(200);

            builder.Property(e => e.City)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.State)
                .HasMaxLength(50);

            builder.Property(e => e.Country)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.PostalCode)
                .HasMaxLength(20);

            builder.Property(e => e.Latitude)
                .HasColumnType("decimal(18,10)");

            builder.Property(e => e.Longitude)
                .HasColumnType("decimal(18,10)");

            builder.Property(e => e.CreatedAt)
                .IsRequired()
                .HasColumnType("datetime2")
                .HasDefaultValueSql("GETDATE()");

            builder.Property(e => e.UpdatedAt)
                .IsRequired()
                .HasColumnType("datetime2")
                .HasDefaultValueSql("GETDATE()");

            // Indexes
            builder.HasIndex(e => e.CustomerId)
                .HasDatabaseName("IX_CustomerAddresses_CustomerId");

            builder.HasIndex(e => e.IsActive)
                .HasDatabaseName("IX_CustomerAddresses_IsActive");

            builder.HasIndex(e => e.City)
                .HasDatabaseName("IX_CustomerAddresses_City");

            // Unique constraint: Only one default address per customer
            builder.HasIndex(e => new { e.CustomerId, e.IsDefault })
                .IsUnique()
                .HasDatabaseName("UQ_CustomerAddresses_DefaultPerCustomer")
                .HasFilter("[IsDefault] = 1");

            // Relationships
            builder.HasOne(e => e.Customer)
                .WithMany(c => c.CustomerAddresses)
                .HasForeignKey(e => e.CustomerId)
                .OnDelete(DeleteBehavior.Restrict); // Changed from Cascade to Restrict to avoid multiple cascade paths

            builder.HasMany(e => e.Tickets)
                .WithOne(t => t.CustomerAddress)
                .HasForeignKey(t => t.CustomerAddressId)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}

