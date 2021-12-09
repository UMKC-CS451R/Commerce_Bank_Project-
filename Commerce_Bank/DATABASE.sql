/*
SQLyog Enterprise - MySQL GUI v6.56
MySQL - 5.5.5-10.1.13-MariaDB : Database - bank_transaction
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
  `custId` varchar(100) DEFAULT NULL,
  `cname` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(100) NOT NULL,
  `accno` varchar(100) NOT NULL,
  `balance` int(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `registration` */

insert  into `registration`(`id`,`custId`,`cname`,`email`,`password`,`accno`,`balance`) values (4,'BANK878','Fathima','cse.takeoff@gmail.com','Neelu@123','890989098',8200),(5,'BANK282','Lakshmi','nagamchenchulakshmi@gmail.com','Lakshmi@506','678909876',4900);

/*Table structure for table `transactions` */

DROP TABLE IF EXISTS `transactions`;

CREATE TABLE `transactions` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `saccno` varchar(100) DEFAULT NULL,
  `semail` varchar(100) DEFAULT NULL,
  `rname` varchar(100) DEFAULT NULL,
  `remail` varchar(100) DEFAULT NULL,
  `raccno` varchar(100) DEFAULT NULL,
  `ctg` varchar(100) DEFAULT NULL,
  `transtype` varchar(100) DEFAULT NULL,
  `swift` varchar(100) DEFAULT NULL,
  `amount` int(100) DEFAULT '0',
  `date1` varchar(100) DEFAULT NULL,
  `time1` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

/*Data for the table `transactions` */

insert  into `transactions`(`id`,`saccno`,`semail`,`rname`,`remail`,`raccno`,`ctg`,`transtype`,`swift`,`amount`,`date1`,`time1`) values (15,'678909876','nagamchenchulakshmi@gmail.com','Fathima','cse.takeoff@gmail.com','890989098','Work','Other Country','IDIBPI0956',100,'11-02-2021 07:29 AM','07:29 AM'),(16,'678909876','nagamchenchulakshmi@gmail.com','Fathima','cse.takeoff@gmail.com','890989098','Work','Other Country','IDIBPI0956',100,'11-02-2021 07:44 AM','07:23 AM'),(17,'890989098','cse.takeoff@gmail.com','Lakshmi','nagamchenchulakshmi@gmail.com','678909876','Travel','Other State','IDIBPI0956',200,'11-02-2021 09:49 AM','09:42 AM'),(18,'890989098','cse.takeoff@gmail.com','Lakshmi','nagamchenchulakshmi@gmail.com','678909876','Travel','Other State','IDIBPI0956',200,'11-02-2021 09:49 AM','09:44 AM'),(19,'890989098','cse.takeoff@gmail.com','Lakshmi','nagamchenchulakshmi@gmail.com','678909876','Travel','Other State','IDIBPI0956',200,'11-02-2021 09:49 AM','09:45 AM'),(20,'890989098','cse.takeoff@gmail.com','Lakshmi','nagamchenchulakshmi@gmail.com','678909876','Travel','Other State','IDIBPI0956',200,'11-02-2021 09:49 AM','09:45 AM');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
