import { useEffect, useState } from "react"

import Header from "../../components/Header/Header.component"
import ProductCard from "../../components/ProductCard/ProductCard.component"
import { ProductService } from "../../services/Product/Product.service"

import "./Product.page.css"

function ProductPage() {
    const [products, setProducts] = useState()
    console.log(products);

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
            />
        )
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