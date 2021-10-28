/*
SQLyog Enterprise - MySQL GUI v6.56
MySQL - 5.5.5-10.4.21-MariaDB : Database - bank_transaction
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`bank_transaction` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `bank_transaction`;

/*Table structure for table `registration` */

DROP TABLE IF EXISTS `registration`;

CREATE TABLE `registration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(200) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `DebitCard` int(4) NOT NULL,
  `AccNo` int(4) NOT NULL,
  `SWIFT` varchar(12) NOT NULL,
  `ContactNo` int(10) NOT NULL,
  `Balance` varchar(200) NOT NULL DEFAULT '5000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `registration` */

insert  into `registration`(`id`,`UserName`,`Email`,`Password`,`DebitCard`,`AccNo`,`SWIFT`,`ContactNo`,`Balance`) values (1,'Malli','Malli@gmail.com','Malli@123',2147483647,987654321,'IDIBPI0956',2147483647,'500'),(2,'Mouli','Mouli@gmail.com','Mouli@123',2147483647,123456789,'123456987582',2147483647,'9500');

/*Table structure for table `transactions1` */

DROP TABLE IF EXISTS `transactions1`;

CREATE TABLE `transactions1` (
  `slno` int(11) NOT NULL AUTO_INCREMENT,
  `AccountNo` varchar(100) NOT NULL,
  `Date` varchar(100) NOT NULL,
  `Time` varchar(100) NOT NULL,
  `TotalBalance` varchar(220) NOT NULL,
  `TransactionType` varchar(100) NOT NULL,
  `Amount` varchar(200) NOT NULL,
  `Description` varchar(200) NOT NULL,
  `ReceiverAccount` varchar(200) NOT NULL,
  `BankName` varchar(200) NOT NULL,
  `SwiftCode` varchar(200) NOT NULL,
  `SenderAccount` varchar(200) NOT NULL,
  PRIMARY KEY (`slno`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `transactions1` */

insert  into `transactions1`(`slno`,`AccountNo`,`Date`,`Time`,`TotalBalance`,`TransactionType`,`Amount`,`Description`,`ReceiverAccount`,`BankName`,`SwiftCode`,`SenderAccount`) values (1,'123456789','10/12/21','06:55 PM','9500','Credit','500','text','123456789','Indian Bank','IDIBPI0956','987654321'),(2,'987654321','10/12/21','06:55 PM','500','Debit','500','text','123456789','','','987654321');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
