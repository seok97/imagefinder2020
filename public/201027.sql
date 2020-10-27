-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.3-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- imagefinderDB 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `imagefinderdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `imagefinderDB`;

-- 테이블 imagefinderDB.userinfo 구조 내보내기
CREATE TABLE IF NOT EXISTS `userinfo` (
  `idx` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(20) DEFAULT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `user_pw` varchar(20) NOT NULL,
  `user_age` int(11) DEFAULT NULL,
  `user_gender` enum('men','women') DEFAULT NULL,
  `user_fav` char(20) DEFAULT NULL,
  `user_sigdate` datetime NOT NULL DEFAULT current_timestamp(),
  `user_logdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_email` varchar(50) NOT NULL,
  PRIMARY KEY (`idx`),
  UNIQUE KEY `user_email` (`user_email`),
  UNIQUE KEY `user_name` (`user_name`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- 테이블 데이터 imagefinderDB.userinfo:~2 rows (대략적) 내보내기
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` (`idx`, `user_id`, `user_name`, `user_pw`, `user_age`, `user_gender`, `user_fav`, `user_sigdate`, `user_logdate`, `user_email`) VALUES
	(1, 'test01', '테스트', '0000', 24, 'men', '게임', '2020-10-25 22:31:22', '2020-10-25 22:31:22', 'slgo123@naver.com'),
	(3, 'test02', '테스트2', '1234', 25, 'women', '그림', '2020-10-27 20:16:06', '2020-10-27 20:16:06', 'ssss@naver.com'),
	(4, 'test03', '테스트3', '1234', 26, 'men', '자동차', '2020-10-27 21:11:48', '2020-10-27 21:11:48', 'test@naver.com'),
	(9, 'test04', '테스트4', '1234', 27, 'men', '자동차', '2020-10-27 21:27:49', '2020-10-27 21:27:49', 'test123@naver.com');
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
