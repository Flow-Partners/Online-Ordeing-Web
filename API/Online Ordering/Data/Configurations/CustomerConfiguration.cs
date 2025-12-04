using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DotNet_Starter_Template.Models.Entities;

namespace DotNet_Starter_Template.Data.Configurations
{
    public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            // Table name
            builder.ToTable("Customers");

            // Primary Key
            builder.HasKey(e => e.Id);

            // Properties configuration
            builder.Property(e => e.FirstName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.LastName)
                .HasMaxLength(50);

            builder.Property(e => e.Email)
                .HasMaxLength(100);

            builder.Property(e => e.Phone)
                .IsRequired()
                .HasMaxLength(20);

            builder.Property(e => e.Mobile)
                .HasMaxLength(20);

            builder.Property(e => e.AlternatePhone)
                .HasMaxLength(20);

            builder.Property(e => e.IsActive)
                .IsRequired()
                .HasDefaultValue(true);

            builder.Property(e => e.IsVerified)
                .IsRequired()
                .HasDefaultValue(false);

            builder.Property(e => e.IsBlocked)
                .IsRequired()
                .HasDefaultValue(false);

            builder.Property(e => e.DateOfBirth)
                .HasColumnType("date");

            builder.Property(e => e.Gender)
                .HasMaxLength(10);

            builder.Property(e => e.LoyaltyPoints)
                .IsRequired()
                .HasDefaultValue(0);

            builder.Property(e => e.TotalOrders)
                .IsRequired()
                .HasDefaultValue(0);

            builder.Property(e => e.TotalSpent)
                .IsRequired()
                .HasColumnType("decimal(18,2)")
                .HasDefaultValue(0);

            builder.Property(e => e.PreferredLanguage)
                .HasMaxLength(10)
                .HasDefaultValue("en");

            builder.Property(e => e.PreferredCurrency)
                .HasMaxLength(10);

            builder.Property(e => e.NotificationEnabled)
                .IsRequired()
                .HasDefaultValue(true);

            builder.Property(e => e.PromotionalEmails)
                .IsRequired()
                .HasDefaultValue(true);

            builder.Property(e => e.DefaultPaymentMethod)
                .HasMaxLength(50);

            builder.Property(e => e.ExternalCustomerId)
                .HasMaxLength(100);

            builder.Property(e => e.CreatedAt)
                .IsRequired()
                .HasColumnType("datetime2")
                .HasDefaultValueSql("GETDATE()");

            builder.Property(e => e.UpdatedAt)
                .IsRequired()
                .HasColumnType("datetime2")
                .HasDefaultValueSql("GETDATE()");

            builder.Property(e => e.UserId)
                .HasMaxLength(450);

            // Indexes
            builder.HasIndex(e => e.Email)
                .HasDatabaseName("IX_Customers_Email")
                .HasFilter("[Email] IS NOT NULL");

            builder.HasIndex(e => e.Phone)
                .HasDatabaseName("IX_Customers_Phone");

            builder.HasIndex(e => e.IsActive)
                .HasDatabaseName("IX_Customers_IsActive");

            builder.HasIndex(e => e.CreatedAt)
                .HasDatabaseName("IX_Customers_CreatedAt");

            // Relationships
            builder.HasMany(e => e.CustomerAddresses)
                .WithOne(ca => ca.Customer)
                .HasForeignKey(ca => ca.CustomerId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(e => e.CustomerPreference)
                .WithOne(cp => cp.Customer)
                .HasForeignKey<CustomerPreference>(cp => cp.CustomerId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(e => e.Tickets)
                .WithOne(t => t.Customer)
                .HasForeignKey(t => t.CustomerId)
                .OnDelete(DeleteBehavior.SetNull);

            // Relationship to User (ASP.NET Identity)
            builder.HasOne(e => e.User)
                .WithMany()
                .HasForeignKey(e => e.UserId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasIndex(e => e.UserId)
                .HasDatabaseName("IX_Customers_UserId")
                .HasFilter("[UserId] IS NOT NULL");
        }
    }
}

