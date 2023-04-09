const connection = require("../database");
const { Sequelize } = require("sequelize");

const User = connection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlpha: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Email address already in use'
        },
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Username already in use'
        },
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: {
                args: [8, 32],
                msg: 'Minimum 8 characters required'
            }
        }
    }
});

module.exports = User;