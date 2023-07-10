import { useContext, useState, Fragment } from 'react';

import { UserContext } from '../../contexts/UserContext';

import Input from '../Input/Input';
import Button from '../Button/Button';

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

    const inputData = [
        {
            id: 0,
            type: 'text',
            placeholder: 'Digite seu nome...',
            label: 'name',
            value: 'Nome'
        },
        {
            id: 1,
            type: 'tel',
            placeholder: 'Digite seu telefone...',
            label: 'telephone',
            value: 'Telefone'
        },
        {
            id: 2,
            type: 'email',
            placeholder: 'Digite seu email...',
            label: 'email',
            value: 'E-mail'
        },
    ]

    const listFieldsets = (input) => {
        return (
            <Fragment key={ input.id }>
                <fieldset className="contactForm-field">
                    <label className='contactForm-label' htmlFor={ input.label }>{ input.value }</label>
                    <Input 
                        type={ input.type }
                        placeholder={ input.placeholder }
                        id={ input.label }
                        onChange={ handleInput }
                    />
                </fieldset>
            </Fragment>
        )
    }

    return (
        <div className="contactForm-container">
            <h1 className="contactForm-title">Deixe o seu recado</h1>
            <form className="contactForm-form" onSubmit={ handleSubmit }>
                { inputData.map(listFieldsets) }
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
                <Button type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default ContactForm;