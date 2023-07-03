import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'

import error from '../../assets/404error.svg'

import './NotFoundPage.css'

function NotFoundPage() {
    return (
        <div className='notfound-container'>
            <Header title='BabyHug' />
            <Banner title='ops!' subtitle='não encontramos essa página' />
            <div className='notfound-msg'>
                <div className='notfound-msg-text'>
                    <span>Página não encontrada</span>
                </div>
                <div className='notfound-msg-img'>
                    <img src={ error } alt="Erro 404" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NotFoundPage;