import React, { useState } from 'react'

function Form() {
    let [users, setUsers] = useState([])
    let user = {}

    const [nickname, setNickname] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const saveUser = (e) => {
        e.preventDefault()

        nickname ? user.nickname = nickname : alert('Nickname can not be empty')
        age ? user.age = age : alert('Age can not be empty')
        email ? user.email = email : alert('E-mail can not be empty')
        password ? user.password = password : alert('Password can not be empty')

        if (!nickname || !age || !email || !password) {
            return
        } else {
            addUser()
        }
    }
    
    const addUser = () => {
        if (user) {
            setUsers(users => [...users, user])
        }
        console.log(user);
    }

    return ( 
        <React.Fragment>
            <form action="" id='signupForm'>
                <div>
                    <label htmlFor="nickname">Nickname
                        <input 
                            type="text" 
                            value={ nickname } 
                            placeholder='Enter your nickname' 
                            onChange={ (e) => setNickname(e.target.value) } />
                    </label>
                </div>
                <div>
                    <label htmlFor="age">Age
                        <input 
                            type="number" 
                            value={ age } 
                            placeholder='Enter your age'
                            onChange={ (e) => setAge(e.target.value) } />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">E-mail
                        <input 
                            type="email" 
                            value={ email } 
                            placeholder='Enter your e-mail' 
                            onChange={ (e) => setEmail(e.target.value) } />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">Password
                        <input 
                            type="password"
                            value={ password } 
                            placeholder='Enter your password'
                            onChange={ (e) => setPassword(e.target.value) } />
                    </label>
                </div>
                <button type="submit" onClick={ saveUser }>Subscribe</button>
            </form>
        </React.Fragment>
    )
}

export default Form;