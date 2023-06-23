import React, { useState } from 'react'

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
            <form action="" id='signupForm' onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="nickname">Nickname
                        <input 
                            type="text" 
                            id= "nickname" 
                            placeholder='Enter your nickname' 
                            onInput={ handleInput }
                            required />
                    </label>
                </div>
                <div>
                    <label htmlFor="age">Age
                        <input 
                            type="number" 
                            id= "age" 
                            placeholder='Enter your age'
                            onInput={ handleInput }
                            required />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">E-mail
                        <input 
                            type="email" 
                            id= "email"
                            placeholder='Enter your e-mail' 
                            onInput={ handleInput }
                            required />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">Password
                        <input 
                            type="password"
                            id= "password"
                            placeholder='Enter your password'
                            onInput={ handleInput }
                            required />
                    </label>
                </div>
                <button type="submit" >Subscribe</button>
            </form>
        </React.Fragment>
    )
}

export default Form;