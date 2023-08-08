import React, { useEffect, useState } from 'react'

import './Form.css'

function Form({ setUsers, userId, userCard, setShow }) {
    const [showButton, setShowButton] = useState(false)
    const [inputData, setInputData] = useState({
        nickname: '',
        age: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        setShowButton(true)

        if (userCard) {
            setInputData({
                nickname: userCard.nickname,
                age: userCard.age,
                email: userCard.email,
                password: userCard.password
            })
        }
    }, [])

    const [user, setUser] = useState({
        id: userId,
        nickname: '',
        age: '',
        email: '',
        password: ''
    })    

    const handleInput = (e) => {
        e.preventDefault()
    
        setUser(prevUser => ({ ...prevUser, [e.target.id]: e.target.value }))
    }

    const isFormValid = () => {
        let validate = true

        const data = Object.entries(user);
        
        data.forEach(([key]) => {
            if (!user[key].length) {
                validate = false;
            }
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(isFormValid) {
            setUsers(prevUsers => [...prevUsers, user])
            e.target.reset()
        } else {
            alert(`Verify input values`)
        }
    }

    const closeModal = () => setShow(false)

    return ( 
        <React.Fragment>
            <form action="" className='form-signup' onSubmit={ handleSubmit }>
                <fieldset className='form-field'>
                    <label className='form-label' htmlFor="nickname">Nickname</label>
                    <input 
                        type="text" 
                        className='form-input'
                        id= "nickname" 
                        placeholder='Enter your nickname' 
                        value={ inputData.nickname }
                        onInput={ handleInput }
                        required />
                </fieldset>
                <fieldset className='form-field'>
                    <label className='form-label' htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        className='form-input'
                        id= "age" 
                        placeholder='Enter your age'
                        value={ inputData.age }
                        onInput={ handleInput }
                        required />
                </fieldset>
                <fieldset className='form-field'>
                    <label className='form-label' htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        className='form-input'
                        id= "email"
                        placeholder='Enter your e-mail' 
                        value={ inputData.email }
                        onInput={ handleInput }
                        required />
                </fieldset>
                <fieldset className='form-field'>
                    <label className='form-label' htmlFor="password">Password</label>
                    <input 
                        type="password"
                        className='form-input'
                        id= "password"
                        placeholder='Enter your password'
                        value={ inputData.password }
                        onInput={ handleInput }
                        required />
                </fieldset>
                <button type="submit" className='form-btn' >Subscribe</button>
                <button type="button" className='form-btn' onClick={ closeModal } hidden={ !showButton } >Cancel</button>
            </form>
        </React.Fragment>
    )
}

export default Form;