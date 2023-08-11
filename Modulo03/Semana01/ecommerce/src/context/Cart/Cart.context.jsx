import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => {},
    totalCartItems: 0,
    setTotalCartItems: () => {}
})

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [totalCartItems, setTotalCartItems] = useState(0)

    return(
        <CartContext.Provider value={{ cartItems, setCartItems, totalCartItems, setTotalCartItems }}>
            { children }
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node
}