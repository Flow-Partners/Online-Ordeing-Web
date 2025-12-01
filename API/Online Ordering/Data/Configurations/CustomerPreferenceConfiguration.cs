using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DotNet_Starter_Template.Models.Entities;

namespace DotNet_Starter_Template.Data.Configurations
{
    public class CustomerPreferenceConfiguration : IEntityTypeConfiguration<CustomerPreference>
    {
        public void Configure(EntityTypeBuilder<CustomerPreference> builder)
        {
            // Table name
            builder.ToTable("CustomerPreferences");

            // Primary Key
            builder.HasKey(e => e.Id);

            // Properties configuration
            builder.Property(e => e.CustomerId)
                .IsRequired();

            builder.Property(e => e.SpiceLevel)
                .HasMaxLength(20);

            builder.Property(e => e.PreferredOrderTime)
                .HasColumnType("time");

            builder.Property(e => e.AutoReorder)
                .IsRequired()
                .HasDefaultValue(false);

            builder.Property(e => e.CreatedAt)
                .IsRequired()
                .HasColumnType("datetime2")
                .HasDefaultValueSql("GETDATE()");

            builder.Property(e => e.UpdatedAt)
                .IsRequired()
                .HasColumnType("datetime2")
                .HasDefaultValueSql("GETDATE()");

            // Unique constraint: One preference record per customer
            builder.HasIndex(e => e.CustomerId)
                .IsUnique()
                .HasDatabaseName("UQ_CustomerPreferences_CustomerId");

            // Index
            builder.HasIndex(e => e.CustomerId)
                .HasDatabaseName("IX_CustomerPreferences_CustomerId");

            // Relationships
            builder.HasOne(e => e.Customer)
                .WithOne(c => c.CustomerPreference)
                .HasForeignKey<CustomerPreference>(e => e.CustomerId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}

