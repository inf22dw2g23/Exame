-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: plataforma_jogos
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `jogadores`
--

DROP TABLE IF EXISTS `jogadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogadores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `data_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `data_registo` date DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogadores`
--

LOCK TABLES `jogadores` WRITE;
/*!40000 ALTER TABLE `jogadores` DISABLE KEYS */;
INSERT INTO `jogadores` VALUES (1,'Carlos','carlos@example.com','senha31','2023-04-30 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(2,'Ana','ana@example.com','senha32','2023-05-01 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(3,'Mariana','mariana@example.com','senha33','2023-05-02 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(4,'José','jose@example.com','senha34','2023-05-03 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(5,'Laura','laura@example.com','senha35','2023-05-04 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(6,'Fernando','fernando@example.com','senha36','2023-05-05 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(7,'Patrícia','patricia@example.com','senha37','2023-05-06 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(8,'Ricardo','ricardo@example.com','senha38','2023-05-07 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(9,'Sofia','sofia@example.com','senha39','2023-05-08 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(10,'Gustavo','gustavo@example.com','senha40','2023-05-09 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(11,'Camila','camila@example.com','senha41','2023-05-10 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(12,'Paulo','paulo@example.com','senha42','2023-05-11 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(13,'Mariano','mariano@example.com','senha43','2023-05-12 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(14,'Isabela','isabela@example.com','senha44','2023-05-13 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(15,'Gabriel','gabriel@example.com','senha45','2023-05-14 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(16,'Eduarda','eduarda@example.com','senha46','2023-05-15 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(17,'Lucas','lucas@example.com','senha47','2023-05-16 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(18,'Raquel','raquel@example.com','senha48','2023-05-17 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(19,'Alexandre','alexandre@example.com','senha49','2023-05-18 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(20,'Carolina','carolina@example.com','senha50','2023-05-19 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(21,'Tiago','tiago@example.com','senha51','2023-05-20 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(22,'Vitória','vitoria@example.com','senha52','2023-05-21 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(23,'Marcelo','marcelo@example.com','senha53','2023-05-22 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(24,'Natália','natalia@example.com','senha54','2023-05-23 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(25,'André','andre@example.com','senha55','2023-05-24 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(26,'Renata','renata@example.com','senha56','2023-05-25 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(27,'Luis','luis@example.com','senha57','2023-05-26 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(28,'Alexandre','alexandre@example.com','senha55','2017-04-21 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(29,'Marco','marco@example.com','senha56','2021-05-09 23:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17'),(30,'Dario','dario@example.com','senha57','2001-01-29 00:00:00',NULL,'2023-06-26 11:14:17','2023-06-26 11:14:17');
/*!40000 ALTER TABLE `jogadores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-26 17:02:31
