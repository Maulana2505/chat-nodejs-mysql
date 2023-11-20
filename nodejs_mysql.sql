-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2023 at 06:15 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_mysql`
--

-- --------------------------------------------------------

--
-- Table structure for table `follows`
--

CREATE TABLE `follows` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `followId` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `imgprofile` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `friendrequests`
--

CREATE TABLE `friendrequests` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `friendreqid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `friendrequests`
--

INSERT INTO `friendrequests` (`id`, `userid`, `friendreqid`, `createdAt`, `updatedAt`) VALUES
('711095ff-3b8c-473b-bb79-4c81472facbc', '0b198bec-bd4f-40e7-a884-2ea87dc208c1', '69513b5a-10d8-4528-b103-8af99d4c3c10', '2023-02-06 19:18:39', '2023-02-06 19:18:39'),
('a3717661-4014-4dfb-a8f9-9ba4b38bd655', '0b198bec-bd4f-40e7-a884-2ea87dc208c1', '51364498-6600-4e90-88df-229fb541f995', '2023-02-06 19:12:48', '2023-02-06 19:12:48');

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `friendid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`id`, `userid`, `friendid`, `createdAt`, `updatedAt`) VALUES
('4dc1bc4d-3286-4c89-b8c0-cee626c888cd', '47c6594f-24c1-4fad-a700-133b72ae30f8', '51364498-6600-4e90-88df-229fb541f995', '2023-02-06 19:36:05', '2023-02-06 19:36:05'),
('7d16e50d-4a77-48e1-80df-428a372aac02', '51364498-6600-4e90-88df-229fb541f995', '47c6594f-24c1-4fad-a700-133b72ae30f8', '2023-02-06 19:36:05', '2023-02-06 19:36:05');

-- --------------------------------------------------------

--
-- Table structure for table `pendings`
--

CREATE TABLE `pendings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `friendid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pendings`
--

INSERT INTO `pendings` (`id`, `userid`, `friendid`, `createdAt`, `updatedAt`) VALUES
('b67e1914-134f-49a8-8b39-1aedb9f22d25', '69513b5a-10d8-4528-b103-8af99d4c3c10', '0b198bec-bd4f-40e7-a884-2ea87dc208c1', '2023-02-06 19:18:39', '2023-02-06 19:18:39'),
('c910a832-2ca8-4bf3-8612-f2827b25a028', '51364498-6600-4e90-88df-229fb541f995', '0b198bec-bd4f-40e7-a884-2ea87dc208c1', '2023-02-06 19:12:48', '2023-02-06 19:12:48');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `imgpost` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `imgprofile` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `imgprofile`, `createdAt`, `updatedAt`) VALUES
('0b198bec-bd4f-40e7-a884-2ea87dc208c1', 'q', 'q@gmail.com', '$2b$10$qhT9z9WrPyETirId5sD87O7sPbea9PLYlxaR3o.S4bhaJUVqa0KIq', 'image_picker8106517251243142242.jpg', '2023-02-06 18:17:54', '2023-02-09 14:34:33'),
('47c6594f-24c1-4fad-a700-133b72ae30f8', 'z', 'z@gmail.com', '$2b$10$QZfQ6GUAZ2g.DXA7U/G2ZOQWRc9QOStyTWmKKns5gtVbUVq8QryU2', NULL, '2023-02-06 18:18:11', '2023-02-06 18:18:11'),
('51364498-6600-4e90-88df-229fb541f995', 'a', 'a@gmail.com', '$2b$10$sgdqTWOqcnDqe/7zRwxQkujQIV/6aieNh8klKihjpccP/80.NLXM6', NULL, '2023-02-06 18:17:37', '2023-02-06 18:17:37'),
('69513b5a-10d8-4528-b103-8af99d4c3c10', 'aa', 'aa@gmail.com', '$2b$10$0/kZNkUrylHWgcWH2ye0ReHpDhZ3EIYIVyxZQ6NUJF4DBjBIIt5dm', NULL, '2023-02-06 19:18:23', '2023-02-06 19:18:23'),
('f2b15656-f043-47f5-8852-ad53fb72b035', 'andrew', 'andrew@gmail.com', '$2b$10$Lt62yF1f156QU1Q3H4.m3.8O1/kBSSasQXdNdMEQ3CRQxVUAHXLTC', NULL, '2023-02-07 05:00:08', '2023-02-07 05:00:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `friendrequests`
--
ALTER TABLE `friendrequests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`),
  ADD KEY `friendreqid` (`friendreqid`);

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`),
  ADD KEY `friendid` (`friendid`);

--
-- Indexes for table `pendings`
--
ALTER TABLE `pendings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `friendid` (`friendid`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `friendrequests`
--
ALTER TABLE `friendrequests`
  ADD CONSTRAINT `friendrequests_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `friendrequests_ibfk_2` FOREIGN KEY (`friendreqid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `friends`
--
ALTER TABLE `friends`
  ADD CONSTRAINT `friends_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `friends_ibfk_2` FOREIGN KEY (`friendid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `pendings`
--
ALTER TABLE `pendings`
  ADD CONSTRAINT `pendings_ibfk_1` FOREIGN KEY (`friendid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
