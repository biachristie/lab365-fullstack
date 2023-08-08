import React from 'react'
import PropTypes from 'prop-types'

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

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool
}

export default Button;