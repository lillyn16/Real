CREATE TABLE [dbo].[Users]
(
  username NVARCHAR NOT NULL PRIMARY KEY,
  password NVARCHAR NOT NULL,
  securityQuestion NVARCHAR NOT NULL,
  securityAnswer NVARCHAR NOT NULL
)
