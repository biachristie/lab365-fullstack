const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: 'places_database',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
})

module.exports = connection;