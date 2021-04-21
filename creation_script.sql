use charity_matchmaker;
drop table if exists donor_categories;
drop table if exists charity_categories;
drop table if exists donor_factors;
drop table if exists donor;
drop table if exists charity;
drop table if exists category;


CREATE TABLE category(
cat_ID INT PRIMARY KEY AUTO_INCREMENT,
cat_name VARCHAR(50) unique
);

CREATE TABLE donor (
full_name VARCHAR(100),
email VARCHAR(50),
mailing_Address VARCHAR(200),
personal_bio VARCHAR(1000),
UID INT AUTO_INCREMENT PRIMARY KEY ,
state VARCHAR(2)
);

CREATE TABLE donor_factors (
UID INT,
FOREIGN KEY(UID) REFERENCES donor(UID),
local BOOLEAN
);

CREATE TABLE donor_categories(
UID INT AUTO_INCREMENT,
FOREIGN KEY (UID) REFERENCES donor(UID),
cat_ID INT,
FOREIGN KEY (CAT_ID) REFERENCES category(CAT_ID),
PRIMARY KEY(UID, CAT_ID)
);

CREATE TABLE charity (
name VARCHAR(100),
CID INT PRIMARY KEY AUTO_INCREMENT,
Ascore DOUBLE,
state VARCHAR(2),
description VARCHAR(1000)
);

CREATE TABLE charity_categories(
CID INT,
FOREIGN KEY(CID) REFERENCES charity(CID),
CAT_ID INT,
FOREIGN KEY (CAT_ID) REFERENCES category(CAT_ID),
PRIMARY KEY(CID, CAT_ID)
);
