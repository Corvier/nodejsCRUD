-- creating the database
CREATE DATABASE crudexercise;

-- using the database
USE crudexercise;

-- creating a table
CREATE TABLE customer (
    id INT(999) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- to show all tables
SHOW TABLES;

-- to describe the table
DESCRIBE customer;