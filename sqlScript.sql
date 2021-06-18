DROP SCHEMA if exists parts;
CREATE SCHEMA `parts`;

CREATE TABLE `parts`.`users` (
  id int NOT NULL unique AUTO_INCREMENT,
  firstName varchar(30) NOT NULL,
  lastName varchar(30) NOT NULL,
  email varchar(230) unique NOT NULL,

  admin boolean default 0,
  primary key(id)
);

CREATE TABLE `parts`.`catalog` (
    partNumber varchar(16) NOT NULL,
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

CREATE TABLE `parts`.`orderedItems` (
    id int NOT NULL  ,
    partNumber varchar(16),
    quantity int NOT NULL,
    transactionId int NOT NULL AUTO_INCREMENT ,
    primary key(id),
    FOREIGN KEY (partNumber) REFERENCES catalog(partNumber),
    FOREIGN KEY (transactionId) REFERENCES pastOrders(id)
);

CREATE TABLE `parts`.`pastOrders` (
    id int NOT NULL,
    userId int NOT NULL,
    totalPrice decimal NOT NULL,
    datePlaced Datetime not null DEFAULT (current_date()),
     
    primary key (id),
    FOREIGN KEY (userId) REFERENCES users(id)
);








