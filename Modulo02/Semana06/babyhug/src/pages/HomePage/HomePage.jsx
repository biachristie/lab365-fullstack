import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

function HomePage() {
    return (
        <div className='container'>
            <Header title='BabyHug' />
            <Main />
            <Footer />
        </div>
    )
}

export default HomePage