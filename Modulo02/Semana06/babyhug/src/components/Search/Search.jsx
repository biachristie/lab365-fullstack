import mglass from '../../assets/mglass.png'

import Input from '../Input/Input';
import Button from '../Button/Button';

import './Search.css'

function Search() {
    return (
        <div className="search-container">
            <Input 
                type="text"
                className="search-input"
            />
            <Button 
                type="submit" 
                className="search-btn" 
                value={ <img src={ mglass } alt="Search icon" /> } />
        </div>
    );
}

export default Search;