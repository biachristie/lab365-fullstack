import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

import './ContactForm.css'

function ContactForm() {
    const [data, setData] = useState({
        name: '',
        telephone: '',
        email: '',
        message: ''
    })
    const [content, setContent] = useState(0)

    const { setUser, usersList, setUsersList } = useContext(UserContext)

    const handleInput = (e) => {
        const { value, id } = e.target
        setData({ ...data, [id]: value })
        
        if (id === 'message') { setContent(value.length) }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setUser(data)
        setUsersList([ ...usersList, data ])
        console.log(usersList);
    }

    return (
        <div className="contactForm-container">
            <h1 className="contactForm-title">Deixe o seu recado</h1>
            <form className="contactForm-form" onSubmit={ handleSubmit }>
                <div>
                    <fieldset className="contactForm-field">
                        <label className='contactForm-label' htmlFor="name">Nome</label>
                        <input 
                            type="text"
                            placeholder="Digite seu nome..."
                            id="name"
                            onChange={ handleInput }
                        />
                    </fieldset>
                    <fieldset className="contactForm-field">
                        <label className='contactForm-label' htmlFor="telephone">Telefone</label>
                        <input 
                            type="tel"
                            placeholder="Digite seu telefone..."
                            id="telephone"
                            onChange={ handleInput }
                        />
                    </fieldset>
                </div>
                <fieldset className="contactForm-field">
                    <label className='contactForm-label' htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        placeholder="Digite seu email..."
                        id="email"
                        onChange={ handleInput }
                    />
                </fieldset>
                <fieldset className="contactForm-field">
                    <label className='contactForm-label' htmlFor="message">Mensagem</label>
                    <textarea 
                        rows={ 6 }
                        maxLength={ 500 }
                        placeholder="Digite sua mensagem..."
                        id="message"
                        onChange={ handleInput }
                    />
                </fieldset>
                <div id="character-counter">
                    <span>{ content } / 500 caracteres</span>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ContactForm;