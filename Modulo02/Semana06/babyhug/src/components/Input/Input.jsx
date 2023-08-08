import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledInput = styled.input`
    color: #5a5a5a;
    border: 1px solid #dbdbdb;
    border-radius: 7px;
    padding-left: 15px;
    outline: none;
`

function Input({ type, placeholder, id, onChange, className }) {
    return (
        <StyledInput
            type={ type }
            placeholder={ placeholder }
            id={ id }
            onChange={ onChange }
            className={ className }
        />
    );
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
}

export default Input;