USE [Jewel];
GO


SET IDENTITY_INSERT UserType ON;
INSERT INTO UserType (Id, Name) VALUES (1, 'Admin'), (2, 'Buyer');
SET IDENTITY_INSERT UserType OFF;


SET IDENTITY_INSERT UserProfile ON;
INSERT INTO UserProfile (Id, UserName, Email, FullName, ShippingAddress, UserTypeId) VALUES 
(1, 'ArtLover123', 'boo@bar.com', 'Boo Alcalde', NULL, 2),
(2, 'Owner777', 'email@example.com', 'Jeweletta Eddy', NULL, 1);
SET IDENTITY_INSERT UserProfile OFF;


SET IDENTITY_INSERT Painting ON;
INSERT INTO Painting (Id, Title, [Description], Price, ImageLocation, Dimensions, IsSold, CategoryId) VALUES 
(1, 'Snail', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 50.00, 'http://lorempixel.com/920/360/', '8 inches � 10 inches', 0, 1);
SET IDENTITY_INSERT Painting OFF;


SET IDENTITY_INSERT Category ON;
INSERT INTO Category (Id, [Name]) VALUES (1, 'Painting'), (2, 'Sculpture');
SET IDENTITY_INSERT Category OFF;


SET IDENTITY_INSERT PaintingCategory ON;
INSERT INTO PaintingCategory (Id, PaintingId, CategoryId) VALUES (1, 1, 1);
SET IDENTITY_INSERT PaintingCategory OFF;


SET IDENTITY_INSERT [Order] ON;
INSERT INTO [Order] (Id, UserProfileId, OrderDate, TotalAmount) VALUES (1, 2, '2019-10-21', 50.00);
SET IDENTITY_INSERT [Order] OFF;


SET IDENTITY_INSERT OrderDetail ON;
INSERT INTO OrderDetail (Id, OrderId, PaintingId, Quantity) VALUES (1, 1, 1, 1);
SET IDENTITY_INSERT OrderDetail OFF;

