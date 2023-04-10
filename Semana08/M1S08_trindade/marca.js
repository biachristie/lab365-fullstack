const Sequelize = require('sequelize');

const database = require('./db');

const Marca = database.define('marca', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
    }
});

module.exports = Marca;