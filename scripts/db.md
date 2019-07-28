CREATE TABLE `awscour`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));

INSERT INTO `awscour`.`user` (`id`, `email`, `password`, `type`) VALUES ('1', 'admin', 'admin', 'admin');
INSERT INTO `awscour`.`user` (`id`, `email`, `password`, `type`) VALUES ('2', 'user@gmail.com', 'user', 'user');

CREATE TABLE `awscour`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `quantity` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `cost` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));


INSERT INTO `awscour`.`product` (`id`, `name`, `quantity`, `type`, `cost`) VALUES ('1', 'Harry Potter Part 1', '100', 'book', '499');
INSERT INTO `awscour`.`product` (`id`, `name`, `quantity`, `type`, `cost`) VALUES ('2', 'Harry Potter Part 2', '100', 'book', '499');
INSERT INTO `awscour`.`product` (`id`, `name`, `quantity`, `type`, `cost`) VALUES ('3', 'Harry Potter Part 3', '100', 'book', '499');
INSERT INTO `awscour`.`product` (`id`, `name`, `quantity`, `type`, `cost`) VALUES ('4', 'Harry Potter Part 4', '100', 'book', '499');
INSERT INTO `awscour`.`product` (`id`, `name`, `quantity`, `type`, `cost`) VALUES ('5', 'Harry Potter Part 5', '100', 'book', '499');
INSERT INTO `awscour`.`product` (`id`, `name`, `quantity`, `type`, `cost`) VALUES ('6', 'Harry Potter Part 6', '100', 'book', '499');
INSERT INTO `awscour`.`product` (`id`, `name`, `quantity`, `type`, `cost`) VALUES ('7', 'Harry Potter Part 7', '100', 'book', '499');


