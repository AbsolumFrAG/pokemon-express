const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "pokemons.db"
});

sequelize.authenticate()
    .then(() => console.log("Connexion à la base de données réussie !"))
    .catch(err => console.log("Connexion à la base de données échouée !", err));

module.exports = sequelize;