const Sequelize = require("sequelize");
const sequelize = require("../database");

const Pokemon = sequelize.define("pokemon", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING
    },
    level: {
        type: Sequelize.INTEGER
    },
    evolution: {
        type: Sequelize.STRING
    }
});

module.exports = Pokemon;