import { useContext, useEffect } from 'react';

import { BannerContext } from '../../contexts/BannerContext.jsx'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'

function ProductPage() {
    const data = {
        title: 'nossos produtos',
        subtitle: 'escolha o melhor para você'
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
            <div className="card-container">
                <Card />
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage