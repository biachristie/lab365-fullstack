import './ContactCard.css'

function ContactCard() {
    return (
        <div className="contactCard-container">
            <h1 className="contactCard-title">Venha conhecer nossa loja</h1>
            <div className="contactCard-info">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235203.81500692177!2d-43.58841988251077!3d-22.9111720903467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio+de+Janeiro%2C+RJ!5e0!3m2!1spt-BR!2sbr!4v1476880758681"></iframe>
                <h2 className="contactCard-subtitle">Matriz</h2>
                <div className="contactCard-info-address">
                    <div>
                        <span>Rua Galáxia, 00</span>
                        <span>Via LácteaUniverso - UN</span>
                    </div>
                    <div>
                        <span>contato@suaempresa.com</span>
                        <span>+55 21 9999-9999</span>
                    </div>
                </div>
                <span>Aberta de 08h às 18s, de segunda à sexta</span>
            </div>
        </div>
    );
}

export default ContactCard