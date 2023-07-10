import React from 'react'

import './Button.css'

function Button({ type, onClick, value, className }) {
    return (
        <React.Fragment>
            <button 
                type={ type } 
                onClick={ onClick } 
                className={ className }
            >
                { value }
            </button>
        </React.Fragment>
    );
}

export default Button;