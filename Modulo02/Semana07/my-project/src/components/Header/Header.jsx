import { useState } from "react"

function Header() {
    const [name, setName] = useState("Hello!")

    function changeName() {
        let newName = prompt("What is your name?")
        
        if (newName) {
            setName(`Hello, ${ newName }!`)
        }
    }

    return (
        <div>
            <nav>
                <a href="#" onClick={ changeName }>{ name }</a>
            </nav>
        </div>
    );
}

export default Header