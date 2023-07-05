import { useContext, useEffect } from 'react';

import { BannerContext } from '../../contexts/BannerContext.jsx'

import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'

function FAQPage() {
    const data = {
            title: 'perguntas frequentes',
            subtitle: 'dúvidas frequentes'
        }

        const { title, setTitle, subtitle, setSubtitle } = useContext(BannerContext)

        useEffect(() => {
            setTitle(data.title)
            setSubtitle(data.subtitle)
        }, [])

    return (
        <div className='container'>
            <Header title='BabyHug' />
            <Banner title={ title } subtitle={ subtitle } />
            
            
            <Footer />
        </div>
    )
}

export default FAQPage