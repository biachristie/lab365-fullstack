const { Cart } = require('../models/Cart')

class CartController {
    async create(req, res) {
        try {
            const {
                userId
            } = req.body

            const existCart = await Cart.findOne({ where: { userId: userId, status: true } })

            if(existCart){
                return res.status(403).send({ message: 'Já existe um carrinho aberto para esse usuário' })
            }

            const cartCreated = await Cart.create({
                userId,
                price: 0,
                status: true
            })

            return res.status(201).send(cartCreated)
        } catch (error) {
            return res.status(400).send({
                message: 'Erro na criação do carrinho',
                cause: error.message
            })
        }
    }

    async findAll(req, res) {
        try {
            const carts = await Cart.findAll()

            return res.status(200).send(carts)
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao listar todos os carrinhos',
                cause: error.message
            })
        }
    }

    async findOne(req, res) {
        try {
            const { cartId } = req.params
            const cart = await Cart.findByPk(cartId)

            if(!cart){
                return res.status(404).send({ message: 'Carrinho não encontrado' })
            }

            return res.status(200).send({ cart })
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao listar o carrinho',
                cause: error.message
            })
        }
    }

    async remove(req, res) {
        try {
            const { cartId } = req.params
            const cart = await Cart.findByPk(cartId)

            if(!cart){
                return res.status(404).send({ message: 'Carrinho não encontrado' })
            }

            await cart.destroy()

            return res.status(200).send({ message: 'Carrinho removido com sucesso!' })
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao remover um carrinho',
                cause: error.message
            })
        }
    }

    async restore(req, res) {
        try {
            const { cartId } = req.params
            const cart = await Cart.findOne({ where: { cartId:cartId }, paranoid:false })

            if(!cart){
                return res.status(404).send({ message: 'Carrinho não encontrado' })
            }

            await cart.restore()

            return res.status(201).send({ message: 'Carrinho restaurado com sucesso!' })
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao restaurar um carrinho',
                cause: error.message
            })
        }
    }
}

module.exports = new CartController()