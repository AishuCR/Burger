DROP DATABASE IF EXISTS burgers_db;
-- * Create the `burgers_db`.
CREATE DATABASE burgers_db;
--    * Switch to or use the `burgers_db`.
USE burgers_db;
--    * Create a `burgers` table with these fields:
create table burgers (
--    * **id**: an auto incrementing int that 
-- serves as the primary key.
id int not null AUTO_INCREMENT,
--    * **burger_name**: a string.
burger_name VARCHAR(50) not null,
--    * **devoured**: a boolean.
devoured boolean default 0,
ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

PRIMARY KEY (id)
);