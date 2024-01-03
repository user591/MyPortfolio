-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2024 at 04:48 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `certificate`
--

CREATE TABLE `certificate` (
  `id` int(5) NOT NULL,
  `category` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `upload_file` varchar(100) NOT NULL,
  `caption` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `certificate`
--

INSERT INTO `certificate` (`id`, `category`, `title`, `upload_file`, `caption`) VALUES
(13, 'course', 'Frontend Web Development with React', '1703358773159-CERTIFICATE FRONTEND WEB DEVELOPMENT WITH REACT.jpg', 'Kegiatan belajar yang diikuti selama kegiatan studi independen di Ruangguru'),
(14, 'seminar', 'National Seminar and Kick-of Hackathon Competion 023', '1703358955935-Sertifikat Seminar.png', 'Seminar yang diakan oleh ABP yang memberikan pemahaman mengenai perkembangan teknologi '),
(15, 'lomba', 'Nominasi Penulis Terbaik Lomba Nulis Puisi dan Cerpen', '1703359146551-204_20230803_010155_0203.png', 'Lomba yang diselenggarakan oleh Literasi Kita dan Penerbit Sinar Jaya');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `message`) VALUES
(1, 'rara', 'rara@gmail.com', 'test 1'),
(3, 'dwi', 'dwi@gmail.com', 'halo ini dwi'),
(4, 'haloo', 'alfnnur43@gmail.com', 'coba aja dulu'),
(5, 'halo 2', 'lala@gmail.com', 'test lagi'),
(6, 'halo 3', 'dena@gmail.com', 'tes lagi lagi'),
(7, 'halo lagi', 'halo@gmail.com', 'halohalo');

-- --------------------------------------------------------

--
-- Table structure for table `portofolio`
--

CREATE TABLE `portofolio` (
  `id` int(5) NOT NULL,
  `project_title` varchar(100) NOT NULL,
  `upload_project` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portofolio`
--

INSERT INTO `portofolio` (`id`, `project_title`, `upload_project`, `description`) VALUES
(12, 'Gallery', '1703195849613-gallery.PNG', 'Hasil dari project pada modul Consuming RESTful API '),
(13, 'YuGi Oh Card', '1703195896483-yugi oh.PNG', 'Hasil dari project modul Frontend Development with React');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `certificate`
--
ALTER TABLE `certificate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portofolio`
--
ALTER TABLE `portofolio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `certificate`
--
ALTER TABLE `certificate`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `portofolio`
--
ALTER TABLE `portofolio`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
