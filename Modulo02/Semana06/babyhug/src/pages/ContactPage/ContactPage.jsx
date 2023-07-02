import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactCard from '../../components/ContactCard/ContactCard'
import Footer from '../../components/Footer/Footer'

function ContactPage() {
    return (
        <div className='container'>
            <Header title='BabyHug' />
            <Banner title='contato' subtitle='entre em contato conosco' />
            <ContactForm />
            <ContactCard />
            <Footer />
        </div>
    )
}

export default ContactPage