import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import ProductPage from "./pages/Product/Product.page"
import CartPage from "./pages/Cart/Cart.page"
import CheckOutPage from "./pages/Checkout/Checkout.page"

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={ <HomePage /> } /> */}
        <Route path="/produtos" element={ <ProductPage /> } />
        <Route path="/carrinho" element={ <CartPage /> } />
        <Route path="/checkout" element={ <CheckOutPage /> } />
        <Route path="/*" element={ <><p>Página não encontrada</p></> } />
      </Routes>
    </Router>
  )
}

export default App
