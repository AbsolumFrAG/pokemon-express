# Installation du projet

```git clone git@github.com:AbsolumFrAG/pokemon-express.git```

```npm install```

```npm start```

  

# Introduction

Ce rapport explique comment mettre en place une API en ExpressJS, en utilisant Sequelize comme ORM pour interagir avec une base de données SQLite. L’API permet de gérer des informations sur les Pokémon via des opérations CRUD (Create, Read, Update, Delete).

  

# Configuration

1. Mise en place de Sequelize : Créer un fichier ```database.js``` pour configurer Sequelize avec SQLite.

2. Création du modèle Pokémon : Dans un dossier ```models```, créer un fichier ```pokemon.model.js```.

  

# Création de l’API

1. Configuration du serveur Express : Créer un fichier ```server.js``` pour configurer le serveur Express et intégrer Sequelize.

2. Implémentation des routes CRUD : Ajouter les routes pour les opérations CRUD dans ```server.js```.

1. Create : Ajouter un nouveau Pokémon.

2. Read : Lire les informations des Pokémon.

3. Update : Mettre à jour les informations d’un Pokémon.

4. Delete : Supprimer un Pokémon.

  

# Test et Validation

1. Exécution du serveur : Exécuter le serveur avec ```node server.js``` et tester les routes CRUD à l’aide d’un outil comme Postman.

2. Validation des Fonctionnalités : S’assurer que toutes les opérations CRUD fonctionnent comme prévu et gèrent correctement les erreurs.