import { useContext, useEffect } from 'react';

import { BannerContext } from '../../contexts/BannerContext.jsx'
import { UserProvider } from '../../contexts/UserContext.jsx'

import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactCard from '../../components/ContactCard/ContactCard'
import Footer from '../../components/Footer/Footer'

function ContactPage() {
    const { setBanner } = useContext(BannerContext)

    useEffect(() => {
        setBanner({
            title: 'contato',
            subtitle: 'entre em contato conosco'
        })
    }, [])

    return (
        <div className='container'>
            <Header title='BabyHug' />
            <Banner />
            <UserProvider>
                <ContactForm />
            </UserProvider>
            <ContactCard />
            <Footer />
        </div>
    )
}

export default ContactPage