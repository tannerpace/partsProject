DROP SCHEMA if exists parts;

CREATE SCHEMA `parts`;

CREATE TABLE `parts`.`users` (
id int NOT NULL unique AUTO_INCREMENT ,
 firstName varchar(33) NOT NULL,
  lastName varchar(33) NOT NULL,
  email varchar(230) unique NOT NULL,

  admin boolean default 0,
  primary key(id)
);

CREATE TABLE `parts`.`catalog` (
    partNumber varchar(33) NOT NULL,
    color varchar(100) NOT NULL,
    partName varchar(100) NOT NULL,
    price  decimal NOT NULL,
  primary key(partNumber)
);

CREATE TABLE `parts`.`cartItems` (
    id int NOT NULL AUTO_INCREMENT ,
    userid int NOT NULL,
    partNumber varchar(33) NOT NULL,
   quantity int,
    primary key(id),
    FOREIGN KEY (userid) REFERENCES users(id),
    FOREIGN KEY (partNumber) REFERENCES catalog(partNumber)
      );

CREATE TABLE `parts`.`orderItems` (
    id int NOT NULL  ,
    partNumber varchar(33),
    quantity int NOT NULL,
    transactionID int NOT NULL AUTO_INCREMENT ,
    primary key(transactionID),
    FOREIGN KEY (partNumber) REFERENCES catalog(partNumber)
);

CREATE TABLE `parts`.`pastOrders` (
    id int NOT NULL,
    userid int NOT NULL,
     totalPrice decimal NOT NULL,
       datePlaced Datetime not null DEFAULT (current_date()),
     
   

     primary key (id),
         FOREIGN KEY (userid) REFERENCES users(id)
);