import { useContext, useEffect, useState } from "react"

import Header from "../../components/Header/Header.component"
import ProductCard from "../../components/ProductCard/ProductCard.component"
import { ProductService } from "../../services/Product/Product.service"
import { CartContext } from "../../context/Cart/Cart.context"

import "./Product.page.css"

function ProductPage() {
    const [products, setProducts] = useState()

    useEffect(() => {
        ProductService.Get().then(result => setProducts(result.products))
    }, [])
    
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

    const { cartItems, setCartItems } = useContext(CartContext)

    const onAddToCart = (product) => {
        setCartItems([ ...cartItems, product ])
    }

    return (
        <>
            <Header />
            <section className="products-cards">
                { products && products.map(renderProductCard) }
            </section>
        </>
    )
}

export default ProductPage