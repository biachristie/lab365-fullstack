import React from 'react';
import '../styles/Header.css';

function Header({ prop }) {
    const name = "Beatriz"
    
    return (
        <header className="App-header">
            <span>I'm {name}.</span>
            <span className='Header-data'>{prop}</span>
        </header>
    );
}

export default Header;