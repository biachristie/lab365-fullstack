import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => {}
})

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    return(
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            { children }
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node
}