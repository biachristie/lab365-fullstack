import './App.css'

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='container'>
      <Header title='BabyHug' />
      <Banner title='nossos produtos' subtitle='escolha o melhor para você' />
      <Main />
      <Footer />
    </div>
  )
}

export default App
