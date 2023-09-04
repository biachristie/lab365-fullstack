const { INTEGER, FLOAT, BOOLEAN } = require('sequelize')
const { connection } = require('../database/connection')

const Cart = connection.define('carts', {
    cartId:  {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    userId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'users'
            }
        }
    },

    price: {
        type: FLOAT,
        allowNull: false
    },

    status: {
        type: BOOLEAN
    }

}, { undescored: true, paranoid: true })

module.exports = { Cart }