CREATE DATABASE  IF NOT EXISTS `oneway` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `oneway`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: oneway
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `Name` varchar(45) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `AdminID` varchar(45) NOT NULL,
  PRIMARY KEY (`AdminID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (NULL,'a',NULL,'AD001');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driver`
--

DROP TABLE IF EXISTS `driver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `ratings` int DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `registerdDate` varchar(45) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `customerID_UNIQUE` (`ID`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=182 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver`
--

LOCK TABLES `driver` WRITE;
/*!40000 ALTER TABLE `driver` DISABLE KEYS */;
INSERT INTO `driver` VALUES (179,'sd','sd@gkd','$2b$10$pO0eZIX0V3cYx5BUhE4aiu343n5DbOrhzsaq.kM5KnY9afeQ76gNO','fdssdf',0,'dfdfg','2022-07-05','Active'),(180,'sda','sd@gkda','$2b$10$SEk76By2ioMAgdhFWhWuI.a0IWt0jCwS8/a7kN0Sbry4dPXazzQBa','fdssdfd',0,'dfdfgg','2022-07-05','Active'),(181,'madushan','m.darshanaict@gmail.com','$2b$10$ZE.ej0zSg40s8/iJ4MbFHe2z6obyfQLhRJQ/Tuc33./wlPggp6EPq','koruwawa,polpithigama',0,'0712532113','2022-07-05','Active');
/*!40000 ALTER TABLE `driver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driverpayments`
--

DROP TABLE IF EXISTS `driverpayments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driverpayments` (
  `DriverID` int NOT NULL,
  `Month` varchar(45) DEFAULT NULL,
  `Balance` varchar(45) DEFAULT NULL,
  `Amount_to_be_paid_to_the_institution` varchar(45) DEFAULT NULL,
  `IsPaid` int DEFAULT NULL,
  PRIMARY KEY (`DriverID`),
  CONSTRAINT `DriverID` FOREIGN KEY (`DriverID`) REFERENCES `driver` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driverpayments`
--

LOCK TABLES `driverpayments` WRITE;
/*!40000 ALTER TABLE `driverpayments` DISABLE KEYS */;
/*!40000 ALTER TABLE `driverpayments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passanger`
--

DROP TABLE IF EXISTS `passanger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passanger` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `rating` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passanger`
--

LOCK TABLES `passanger` WRITE;
/*!40000 ALTER TABLE `passanger` DISABLE KEYS */;
INSERT INTO `passanger` VALUES (1,'dgh','a','a','address','phone','rating','status');
/*!40000 ALTER TABLE `passanger` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passangertravelsdetails`
--

DROP TABLE IF EXISTS `passangertravelsdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passangertravelsdetails` (
  `passangerID` int NOT NULL,
  `travelDetailsID` int NOT NULL,
  `dateAndTimeOfBooking` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Comments` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`passangerID`,`travelDetailsID`),
  KEY `prid_idx` (`passangerID`),
  KEY `tid_idx` (`travelDetailsID`),
  CONSTRAINT `pid` FOREIGN KEY (`passangerID`) REFERENCES `passanger` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tid` FOREIGN KEY (`travelDetailsID`) REFERENCES `traveldetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passangertravelsdetails`
--

LOCK TABLES `passangertravelsdetails` WRITE;
/*!40000 ALTER TABLE `passangertravelsdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `passangertravelsdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `traveldetails`
--

DROP TABLE IF EXISTS `traveldetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `traveldetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Date` varchar(45) DEFAULT NULL,
  `from` varchar(100) DEFAULT NULL,
  `to` varchar(100) DEFAULT NULL,
  `discription` varchar(255) DEFAULT NULL,
  `gMapID` varchar(255) DEFAULT NULL,
  `Distance_KM` int DEFAULT NULL,
  `Price` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `traveldetails`
--

LOCK TABLES `traveldetails` WRITE;
/*!40000 ALTER TABLE `traveldetails` DISABLE KEYS */;
INSERT INTO `traveldetails` VALUES (1,'Invalid Date',NULL,NULL,NULL,NULL,6,NULL),(5,'Invalid Date',NULL,NULL,NULL,NULL,1,NULL),(6,'Invalid Date',NULL,NULL,NULL,NULL,1,'79'),(7,'Invalid Date',NULL,NULL,'asd','7',1,'78'),(8,'Invalid Date',NULL,NULL,NULL,NULL,1,'90');
/*!40000 ALTER TABLE `traveldetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `driverID` int NOT NULL,
  `type` varchar(45) DEFAULT NULL,
  `numOfPassengers` int DEFAULT NULL,
  PRIMARY KEY (`id`,`driverID`),
  KEY `userID_idx` (`driverID`),
  CONSTRAINT `userID` FOREIGN KEY (`driverID`) REFERENCES `driver` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicletraveldetails`
--

DROP TABLE IF EXISTS `vehicletraveldetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicletraveldetails` (
  `vehicleID` int NOT NULL,
  `travelDetailsID` int NOT NULL,
  PRIMARY KEY (`vehicleID`,`travelDetailsID`),
  KEY `travelDetailsID_idx` (`travelDetailsID`),
  KEY `usrid_idx` (`vehicleID`),
  CONSTRAINT `travelDetailsID` FOREIGN KEY (`travelDetailsID`) REFERENCES `traveldetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `usrid` FOREIGN KEY (`vehicleID`) REFERENCES `vehicle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicletraveldetails`
--

LOCK TABLES `vehicletraveldetails` WRITE;
/*!40000 ALTER TABLE `vehicletraveldetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehicletraveldetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'oneway'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-09  8:57:18
