import { useContext, useEffect } from "react"

import Header from "../../components/Header/Header.component"
import CartCard from "../../components/CartCard/CartCard.component"
import CartTotalCard from "../../components/CartTotalCard/CartTotalCard.component"
import { CartContext } from "../../context/Cart/Cart.context"

import "./Cart.page.css"

function CartPage() {
    const { cartItems, setCartTotal } = useContext(CartContext)

    useEffect(() => {
        calcCartTotal()
    }, [cartItems])

    const renderCartProductCard = (cartItem) => {
        return (
            <CartCard key={ cartItem.id }
                productImage={ cartItem.images[0] }
                productName={ cartItem.title }
                productQuantity={ cartItem.quantity }
                productCurrency= "R$"
                productPrice= { cartItem.price }
            />
        )
    }

    const calcCartTotal = () => {
        let tempTotal = 0

        cartItems.forEach(item => {
            tempTotal += item.price * item.quantity
        })

        setCartTotal(tempTotal)
    }

    return (
        <>
            <Header hideSearch={ true } />
            <div className="cart-container">
                <section className="cart-cards">
                    { cartItems && cartItems.map(renderCartProductCard) }
                </section>
                <section className="cart-total-card">
                    <CartTotalCard/>
                </section>
            </div>
        </>
    )
}

export default CartPage