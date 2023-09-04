const { INTEGER } = require('sequelize')
const { connection } = require('../database/connection')

const ProductCart = connection.define('productCarts', {
    id:  {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    cartId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'carts'
            }
        }
    },

    productId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'products'
            }
        }
    }

}, { undescored: true, paranoid: true })

module.exports = { ProductCart }