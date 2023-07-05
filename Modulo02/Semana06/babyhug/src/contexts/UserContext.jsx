import { createContext, useState } from "react";

export const UserContext = createContext({
    user: {
        name: '',
        telephone: '',
        email: '',
        message: ''
    },
    setUser: () => {},
    usersList: [],
    setUsersList: () => {}
})

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        name: '',
        telephone: '',
        email: '',
        message: ''
    })
    const [usersList, setUsersList] = useState([...[], user])

    return(
        <UserContext.Provider value={ { user, setUser, usersList, setUsersList } }>
            { props.children }
        </UserContext.Provider>
    )
}