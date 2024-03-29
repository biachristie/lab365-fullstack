import { useContext, useEffect, useState } from "react"

import Header from "../../components/Header/Header.component"
import ProductCard from "../../components/ProductCard/ProductCard.component"
import { ProductService } from "../../services/Product/Product.service"
import { SearchContext } from "../../context/Search/Search.context"
import { CartContext } from "../../context/Cart/Cart.context"

import "./Product.page.css"

function ProductPage() {
    const [products, setProducts] = useState()

    useEffect(() => {
        ProductService.Get().then(result => setProducts(result.products))
    }, [])

    const { searchedTerm } = useContext(SearchContext)

    const searchTerm = (value) => {
        if (!searchedTerm) {
            return value
        } else if (value.title.toLowerCase().includes(searchedTerm.toString().toLowerCase())) {
            return value
        } else if (value.brand.toLowerCase().includes(searchedTerm.toString().toLowerCase())) {
            return value
        }
    }
    
    const renderProductCard = (product) => {
        return (
            <ProductCard key={ product.id }
                productImage={ product.images[0] }
                productCategory={ product.category } 
                productName={ product.title }
                productCurrency= 'R$' 
                productPrice={ product.price }
                onClick={ () => onAddToCart(product) }
            />
        )
    }

    const { cartItems, setCartItems, setTotalCartItems } = useContext(CartContext)

    useEffect(() => { calcTotalCartItems() }, [cartItems])

    const onAddToCart = (product) => {
        const productExists = cartItems.find(item => item.id === product.id)
        
        if (productExists) {
            const newCartItems = cartItems.map(item => {
                return item.id === product.id 
                ? { ...productExists, quantity: productExists.quantity + 1}
                : item 
            })

            setCartItems(newCartItems)
            localStorage.setItem('cartItems', JSON.stringify(newCartItems))
        } else {
            const newCartItems = [ ...cartItems, { ...product, quantity: 1 } ]
            
            setCartItems(newCartItems)
            localStorage.setItem('cartItems', JSON.stringify(newCartItems))
        }
    }

    const calcTotalCartItems = () => {
        let tempTotalItems = 0

        cartItems.forEach( item => tempTotalItems += item.quantity )
        setTotalCartItems(tempTotalItems)
    }

    return (
        <>
            <Header />
            <section className="products-cards">
                { products && 
                    products
                    .filter(searchTerm)
                    .map(renderProductCard) }
            </section>
        </>
    )
}

export default ProductPage