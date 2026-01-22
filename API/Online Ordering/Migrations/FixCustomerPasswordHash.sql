-- Migration: Remove PasswordHash and Add UserId to Customers table
-- Run this SQL script directly on your database

-- Step 1: Remove PasswordHash column if it exists
IF EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'[dbo].[Customers]') AND name = 'PasswordHash')
BEGIN
    ALTER TABLE [dbo].[Customers]
    DROP COLUMN [PasswordHash];
    
    PRINT 'PasswordHash column removed from Customers table';
END
ELSE
BEGIN
    PRINT 'PasswordHash column does not exist in Customers table';
END
GO

-- Step 2: Add UserId column if it doesn't exist
IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'[dbo].[Customers]') AND name = 'UserId')
BEGIN
    ALTER TABLE [dbo].[Customers]
    ADD [UserId] nvarchar(450) NULL;
    
    PRINT 'UserId column added to Customers table';
    
    -- Create index on UserId
    CREATE NONCLUSTERED INDEX [IX_Customers_UserId]
    ON [dbo].[Customers] ([UserId])
    WHERE [UserId] IS NOT NULL;
    
    PRINT 'Index IX_Customers_UserId created';
END
ELSE
BEGIN
    PRINT 'UserId column already exists in Customers table';
END
GO

-- Step 3: Add foreign key constraint to AspNetUsers.Id if it doesn't exist
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE name = 'FK_Customers_AspNetUsers_UserId')
BEGIN
    -- Verify AspNetUsers table exists and has Id column
    IF EXISTS (SELECT * FROM sys.tables WHERE name = 'AspNetUsers')
        AND EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'[dbo].[AspNetUsers]') AND name = 'Id')
    BEGIN
        ALTER TABLE [dbo].[Customers]
        ADD CONSTRAINT [FK_Customers_AspNetUsers_UserId]
        FOREIGN KEY ([UserId]) REFERENCES [dbo].[AspNetUsers] ([Id])
        ON DELETE NO ACTION;
        
        PRINT 'Foreign key FK_Customers_AspNetUsers_UserId created (references AspNetUsers.Id)';
    END
    ELSE
    BEGIN
        PRINT 'Warning: AspNetUsers table or Id column not found. Foreign key not created.';
    END
END
ELSE
BEGIN
    PRINT 'Foreign key FK_Customers_AspNetUsers_UserId already exists';
END
GO

PRINT 'Migration completed successfully!';
GO

