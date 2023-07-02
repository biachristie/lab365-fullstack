import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'

function ProductPage() {
    return (
        <div className='container'>
            <Header title='BabyHug' />
            <Banner title='nossos produtos' subtitle='escolha o melhor para você' />
            <div className="card-container">
                <Card />
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage