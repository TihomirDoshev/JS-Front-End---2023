
CREATE DATABASE `minions`;

CREATE TABLE `minions`(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50),
age INT
);

CREATE TABLE `towns`(
town_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50)
);


ALTER TABLE `towns` RENAME COLUMN `town_id` TO `id`;

ALTER TABLE `minions`
ADD COLUMN `town_id` INT;

ALTER TABLE `minions`
ADD CONSTRAINT `fk_minions_towns`
FOREIGN KEY `minions`(`town_id`)
REFERENCES `towns`(`id`);



INSERT INTO `towns` (`id`,`name`)
VALUES(1,"Sofia"),(2,"Plovdiv"),(3,"Varna");

INSERT INTO `minions`(`id`,`name`,`age`,`town_id`)
VALUES (1,"Kevin",22,1),(2,"Bob",15,3),(3,"Steward",NULL,2);

TRUNCATE TABLE `minions`;

DROP TABLE `minions`;
DROP TABLE `towns`;

CREATE DATABASE `minions`;

CREATE TABLE `people`(
`id` INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(200) NOT NULL,
`picture` BLOB,
`height` DOUBLE(10,2),
`weight` DOUBLE(10,2),
`gender` CHAR(1) NOT NULL,
`birthdate` DATE NOT NULL,
`biography` TEXT
);
INSERT INTO `people`(`name`,`gender`,`birthdate`)
VALUES 
("Boris", 'm', DATE(NOW())),
("Alex", 'm', DATE(NOW())),
("Tanya", 'f', DATE(NOW())),
("Yavor", 'm', DATE(NOW())),
("tihomir", 'm', DATE(NOW()));

CREATE TABLE `users`(
`id`INT PRIMARY KEY AUTO_INCREMENT,
`username` VARCHAR(30) NOT NULL,
`password` VARCHAR(26) NOT NULL,
`profile_picture` BLOB,
`last_login_time` TIME,
`is_deleted` BOOLEAN
);

INSERT INTO `users`(`username`,`password`)
VALUES 
("ivan","gotin"),
("gosho33","1234"),
("spaska","tupa"),
("ignat1","super123"),
("sofronii","Playb@y");

ALTER TABLE `users`
DROP PRIMARY KEY,
ADD PRIMARY KEY `pk_users` (`id`,`username`);
  
ALTER TABLE `users`
MODIFY COLUMN `last_login_time` DATETIME DEFAULT NOW();

ALTER TABLE `users`
DROP PRIMARY KEY,
ADD PRIMARY KEY pk_users (`id`),
MODIFY COLUMN `username` VARCHAR(30) UNIQUE;










