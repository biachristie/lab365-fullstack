const { create, findAll, findOne, findAllAdm, remove, restore} = require('../controllers/product.controller')
const { Router } = require('express')
const { auth } = require('../middlewares/auth.middleware')
const { username } = require('../config/database.config')

class ProductRouter{
    routesFromProduct() {
        const productRoutes = Router()

        productRoutes.post('/products', auth, create)
        productRoutes.get('/products', auth , findAll)
        productRoutes.get('/productsAdm/', auth, findAllAdm)
        productRoutes.get('/products/:productId', auth, findOne)
        productRoutes.delete('/products/:productId/remove', auth, remove)
        productRoutes.post('/products/:productId/restore', auth, restore)

        return productRoutes
    }
}

module.exports = new ProductRouter()