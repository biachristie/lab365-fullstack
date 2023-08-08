import React from 'react'

import './Button.css'

function Button({ type, onClick, value, className, disabled }) {
    return (
        <React.Fragment>
            <button 
                type={ type } 
                onClick={ onClick } 
                className={ className }
                disabled={ disabled }
            >
                { value }
            </button>
        </React.Fragment>
    );
}

export default Button;