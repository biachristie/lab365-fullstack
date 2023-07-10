import mglass from '../../assets/mglass.png'

import Input from '../Input/Input';

import './Search.css'

function Search() {
    return (
        <div className="search-container">
            <Input 
                type="text"
                className="search-input"
            />
            <button type="submit" className="search-btn" >
                <img src={ mglass } alt="Search icon" />
            </button>
        </div>
    );
}

export default Search;