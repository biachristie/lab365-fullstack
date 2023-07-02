import './ContactForm.css'

function ContactForm() {
    return (
        <div className="contactForm-container">
            <h1 className="contactForm-title">Deixe o seu recado</h1>
            <form className="contactForm-form">
                <div>
                    <fieldset className="contactForm-field">
                        <label className='contactForm-label' htmlFor="">Nome</label>
                        <input 
                            type="text"
                            placeholder="Digite seu nome..."
                            id="input-name"
                        />
                    </fieldset>
                    <fieldset className="contactForm-field">
                        <label className='contactForm-label' htmlFor="input-tel">Telefone</label>
                        <input 
                            type="tel"
                            placeholder="Digite seu telefone..."
                            id="input-tel"
                        />
                    </fieldset>
                </div>
                <fieldset className="contactForm-field">
                    <label className='contactForm-label' htmlFor="">E-mail</label>
                    <input
                        type="email"
                        placeholder="Digite seu email..."
                        id="input-email"
                    />
                </fieldset>
                <fieldset className="contactForm-field">
                    <label className='contactForm-label' htmlFor="">Mensagem</label>
                    <textarea 
                        rows={ 6 }
                        placeholder="Digite sua mensagem..."
                        id="input-msg"
                    />
                </fieldset>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ContactForm;