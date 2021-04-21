use charity_matchmaker;

select * from category;
select * from charity;
select * from charity_categories;

-- inserting data from second dataset:
INSERT IGNORE INTO category(cat_name)
SELECT category FROM clean_charity_data;

INSERT INTO charity(name, Ascore, state, description)
SELECT name, ascore, state, description FROM clean_charity_data;

INSERT INTO charity_categories(CID, CAT_ID)
SELECT cid, cat_id from clean_charity_data
INNER JOIN charity ON charity.name = clean_charity_data.name
INNER JOIN category ON category.CAT_NAME = clean_charity_data.category;

CALL CharityCategory("animals");
CALL CharityState("ND");
CALL GetCategories;

-- inserting data from first dataset:
LOAD DATA LOCAL INFILE 'C:\Users\amikh\Pictures\big_data\hackathon\dataset1\Data\alabama.csv'
INTO TABLE charity
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(name)
SET state = "AL";