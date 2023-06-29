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
-- Table structure for table `partidas`
--

DROP TABLE IF EXISTS `partidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partidas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jogador1_id` int NOT NULL,
  `jogador2_id` int NOT NULL,
  `tabuleiro` varchar(255) DEFAULT NULL,
  `vencedor_id` int DEFAULT NULL,
  `data_criacao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `jogador1_id` (`jogador1_id`),
  KEY `jogador2_id` (`jogador2_id`),
  KEY `vencedor_id` (`vencedor_id`),
  CONSTRAINT `partidas_ibfk_1` FOREIGN KEY (`jogador1_id`) REFERENCES `jogadores` (`id`),
  CONSTRAINT `partidas_ibfk_2` FOREIGN KEY (`jogador2_id`) REFERENCES `jogadores` (`id`),
  CONSTRAINT `partidas_ibfk_3` FOREIGN KEY (`vencedor_id`) REFERENCES `jogadores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=237 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partidas`
--

LOCK TABLES `partidas` WRITE;
/*!40000 ALTER TABLE `partidas` DISABLE KEYS */;
INSERT INTO `partidas` VALUES (207,1,2,'tabuleiro1',1,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(208,3,4,'tabuleiro2',4,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(209,5,6,'tabuleiro3',5,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(210,7,8,'tabuleiro4',7,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(211,9,10,'tabuleiro5',10,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(212,11,12,'tabuleiro6',12,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(213,13,14,'tabuleiro7',13,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(214,15,16,'tabuleiro8',15,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(215,17,18,'tabuleiro9',17,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(216,19,20,'tabuleiro10',19,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(217,21,22,'tabuleiro11',21,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(218,23,24,'tabuleiro12',23,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(219,25,26,'tabuleiro13',25,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(220,27,28,'tabuleiro14',27,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(221,29,30,'tabuleiro15',29,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(222,1,3,'tabuleiro16',1,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(223,2,4,'tabuleiro17',2,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(224,5,7,'tabuleiro18',5,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(225,6,8,'tabuleiro19',6,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(226,9,11,'tabuleiro20',11,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(227,10,12,'tabuleiro21',10,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(228,13,15,'tabuleiro22',15,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(229,14,16,'tabuleiro23',16,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(230,17,19,'tabuleiro24',17,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(231,18,20,'tabuleiro25',20,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(232,21,23,'tabuleiro26',21,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(233,22,24,'tabuleiro27',24,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(234,25,27,'tabuleiro28',25,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(235,26,28,'tabuleiro29',26,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09'),(236,29,1,'tabuleiro30',29,'2023-05-16 00:02:26','2023-06-26 11:04:03','2023-06-26 11:04:09');
/*!40000 ALTER TABLE `partidas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-26 17:02:32