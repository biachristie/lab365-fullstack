import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
    color: var(--color-snow);
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    background-color: var(--color-mint);
    border: none;
    border-radius: 10px;
    padding: 13px 20px 11px;
    cursor: pointer;

    &:hover {
        background-color: var(--color-mint-dark);
    }

    &:disabled {
        background-color: var(--color-porcelain);
        cursor: not-allowed;
    }
`

function Button({ type, onClick, value, className, disabled }) {
    return (
        <StyledButton
            type={ type } 
            onClick={ onClick } 
            className={ className }
            disabled={ disabled }
        >
            { value }
        </StyledButton>
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