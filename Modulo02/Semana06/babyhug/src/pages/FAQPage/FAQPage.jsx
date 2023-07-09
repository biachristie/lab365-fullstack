import { useContext, useEffect } from 'react';

import { BannerContext } from '../../contexts/BannerContext.jsx'

import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Questions from '../../components/Questions/Questions';
import Search from '../../components/Search/Search.jsx';

function FAQPage() {
    const { setBanner } = useContext(BannerContext)

    useEffect(() => {
        setBanner({
            title: 'perguntas frequentes',
            subtitle: 'dúvidas frequentes'
        })
    }, [])

    return (
        <div className='container'>
            <Header title='BabyHug' />
            <Banner />
            <Search />
            <Questions />
            <Footer />
        </div>
    )
}

export default FAQPage