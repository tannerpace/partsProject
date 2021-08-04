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
    Category varchar(30),
    img varchar(200),
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

INSERT INTO parts.catalog (partNumber,PrimaryVendor,color, partName,price,Category,img )
VALUES ('M1MN0111309','Baja Designs','silver','Crank','9.00','Engine','https://www.treatland.tv/puch-moped-race-crankshaft-stuffed-p/puch-crankshaft-super-stuffy.htm'),
('BDCB308','Baja Designs','red','Seat','119.00','Exterior','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/mbk-51-single-seat-RED-1.jpg?v-cache=1627058444'),
('BD1B307','Baja Designs','blue','Seat','129.00','Exterior','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/mbk-51-single-seat-BLUE-1.jpg'),
('BD6','Baja Designs','orange','Shock','2.00','Suspension','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/320-340-gas-shoxx-GOLD-l2s-1.jpg?v-cache=1626946604'),
('BDWB305','Baja Designs','silver','Wheel','39.00','Wheel','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/16-razze-parallele-front-white-1.jpg'),
('BDWB304','Baja Designs','orange','Wheel','29.00','Wheel','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/pirelli-871-5235-1.jpg?v-cache=1614353875'),

('AMs29','Auto Meter','pink','Shock','29.00','Suspension','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/300-neon-pink-shocks-puch300NP-1.jpg?v-cache=1469032487'),
('AMs19','Auto Meter','lime','Shock','19.00','Suspension','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/340-neon-yel-shocks-puch340NY-1.jpg?v-cache=1469031167'),
('AMsG29','Auto Meter','green','Shock','29.00','Suspension','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/300-neon-grn-shocks-puch300NG-1.jpg?v-cache=1469031981'),
('AMsB299','Auto Meter','blue','Shock','229.00','Suspension','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/320-seafoam-shocks-puch320NTB-1.jpg?v-cache=1532016997'),

  ('FlAM105','Auto Meter','orange','Shock','29.00','Suspension','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/310mm-orange-shocks-puch310VJ-1.jpg?v-cache=1544546673'),
  ('FlAM104','Auto Meter','yellow','Shock','39.00','Suspension','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/300mm-shocks-puch297-YELLOW-1.jpg?v-cache=1580818931'),

  ('FlBD108','Baja Designs','silver','Head','19.00','Engine','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/CUSTOM-HEAD-052-1.jpg?v-cache=1544092606'),
  ('FlBD107','Baja Designs','blue','Shock','29.00','Suspension','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/oem-52400-148-000bc-1.jpg'),
  ('FlBD106','Baja Designs','red','Shock','29.00','Suspension','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/tomos-shock-223680-or-230489-1.jpg?v-cache=1470924475'),
  ('FlBD105','Baja Designs','orange','Swing Arm','29.00','Suspension','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/tomos-arrow-swingarm-242158cop-1.jpg?v-cache=1495625403'),
  ('FlBD104','Baja Designs','silver','Swing Arm','29.00','Suspension','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/tomos-mc80-swingarm-242211-1.jpg'),

('EN1','Injen','blue','Dino Egg','3.00','Exterior','https://treatlandgraveyard.files.wordpress.com/2010/08/seat-dino-1.jpg'),
('EN2','Injen','orange','Sweet Seat','9.00','Exterior','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/puch-stock-seat-puffy-CARAMEL-1.jpg'),
('EN3','Injen','black','Tux Seat','29.00','Exterior','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/puch-stck-seat-BLK-top-white-1.jpg'),
('EN4','Injen','blue','Pedals','129.00','Exterior','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/odyssey-twisted-P-109-BRD-1.jpg?v-cache=1620838561'),
('EN5','Injen','orange','Pedals','229.00','Exterior','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/odyssey-twisted-P-109-BRD-1.jpg?v-cache=1620838561'),

('ink1','Enkie','yellow','Shock','13.00','Suspension','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/IMCA-280-fake-shocks-1.jpg'),
('ink2','Enkie','black','Shock','29.00','Suspension','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/330mm-black-shocks-1.png?v-cache=1531142451'),
('ink3','Enkie','silver','CDI rotor','79.00','Engine','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/HPI-210r098-1.jpg?v-cache=1620224048'),
('ink4','Enkie','black','Pipe','229.00','Engine','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/motion-left-tomos-401235-1.jpg'),
('ink5','Enkie','black','XXL Tires','329.00','Wheel','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/MT-592158-1.jpg'),

('GR1','GamblerRambler','yellow','Fender','3.00','Exterior','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/honda-80101-147-010ZE-1.jpg'),
('OSW1','OldSchool','orange','Fender','13.00','Exterior','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/honda-61101-147-000ZB-1.jpg?v-cache=1619619112'),
('OSB1','OldSchool','red','Fender','13.00','Exterior','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/honda-61101-147-000ZT-1.jpg'),
('OSG1','OldSchool','black','head','13.00','Engine','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/honda-MB5-50cc-head-1.jpg'),
('OSR1','OldSchool','silver','CDI','13.00','Engine','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/OEM-derbi-cdi-00F03306011-1.jpg'),

('ML','Monster','silver','Head Light','3.00','Light','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/fast-arrow-camino-head-lens-1.jpg?v-cache=1612875813'),
('YH','YeahaW','silver','Piston','13.00','Engine','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/puch-ZETA-piston-46mm-1.jpg?v-cache=1579084560'),
('RBS','Ricky Bobby','silver','Spring','13.00','Engine','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/jawa-kickstand-spring-1.jpg'),
('Vrmm4','Turn Left','Blue','Panel','13.00','Exterior','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/used-jawa-30x-cover-right-BLU-1.jpg?v-cache=1608216512'),
('Vrmm5','Turn Left','red','Panel','13.00','Exterior','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/used-jawa-30x-cover-right-MAR-1.jpg'),

('RBsc','Ricky Bobby','silver','Spring Clutch','13.00','Engine','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/puch-AUTISA-47mm-kit-nikasil-1.jpg'),
('HPC','HP','black','Wheel','25.00','Wheel','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/pooch-magnumb-1.jpg?v-cache=1510917013'),
('TLP','Turn Left','orange','Panel','40.00','Exterior','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/nos-jawa-drive-chain-cover-ORG-1.jpg'),
('RBhat','Ricky Bobby','yellow','Hat','30.00','Clothes','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/nos-yellow-metrakit-hat-1.jpg?v-cache=1548258707'),
('HMR1','Hammer','black','Super Clutch','90.00','Engine','https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/sachs-504-bosch-flywheel-rust-1.jpg')
