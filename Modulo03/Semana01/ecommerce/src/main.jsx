import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { SearchProvider } from './context/Search/Search.context.jsx'
import { CartProvider } from './context/Cart/Cart.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </SearchProvider>
  </React.StrictMode>,
)
