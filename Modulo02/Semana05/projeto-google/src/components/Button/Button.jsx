import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

function Button({ text }) {
    return(
        <React.Fragment>
            <button className='navbar-button' aria-label={ text } role='button'>{ text }</button>
        </React.Fragment>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button