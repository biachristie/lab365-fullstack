import { useState } from "react"

import "./Header.css"

function Header() {
    const [name, setName] = useState("Hello! Click here.")

    const changeName = () => {
        let newName = prompt("What is your name?")
        
        newName ? setName(`Hello, ${ newName }!`) : { name }
    }

    return (
        <header>
            <nav className="navbar">
                <a href="#" onClick={ changeName }>{ name }</a>
            </nav>
        </header>
    );
}

export default Header