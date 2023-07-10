import React from 'react'

import './Input.css'

function Input({ type, placeholder, id, onChange, className }) {
    return (
        <React.Fragment>
            <input 
                type={ type }
                placeholder={ placeholder }
                id={ id }
                onChange={ onChange }
                className={ className }
            />
        </React.Fragment>
    );
}

export default Input;