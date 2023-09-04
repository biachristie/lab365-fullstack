const { create, findAll, findOne, remove, restore} = require('../controllers/cart.controller')
const { Router } = require('express')
const { auth } = require('../middlewares/auth.middleware')

class CartRouter{
    routesFromProduct() {
        const cartRoutes = Router()

        cartRoutes.post('/carts', auth, create)
        cartRoutes.get('/carts', auth, findAll)
        cartRoutes.get('/carts/:cartId', auth, findOne)
        cartRoutes.delete('/carts/:cartId/remove', auth, remove)
        cartRoutes.post('/carts/:cartId/restore', auth, restore)

        return cartRoutes
    }
}

module.exports = new CartRouter()