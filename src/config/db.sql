CREATE DATABASE `app_film`;
USE `app_film`;
CREATE TABLE `films` ( 
    id INT(11) AUTO_INCREMENT,
    `title` VARCHAR(32) NOT NULL,
    `description` VARCHAR(70),  
    `photo` VARCHAR(32) NOT NULL,
    CONSTRAINT key1 PRIMARY KEY (id)
);