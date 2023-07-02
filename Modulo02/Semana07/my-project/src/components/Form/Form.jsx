import React, { useState } from 'react'

import './Form.css'

function Form({ setUsers }) {
    const [user, setUser] = useState({
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
        
        isFormValid  
        ? setUsers(prevUsers => [...prevUsers, user])
        : alert(`Verify input values`)
    }

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
                        onInput={ handleInput }
                        required />
                </fieldset>
                <button type="submit" className='form-btn' >Subscribe</button>
            </form>
        </React.Fragment>
    )
}

export default Form;