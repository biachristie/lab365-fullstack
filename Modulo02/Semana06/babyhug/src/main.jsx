import React from 'react'
import ReactDOM from 'react-dom/client'

import { BannerProvider } from './contexts/BannerContext.jsx'
import { ProductModalProvider } from './contexts/ProductModalContext.jsx'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductModalProvider>
      <BannerProvider>
        <App />
      </BannerProvider>
    </ProductModalProvider>
  </React.StrictMode>,
)
