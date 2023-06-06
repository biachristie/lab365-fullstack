import React from 'react';
import '../styles/Footer.css';

function Footer({ prop }) {
    return(
        <div className='App-Footer'>
            <p>Created by {prop}</p>
        </div>
    );
}

export default Footer;