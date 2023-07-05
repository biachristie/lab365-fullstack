import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import ProductPage from './pages/ProductPage/ProductPage';
import FAQPage from './pages/FAQPage/FAQPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='product' element={ <ProductPage /> }/>
        <Route path='contact' element={ <ContactPage /> }/>
        <Route path='faq' element={ <FAQPage /> }/>
        <Route path='*' element={ <NotFoundPage /> }/>
      </Routes>
    </Router>
  )
}

export default App