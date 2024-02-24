USE [master]

IF db_id('Jewel') IS NULL
  CREATE DATABASE [Jewel]
GO

USE [Jewel]
GO

DROP TABLE IF EXISTS [Painting];
DROP TABLE IF EXISTS [PaintingCategory];
DROP TABLE IF EXISTS [Category];
DROP TABLE IF EXISTS [Order];
DROP TABLE IF EXISTS [OrderDetails];
DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [UserType];
GO

CREATE TABLE [UserType] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(20) NOT NULL
)

CREATE TABLE [UserProfile] (
  [Id] integer PRIMARY KEY IDENTITY,
  [UserName] nvarchar(50) NOT NULL,
  [FullName] nvarchar(50) NOT NULL,
  [Email] nvarchar(255) NOT NULL,
  [ShippingAddress] nvarchar(255),
  [UserTypeId] integer NOT NULL,
  
  CONSTRAINT [FK_UserProfile_UserType] FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id])
)

CREATE TABLE [Category] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(50) NOT NULL
)

CREATE TABLE [Painting] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Title] nvarchar(255) NOT NULL,
  [Description] text NOT NULL,
  [Price] decimal NOT NULL,
  [ImageLocation] nvarchar(255),
  [Dimensions] nvarchar(255) NOT NULL,
  [IsSold] bit NOT NULL,
  [CategoryId] integer NOT NULL,
  
  CONSTRAINT [FK_Painting_Category] FOREIGN KEY ([CategoryId]) REFERENCES [Category] ([Id])
)

CREATE TABLE [PaintingCategory] (
  [id] integer PRIMARY KEY IDENTITY,
  [PaintingId] integer NOT NULL,
  [CategoryId] integer NOT NULL,

  CONSTRAINT [FK_PaintingCategory_Painting] FOREIGN KEY ([PaintingId]) REFERENCES [Painting] ([Id]),
  CONSTRAINT [FK_PaintingCategory_Category] FOREIGN KEY ([CategoryId]) REFERENCES [Category] ([Id])
)

CREATE TABLE [Order] (
  [Id] integer PRIMARY KEY IDENTITY,
  [UserProfileId] integer NOT NULL,
  [OrderDate] datetime NOT NULL,
  [TotalAmount] decimal NOT NULL,

  CONSTRAINT [FK_Order_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
)

CREATE TABLE [OrderDetails] (
  [Id] integer PRIMARY KEY IDENTITY,
  [OrderId] integer NOT NULL,
  [PaintingId] integer NOT NULL,
  [Quantity] integer NOT NULL,

  CONSTRAINT [FK_OrderDetails_Order] FOREIGN KEY ([OrderId]) REFERENCES [Order] ([Id]),
  CONSTRAINT [FK_OrderDetails_Painting] FOREIGN KEY ([PaintingId]) REFERENCES [Painting] ([Id])
)
GO
