import { useState } from "react"

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
        <div className="search-container">
            <label htmlFor="search"></label>
            <input 
                type="text" 
                id= "search" 
                placeholder=""
                onInput={ handleInput } />
            <button onClick={ searchUser }>Search</button>
            <div id="search-result"></div>
        </div>
    );
}

export default Search;