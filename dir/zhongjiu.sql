-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: zhongjiudb
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add group',2,'add_group'),(5,'Can change group',2,'change_group'),(6,'Can delete group',2,'delete_group'),(7,'Can add user',3,'add_user'),(8,'Can change user',3,'change_user'),(9,'Can delete user',3,'delete_user'),(10,'Can add permission',4,'add_permission'),(11,'Can change permission',4,'change_permission'),(12,'Can delete permission',4,'delete_permission'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add user',7,'add_user'),(20,'Can change user',7,'change_user'),(21,'Can delete user',7,'delete_user'),(22,'Can add banner',8,'add_banner'),(23,'Can change banner',8,'change_banner'),(24,'Can delete banner',8,'delete_banner'),(25,'Can add goods',9,'add_goods'),(26,'Can change goods',9,'change_goods'),(27,'Can delete goods',9,'delete_goods'),(28,'Can add cart',10,'add_cart'),(29,'Can change cart',10,'change_cart'),(30,'Can delete cart',10,'delete_cart'),(31,'Can add order',11,'add_order'),(32,'Can change order',11,'change_order'),(33,'Can delete order',11,'delete_order'),(34,'Can add order goods',12,'add_ordergoods'),(35,'Can change order goods',12,'change_ordergoods'),(36,'Can delete order goods',12,'delete_ordergoods');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(2,'auth','group'),(4,'auth','permission'),(3,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session'),(8,'zhongjiuApp','banner'),(10,'zhongjiuApp','cart'),(9,'zhongjiuApp','goods'),(11,'zhongjiuApp','order'),(12,'zhongjiuApp','ordergoods'),(7,'zhongjiuApp','user');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2019-01-11 16:52:58.107857'),(2,'auth','0001_initial','2019-01-11 16:52:58.863234'),(3,'admin','0001_initial','2019-01-11 16:52:59.047236'),(4,'admin','0002_logentry_remove_auto_add','2019-01-11 16:52:59.095972'),(5,'contenttypes','0002_remove_content_type_name','2019-01-11 16:52:59.231351'),(6,'auth','0002_alter_permission_name_max_length','2019-01-11 16:52:59.297920'),(7,'auth','0003_alter_user_email_max_length','2019-01-11 16:52:59.398307'),(8,'auth','0004_alter_user_username_opts','2019-01-11 16:52:59.434454'),(9,'auth','0005_alter_user_last_login_null','2019-01-11 16:52:59.500283'),(10,'auth','0006_require_contenttypes_0002','2019-01-11 16:52:59.523132'),(11,'auth','0007_alter_validators_add_error_messages','2019-01-11 16:52:59.567959'),(12,'auth','0008_alter_user_username_max_length','2019-01-11 16:52:59.662289'),(13,'sessions','0001_initial','2019-01-11 16:52:59.767112'),(14,'zhongjiuApp','0001_initial','2019-01-11 16:52:59.839017'),(15,'zhongjiuApp','0002_auto_20190109_0925','2019-01-11 16:52:59.883312'),(16,'zhongjiuApp','0003_user','2019-01-11 16:52:59.955026'),(17,'zhongjiuApp','0004_goods','2019-01-11 16:53:00.025335'),(18,'zhongjiuApp','0005_goods_type','2019-01-11 16:53:00.131842'),(19,'zhongjiuApp','0006_auto_20190110_1237','2019-01-11 16:53:00.200954'),(20,'zhongjiuApp','0007_remove_user_username','2019-01-12 02:15:14.514696'),(21,'zhongjiuApp','0008_auto_20190112_0218','2019-01-12 02:18:57.111482'),(22,'zhongjiuApp','0009_auto_20190113_1015','2019-01-13 10:15:25.339913'),(23,'zhongjiuApp','0010_auto_20190114_0633','2019-01-14 06:34:36.083301'),(24,'zhongjiuApp','0011_auto_20190115_1156','2019-01-15 11:56:48.960020'),(25,'zhongjiuApp','0012_cart_isselect','2019-01-15 11:58:23.765946'),(26,'zhongjiuApp','0013_order_ordergoods','2019-01-18 11:20:56.618230'),(27,'zhongjiuApp','0014_auto_20190118_1238','2019-01-18 12:38:35.044233');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('039pvm7r1ygg870r6o9dyjjwxgqbwcwb','ZTBlMmUwMDVkMGUzOTM0YjU3OGZiZWRlZWIyODM0ZTU1M2RlNmE5Yzp7Il9zZXNzaW9uX2V4cGlyeSI6MzAsInRva2VuIjoiZDg4YjY5MmEzN2IyZjk3MjA2Nzk1NWJhZjE5OGU3YjQifQ==','2019-01-12 03:07:45.817162'),('1bxco3znnfxopzpx6p54mj3mqb7s3zif','ZjU2Njk2YTI2MDBjNzg2M2Y4M2I3NjBhNWEwMmM0ZjBjOTUxNDI3MTp7InRva2VuIjoiNGMwYWQyMzZmNzNmOTRiZTFlMDgxMTYyNzBkNDFkYjciLCJfc2Vzc2lvbl9leHBpcnkiOjMwfQ==','2019-01-12 03:27:43.897991'),('56ze7mhg23lttvkxx72vukhjja5fh36r','ZmYyMDJjYTMyOWFlY2Q0ZGY4OGJjNmFiM2FhNTE2NzZhMWI5NjMwOTp7Il9zZXNzaW9uX2V4cGlyeSI6NjA0ODAwLCJ0b2tlbiI6IjI1ZDk1N2NlODNlYjM4NGJlNWEyYWZkYWViZGQzMjhmIn0=','2019-01-23 16:55:15.158491'),('ec4r4t9bcui2izhis2ipm522m3iws8wc','Yzk2OWUxMWNhZWNhZjJkYzViNmMyZDRjOTg0YjFkZjBlNWNhZmMyZjp7InRva2VuIjoiM2M5ZDM5NWM3ZDYzYTkwMGYzZjEyMGE1MzZhODc3ZmUiLCJfc2Vzc2lvbl9leHBpcnkiOjMwfQ==','2019-01-12 03:10:21.059821'),('kjc56qflladoym2psvrl0igdjc1ppne4','YWU5NTcwYzg0MTYwOTBkMDg3YzMxNWRhMWY1ZTJiNTEzMmZlMGQzNDp7InRva2VuIjoiZmNjMDkwZDlhZTFlMWY2NTZkZDhiZGIzNWY3NWViZTEiLCJfc2Vzc2lvbl9leHBpcnkiOjMwfQ==','2019-01-12 08:38:46.614821'),('m8g9z5080ovsxkhcoa2pppmf2ju8j9el','ZmU0NzdhYjZhZjE2ZGJkODA1NDNmM2Y2ZTcwMWU3NTUyZDE3MDA1Njp7InRva2VuIjoiYTFlZWJiMzIzNmU0NTU4OTcxMjdjMDMxZTk4ZmJkZjUiLCJfc2Vzc2lvbl9leHBpcnkiOjMwfQ==','2019-01-12 03:23:11.663785'),('nvk1dafibb0l7z4311k09qx4ef81xmdr','YzlhNTE3ODdmMzM4MDBhMTZmMTk1Njg0Yjg5NWY4NjliZDc2NTkwZjp7InRva2VuIjoiMzg0YmYxMDE2ZGEzZDNmYWJhZjQyYjlkYWQyNDdmMjUiLCJfc2Vzc2lvbl9leHBpcnkiOjMwfQ==','2019-01-12 08:40:09.267555'),('oejkcpkp8izq41ovyavsahfjczq3wo3a','MjVjMTBkMTc0YmRmMDVjNmJlOGY2ZmU0OGI3ODU0MjI0NzkyYzY4Mzp7InRva2VuIjoiNzQwYmNlZDA4MmI0MzY4YzViZWIwMTFjMWYyNGI4NjkifQ==','2019-02-01 10:39:57.472720'),('qtd1w2ee4ipx34n50g926wamgd2yif1h','YzRhYmRmZDJmYzA1ZDk3YWMxNjk5N2ViOTVkZjI3MmVhZTAxODVkMzp7InRva2VuIjoiNjQxMTkyYjZkNmJiZWNjOTMxZGZkODM1MDRlNzQ1ZDgiLCJfc2Vzc2lvbl9leHBpcnkiOjMwfQ==','2019-01-12 08:44:53.406201'),('u7qbokylo1cghsj50hn8tid2laxop86o','YjU4ZjQ3Mzc2MzI3NGFhMWY3NTMzMDkyMTIzMzU2ZDMwNTY4M2U3Mjp7InRva2VuIjoiODU2ZThiMzZmMWYxNjkxMWUzNmE5MzQ1YTdlYTA5YWYiLCJfc2Vzc2lvbl9leHBpcnkiOjMwfQ==','2019-01-12 03:25:03.617376'),('wrvwdrq2myl2jwkxhuizuiok06dzruwq','MzdiZjgwMzA4Y2U4MzY2YTliODFjN2UwM2U4ZGE3ZWRhZThkZjA5MDp7Il9zZXNzaW9uX2V4cGlyeSI6NjA0ODAwLCJ0b2tlbiI6Ijc5MTBhMWRkMGQ3M2ExZWFhOWQ2ZjE2MGY0YWVlODQ5In0=','2019-01-21 01:16:37.058615'),('y6knntbgy4f5bpxymujam9i4yvh0hh5n','NWQ5MmRiOGNiMjM0MjI2MjM4YjFhMzEzMTg2Y2RhZjE1NDFiZjM2Zjp7Il9zZXNzaW9uX2V4cGlyeSI6NjA0ODAwLCJ0b2tlbiI6IjlkYWE2MjMyMWZhNjE0OTllYjc1MjIwMTFkZTk4MGM1In0=','2019-01-24 13:17:50.115557'),('z4xye132asbt8id4tnq5utxl98r57m6j','MjQ0YmJlN2M1MmUxODlmODE0NmMyN2Y2YWIyZWU5NjBkMDU1NzJiMzp7InRva2VuIjoiMDhmN2QwYzZjZTNhNzBmYTg0YmU0ZWYzMzQ0YTI2MzIiLCJfc2Vzc2lvbl9leHBpcnkiOjMwfQ==','2019-01-12 03:11:56.023100');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zhongjiu__order`
--

DROP TABLE IF EXISTS `zhongjiu__order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zhongjiu__order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) NOT NULL,
  `createtime` datetime(6) NOT NULL,
  `indentifier` varchar(256) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `zj_order_user_id_3d3334bb_fk_zhongjiu_user_id` (`user_id`),
  CONSTRAINT `zj_order_user_id_3d3334bb_fk_zhongjiu_user_id` FOREIGN KEY (`user_id`) REFERENCES `zhongjiu_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zhongjiu__order`
--

LOCK TABLES `zhongjiu__order` WRITE;
/*!40000 ALTER TABLE `zhongjiu__order` DISABLE KEYS */;
INSERT INTO `zhongjiu__order` VALUES (5,0,'2019-01-18 12:52:00.255524','15478159200.7582521997062516',54),(6,0,'2019-01-18 13:22:28.644727','15478177480.04544540749539194',54);
/*!40000 ALTER TABLE `zhongjiu__order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zhongjiu__ordergoods`
--

DROP TABLE IF EXISTS `zhongjiu__ordergoods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zhongjiu__ordergoods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `zj_ordergoods_goods_id_95604b5b_fk_zhongjiu_goods_id` (`goods_id`),
  KEY `zj_ordergoods_order_id_f163feaa_fk_zj_order_id` (`order_id`),
  CONSTRAINT `zj_ordergoods_goods_id_95604b5b_fk_zhongjiu_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `zhongjiu_goods` (`id`),
  CONSTRAINT `zj_ordergoods_order_id_f163feaa_fk_zj_order_id` FOREIGN KEY (`order_id`) REFERENCES `zhongjiu__order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zhongjiu__ordergoods`
--

LOCK TABLES `zhongjiu__ordergoods` WRITE;
/*!40000 ALTER TABLE `zhongjiu__ordergoods` DISABLE KEYS */;
INSERT INTO `zhongjiu__ordergoods` VALUES (8,6,36,5),(9,10,36,6);
/*!40000 ALTER TABLE `zhongjiu__ordergoods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zhongjiu_cart`
--

DROP TABLE IF EXISTS `zhongjiu_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zhongjiu_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `isselect` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `zhongjiu_cart_goods_id_ff69d704_fk_zhongjiu_goods_id` (`goods_id`),
  KEY `zhongjiu_cart_user_id_a525e818_fk_zhongjiu_user_id` (`user_id`),
  CONSTRAINT `zhongjiu_cart_goods_id_ff69d704_fk_zhongjiu_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `zhongjiu_goods` (`id`),
  CONSTRAINT `zhongjiu_cart_user_id_a525e818_fk_zhongjiu_user_id` FOREIGN KEY (`user_id`) REFERENCES `zhongjiu_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zhongjiu_cart`
--

LOCK TABLES `zhongjiu_cart` WRITE;
/*!40000 ALTER TABLE `zhongjiu_cart` DISABLE KEYS */;
INSERT INTO `zhongjiu_cart` VALUES (1,32,38,44,1),(2,5,37,44,1),(3,5,39,44,1),(4,5,37,45,1),(5,10,36,45,1),(6,5,38,45,1),(7,2,37,53,1),(8,1,36,53,1),(9,25,38,53,1),(10,0,36,44,1),(11,5,39,53,1),(21,0,38,54,1);
/*!40000 ALTER TABLE `zhongjiu_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zhongjiu_goods`
--

DROP TABLE IF EXISTS `zhongjiu_goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zhongjiu_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(100) NOT NULL,
  `price` varchar(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `type` varchar(10) NOT NULL,
  `bigimg` varchar(100) NOT NULL,
  `smallimg1` varchar(100) NOT NULL,
  `smallimg2` varchar(100) NOT NULL,
  `smallimg3` varchar(100) NOT NULL,
  `smallimg4` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zhongjiu_goods`
--

LOCK TABLES `zhongjiu_goods` WRITE;
/*!40000 ALTER TABLE `zhongjiu_goods` DISABLE KEYS */;
INSERT INTO `zhongjiu_goods` VALUES (4,'/static/img/floor_liquor1.jpg','1000￥','【中秋特惠】53°茅台飞天500ml','baijiu','','','','',''),(5,'/static/img/floor_liquor3.jpg','2000￥','52°泸州老窖头曲500ml','baijiu','','','','',''),(6,'/static/img/floor_liquor4.jpg','3000￥','茅台53','baijiu','','','','',''),(7,'/static/img/floor_liquor1.jpg','1050￥','茅台53','baijiu','','','','',''),(8,'/static/img/floor_liquor10.jpg','1500￥','【中秋特惠】42度天佑德青稞酒海拔2600 500ml(2瓶装) ','baijiu','','','','',''),(9,'/static/img/floor_liquor11.jpg','2000￥','53°国台·好礼500ml*2(礼盒装)','baijiu','','','','',''),(10,'/static/img/floor_liquor14.jpg','2500￥','【中秋特惠】43°茅台迎宾酒 500ml(6瓶装)','baijiu','','','','',''),(11,'/static/img/floor_liquor15.jpg','1000￥','【中秋特惠】43°茅台迎宾酒 500ml(6瓶装)','baijiu','','','','',''),(12,'/static/img/red_wine2.jpg','100￥','恋爱季甜白高泡+恋爱季甜桃红 750ml（2瓶装）','red','','','','',''),(13,'/static/img/red_wine3.jpg','150￥','恋爱季甜白高泡+恋爱季甜桃红 750ml（2瓶装）','red','','','','',''),(14,'/static/img/red_wine4.jpg','300￥','恋爱季甜白高泡+恋爱季甜桃红 750ml（2瓶装）','red','','','','',''),(15,'/static/img/red_wine6.jpg','400￥','5°夜光之恋魅影起泡葡萄酒 750ml','red','','','','',''),(16,'/static/img/red_wine7.jpg','422￥','圣卡罗碱性天然水果发酵起泡酒4种口味（4瓶装）','red','','','','',''),(17,'/static/img/red_wine8.jpg','156￥','火焰酒（起泡葡萄配制酒）-火焰 750ml ','red','','','','',''),(18,'/static/img/red_wine9.jpg','700￥','365爱恋起泡酒 三种口味套装','red','','','','',''),(19,'/static/img/red_wine10.jpg','600￥','仙山露甜味起泡葡萄酒礼盒装 750ml*2','red','','','','',''),(20,'/static/img/floor_liquor2.jpg','700￥','52°泸州老窖头曲500ml','yang','','','','',''),(21,'/static/img/floor_liquor1.jpg','156￥','53°国台·好礼500ml*2(礼盒装)','yang','','','','',''),(22,'/static/img/floor_liquor4.jpg','400￥','【中秋特惠】53°茅台飞天500ml','yang','','','','',''),(23,'/static/img/floor_liquor7.jpg','300￥','52°泸州老窖头曲500ml','yang','','','','',''),(24,'/static/img/floor_liquor10.jpg','156￥','53°国台·好礼500ml*2(礼盒装)','yang','','','','',''),(25,'/static/img/floor_liquor11.jpg','400￥','53°国台·好礼500ml*2(礼盒装)','yang','','','','',''),(26,'/static/img/floor_liquor14.jpg','700￥','【中秋特惠】53°茅台飞天500ml','yang','','','','',''),(27,'/static/img/floor_liquor15.jpg','600￥','【中秋特惠】53°茅台飞天500ml','other','','','','',''),(28,'/static/img/red_wine3.jpg','156￥','【中秋特惠】53°茅台飞天500ml','other','','','','',''),(29,'/static/img/red_wine4.jpg','600￥','【中秋特惠】53°茅台飞天500ml','other','','','','',''),(30,'/static/img/red_wine6.jpg','1000￥','【中秋特惠】53°茅台飞天500ml','other','','','','',''),(31,'/static/img/red_wine7.jpg','700￥','【中秋特惠】53°茅台飞天500ml','other','','','','',''),(32,'/static/img/red_wine8.jpg','156￥','【中秋特惠】53°茅台飞天500ml','other','','','','',''),(33,'/static/img/red_wine9.jpg','600￥','【中秋特惠】53°茅台飞天500ml','other','','','','',''),(34,'/static/img/red_wine10.jpg','700￥','【中秋特惠】53°茅台飞天500ml','other','','','','',''),(35,'/static/img/floor_liquor7.jpg','300￥','52°泸州老窖头曲500ml','yang','','','','',''),(36,'/static/img/flash_sale1.jpg','399.00','52°出口型白西凤绵柔凤香型 500ml*6','time','/static/img/ProductList1.jpg','/static/img/ProductList1.jpg','/static/img/ProductList2.jpg','/static/img/ProductList3.jpg','/static/img/ProductList4.jpg'),(37,'/static/img/flash_sale2.jpg','219.00','52°泸州窖酒（窖藏龙窖）500ml*6 ','time','/static/img/red_wine1 (1).jpg','/static/img/red_wine1 (1).jpg','/static/img/red_wine1 (2).jpg','/static/img/red_wine1 (3).jpg','/static/img/red_wine1 (4).jpg'),(38,'/static/img/flash_sale3.jpg','179.00','拉菲珍藏波尔多 750ml','time','/static/img/red_wine2 (1).jpg','/static/img/red_wine2 (1).jpg','/static/img/red_wine2 (2).jpg','/static/img/red_wine2 (3).jpg','/static/img/red_wine2 (4).jpg'),(39,'/static/img/flash_sale4.jpg','299.00','43°茅台迎宾酒500ml*6','time','/static/img/red_wine1 (1).jpg','/static/img/red_wine1 (1).jpg','/static/img/red_wine1 (2).jpg','/static/img/red_wine1 (3).jpg','/static/img/red_wine1 (4).jpg');
/*!40000 ALTER TABLE `zhongjiu_goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zhongjiu_user`
--

DROP TABLE IF EXISTS `zhongjiu_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zhongjiu_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `zhongjiuApp_user_phone_b1298322_uniq` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zhongjiu_user`
--

LOCK TABLES `zhongjiu_user` WRITE;
/*!40000 ALTER TABLE `zhongjiu_user` DISABLE KEYS */;
INSERT INTO `zhongjiu_user` VALUES (44,'2b65b60337b6561601a95e10563451985ca95670c65035508d5e6404a1af342a','13068515253','c3532879f0df1d356e5d10b5adfc6926'),(45,'2b65b60337b6561601a95e10563451985ca95670c65035508d5e6404a1af342a','15917116205','482f92f2edef38af400011375f0e8213'),(46,'2b65b60337b6561601a95e10563451985ca95670c65035508d5e6404a1af342a','15917116206','584907af396d551e0396cb6d0755fb02'),(52,'2b65b60337b6561601a95e10563451985ca95670c65035508d5e6404a1af342a','13068598451','a4b82bf593d83c9ab38c0f5abe769ba2'),(53,'2b65b60337b6561601a95e10563451985ca95670c65035508d5e6404a1af342a','13000000000','9daa62321fa61499eb7522011de980c5'),(54,'2b65b60337b6561601a95e10563451985ca95670c65035508d5e6404a1af342a','13065216985','740bced082b4368c5beb011c1f24b869');
/*!40000 ALTER TABLE `zhongjiu_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zhongjiu_wheel`
--

DROP TABLE IF EXISTS `zhongjiu_wheel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zhongjiu_wheel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zhongjiu_wheel`
--

LOCK TABLES `zhongjiu_wheel` WRITE;
/*!40000 ALTER TABLE `zhongjiu_wheel` DISABLE KEYS */;
INSERT INTO `zhongjiu_wheel` VALUES (2,'static/img/banner2.jpg'),(3,'static/img/banner3.jpg'),(4,'static/img/banner4.jpg'),(5,'static/img/banner5.jpg'),(6,'static/img/banner6.jpg'),(10,'static/img/banner1.jpg');
/*!40000 ALTER TABLE `zhongjiu_wheel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-19  0:17:49
