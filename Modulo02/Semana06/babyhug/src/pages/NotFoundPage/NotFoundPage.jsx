import { useContext, useEffect } from 'react';

import { BannerContext } from '../../contexts/BannerContext.jsx'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'

import error from '../../assets/404error.svg'

import './NotFoundPage.css'

function NotFoundPage() {
    const data = {
        title: 'ops!',
        subtitle: 'não encontramos essa página'
    }

    const { title, setTitle, subtitle, setSubtitle } = useContext(BannerContext)

    useEffect(() => {
        setTitle(data.title)
        setSubtitle(data.subtitle)
    }, [])

    return (
        <div className='notfound-container'>
            <Header title='BabyHug' />
            <Banner title={ title } subtitle={ subtitle } />
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