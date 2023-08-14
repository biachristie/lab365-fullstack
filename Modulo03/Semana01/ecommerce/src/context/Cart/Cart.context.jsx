import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => {},
    totalCartItems: 0,
    setTotalCartItems: () => {},
    cartTotal: 0, 
    setCartTotal: () => {}
})

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [totalCartItems, setTotalCartItems] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    const storedTotalItems = localStorage.getItem("totalCartItems")
    const storedCartItems = localStorage.getItem("cartItems")
    
    useEffect(() => {
        if (storedTotalItems) { setTotalCartItems(Number(storedTotalItems)) }
        if (storedCartItems) { setCartItems(JSON.parse(storedCartItems)) }
    }, [])

    useEffect(() => {
        localStorage.setItem("totalCartItems", JSON.stringify(totalCartItems))
    }, [totalCartItems])

    return(
        <CartContext.Provider value={{ cartItems, setCartItems, totalCartItems, setTotalCartItems, cartTotal, setCartTotal }}>
            { children }
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node
}