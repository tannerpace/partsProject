DROP SCHEMA if exists parts;
CREATE SCHEMA `parts`;

CREATE TABLE `parts`.`users` (
  id int NOT NULL unique AUTO_INCREMENT,
  firstName varchar(30) NOT NULL,
  lastName varchar(30) NOT NULL,
  password varchar(100) NOT NULL,
  email varchar(230) unique NOT NULL,
  admin boolean default 0,
  primary key(id)
);

CREATE TABLE `parts`.`catalog` (
    partNumber varchar(16) NOT NULL,
    PrimaryVendor varchar(16) NOT NULL,
    color varchar(30) NOT NULL,
    partName varchar(100) NOT NULL,
    price  decimal NOT NULL,
    primary key(partNumber)
);

CREATE TABLE `parts`.`cartItems` (
    id int NOT NULL AUTO_INCREMENT ,
    userId int NOT NULL,
    partNumber varchar(16) NOT NULL,
    quantity int,
    primary key(id),
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (partNumber) REFERENCES catalog(partNumber)
      );

CREATE TABLE `parts`.`pastOrders` (
    id int NOT NULL unique AUTO_INCREMENT,
    userId int NOT NULL,
    totalPrice decimal NOT NULL,
    datePlaced Datetime not null DEFAULT (current_date()),
     primary key (id),
    FOREIGN KEY (userId) REFERENCES users(id)
);
CREATE TABLE `parts`.`orderedItems` (
    id int NOT NULL AUTO_INCREMENT,
    partNumber varchar(16) DEFAULT NULL,
    quantity int DEFAULT NULL,
    transactionId int DEFAULT NULL ,
    primary key(id),
    FOREIGN KEY (partNumber) REFERENCES catalog(partNumber),
    FOREIGN KEY (transactionId) REFERENCES pastOrders(id)
);


INSERT INTO parts.users (firstName, lastName, password, email)
VALUES ('Cardinal1','Tom1','123', 'tom1@gmail.com'),('Cardinal2','Tom2','pass123', 'tom2@gmail.com'),
('Cardinal3','Tom3','pword123', 'tom3@gmail.com');

INSERT INTO parts.catalog (partNumber,PrimaryVendor,color, partName,price)
VALUES ('M1MN0111309','Baja Designs','silver','Bumper','9.00'),
('BD1B308','Baja Designs','red','Flame Hood','19.00'),
('BD1B307','Baja Designs','black','Bumper','29.00'),
('BD6','Baja Designs','blue','fuzzyDice','2.00'),
('BD1B305','Baja Designs','green','Bumper','39.00'),
('BD1B304','Baja Designs','pink','Bumper','29.00'),

('AMN0111304','Auto Meter','pink','Bumper','29.00'),
('AM1B308','Auto Meter','red','Bumper','19.00'),
('AM1B307','Auto Meter','black','Bumper','29.00'),
('AM1B306','Auto Meter','blue','Bumper','29.00'),

  ('FlAM105','Auto Meter','red','Flame Hood','29.00'),
  ('FlAM104','Auto Meter','blue','Flame Hood','39.00'),

  ('FlBD108','Baja Designs','red','Bumper','19.00'),
  ('FlBD107','Baja Designs','blue','Flame Hood','29.00'),
  ('FlBD106','Baja Designs','pink','Flame Hood','29.00'),
  ('FlBD105','Baja Designs','orange','Flame Hood','29.00'),
  ('FlBD104','Baja Designs','green','Flame Hood','29.00'),

('EN1','Injen','black','TinySpinRim','3.00'),
('EN2','Injen','black','SmallSpinRim','9.00'),
('EN3','Injen','orange','MedSpinRim','29.00'),
('EN4','Injen','black','LargeSpinRim','129.00'),
('EN5','Injen','silver','ExtraLargeSpinRim','229.00'),

('ink1','Enkie','green','TinySpinRim','13.00'),
('ink2','Enkie','black','SmallSpinRim','29.00'),
('ink3','Enkie','blue','MedSpinRim','129.00'),
('ink4','Enkie','black','LargeSpinRim','229.00'),
('ink5','Enkie','silver','ExtraLargeSpinRim','329.00'),

('GR1','GamblerRambler','silver','fuzzyDice','3.00'),
('OSW1','OldSchool','white','fuzzyDice','13.00'),
('OSB1','OldSchool','blue','fuzzyDice','13.00'),
('OSG1','OldSchool','green','fuzzyDice','13.00'),
('OSR1','OldSchool','red','fuzzyDice','13.00');

