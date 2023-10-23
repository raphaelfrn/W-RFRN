-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 23 oct. 2023 à 22:32
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `w-rfrn`
--

-- --------------------------------------------------------

--
-- Structure de la table `characteritems`
--

CREATE TABLE `characteritems` (
  `character_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `acquisition_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `characterquests`
--

CREATE TABLE `characterquests` (
  `character_id` int(11) NOT NULL,
  `quest_id` int(11) NOT NULL,
  `completion_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `characters`
--

CREATE TABLE `characters` (
  `character_id` int(11) NOT NULL,
  `character_name` varchar(255) NOT NULL,
  `character_lvl` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `characters`
--

INSERT INTO `characters` (`character_id`, `character_name`, `character_lvl`, `class_id`, `user_id`) VALUES
(1, 'Fappu Nottep', 1, 7, 1);

-- --------------------------------------------------------

--
-- Structure de la table `classes`
--

CREATE TABLE `classes` (
  `class_id` int(11) NOT NULL,
  `class_name` varchar(255) NOT NULL,
  `class_icon` varchar(255) NOT NULL,
  `class_full_art` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `classes`
--

INSERT INTO `classes` (`class_id`, `class_name`, `class_icon`, `class_full_art`) VALUES
(1, 'Cra', 'W-RFRN\\images\\icons\\cra.png', 'W-RFRN\\images\\full\\cra.jpeg'),
(2, 'Ecaflip', 'W-RFRN\\images\\icons\\eca.png', 'W-RFRN\\images\\full\\eca.jpeg'),
(3, 'Eliotrope', 'W-RFRN\\images\\icons\\elio.png', 'W-RFRN\\images\\full\\elioM.jpeg'),
(4, 'Eniripsa', 'W-RFRN\\images\\icons\\eni.png', 'W-RFRN\\images\\full\\eni.jpeg'),
(5, 'Enutrof', 'W-RFRN\\images\\icons\\enu.png', 'W-RFRN\\images\\full\\enuM.jpeg'),
(6, 'Feca', '', ''),
(7, 'Huppermage', '', ''),
(8, 'Iop', '', ''),
(9, 'Osamodas', '', ''),
(10, 'Ouginak', '', ''),
(11, 'Pandawa', '', ''),
(12, 'Roublard', '', ''),
(13, 'Sacrieur', '', ''),
(14, 'Sadida', '', ''),
(15, 'Sram', '', ''),
(16, 'Steamer', '', ''),
(17, 'Xelor', '', ''),
(18, 'Zobal', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `equipmentpages`
--

CREATE TABLE `equipmentpages` (
  `equipment_page_id` int(11) NOT NULL,
  `character_id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `items_list` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `items`
--

CREATE TABLE `items` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_type` varchar(255) NOT NULL,
  `recipy` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `quests`
--

CREATE TABLE `quests` (
  `quest_id` int(11) NOT NULL,
  `quest_name` varchar(255) NOT NULL,
  `quest_description` varchar(255) NOT NULL,
  `quest_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`user_id`, `username`, `role`, `password`) VALUES
(1, 'rfrn', 'admin', 'admin123');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `characteritems`
--
ALTER TABLE `characteritems`
  ADD KEY `fk_item_id` (`item_id`),
  ADD KEY `fk_character_id2` (`character_id`);

--
-- Index pour la table `characterquests`
--
ALTER TABLE `characterquests`
  ADD KEY `fk_character_id` (`character_id`),
  ADD KEY `fk_quest_id` (`quest_id`);

--
-- Index pour la table `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`character_id`),
  ADD KEY `fk_user_id` (`user_id`),
  ADD KEY `fk_class_id` (`class_id`);

--
-- Index pour la table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`class_id`);

--
-- Index pour la table `equipmentpages`
--
ALTER TABLE `equipmentpages`
  ADD PRIMARY KEY (`equipment_page_id`),
  ADD KEY `fk_character_id3` (`character_id`);

--
-- Index pour la table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`);

--
-- Index pour la table `quests`
--
ALTER TABLE `quests`
  ADD PRIMARY KEY (`quest_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `characters`
--
ALTER TABLE `characters`
  MODIFY `character_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `classes`
--
ALTER TABLE `classes`
  MODIFY `class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `equipmentpages`
--
ALTER TABLE `equipmentpages`
  MODIFY `equipment_page_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `quests`
--
ALTER TABLE `quests`
  MODIFY `quest_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `characteritems`
--
ALTER TABLE `characteritems`
  ADD CONSTRAINT `fk_character_id2` FOREIGN KEY (`character_id`) REFERENCES `characters` (`character_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_item_id` FOREIGN KEY (`item_id`) REFERENCES `items` (`item_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `characterquests`
--
ALTER TABLE `characterquests`
  ADD CONSTRAINT `fk_character_id` FOREIGN KEY (`character_id`) REFERENCES `characters` (`character_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_quest_id` FOREIGN KEY (`quest_id`) REFERENCES `quests` (`quest_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `characters`
--
ALTER TABLE `characters`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_class_id` FOREIGN KEY (`class_id`) REFERENCES `classes` (`class_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `equipmentpages`
--
ALTER TABLE `equipmentpages`
  ADD CONSTRAINT `fk_character_id3` FOREIGN KEY (`character_id`) REFERENCES `characters` (`character_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
