import { useState } from "react"

import "./Search.css"

function Search({ users }) {
    const [inputData, setInputData] = useState('')
    let result = document.querySelector('#search-result')

    const handleInput = (e) => setInputData(e.target.value)
    
    const searchUser = () => {
        if (inputData.length > 0) {
            users.forEach(element => {
                element.nickname === inputData 
                    ? showResult(element) 
                    : result.innerHTML = '<span>User is not registered</span>';
            });
        }
    }

    const showResult = (element) => {
        result.innerHTML = `
            <span>Nickname: ${ element.nickname }</span>
            <span>Age: ${ element.age }</span>
            <span>E-mail: ${ element.email }</span>
        `
    }

    return (
        <section className="search-container">
            <div className="search-bar">
                <input 
                    type="text" 
                    id="search-input" 
                    onInput={ handleInput } />
                <button id="search-btn" onClick={ searchUser }>Search</button>
            </div>
            <div id="search-result"></div>
        </section>
    );
}

export default Search;