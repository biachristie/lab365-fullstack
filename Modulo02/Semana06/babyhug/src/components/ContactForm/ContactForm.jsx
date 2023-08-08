import { useContext, useState, Fragment } from 'react';

import { UserContext } from '../../contexts/UserContext';

import Input from '../Input/Input';
import Button from '../Button/Button';

import './ContactForm.css'
import { useEffect } from 'react';

function ContactForm() {
    const [data, setData] = useState({
        name: '',
        telephone: '',
        email: '',
        message: ''
    })
    const [content, setContent] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true)

    const { setUser, usersList, setUsersList } = useContext(UserContext)

    const checkFormValidity = () => {
        const isFormValid = Object.values(data).every(value => value !== '')
        setIsDisabled(!isFormValid)
    }

    useEffect(() => {
        checkFormValidity()
    }, [data])

    const validateEmail = (value) => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ) return false

        return true
    }

    const handleInput = (e) => {
        const { value, id } = e.target
        
        setData({ ...data, [id]: value })

        if (id === 'message') { setContent(value.length) }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateEmail(data.email)) {
            alert('Endereço de e-mail não é válido')
            return
        }

        setUser(data)
        setUsersList([ ...usersList, data ])
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
                <Button type="submit" value="Enviar" disabled={ isDisabled } />
            </form>
        </div>
    );
}

export default ContactForm;