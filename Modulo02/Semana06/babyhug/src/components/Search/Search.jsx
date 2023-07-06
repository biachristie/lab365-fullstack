import mglass from '../../assets/mglass.png'

import './Search.css'

function Search() {
    return (
        <div className="search-container">
            <input type="text" className="search-input" />
            <button type="submit" className="search-btn" >
                <img src={ mglass } alt="Search icon" />
            </button>
        </div>
    );
}

export default Search;