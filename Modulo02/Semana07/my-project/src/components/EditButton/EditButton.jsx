import React from 'react'

function EditButton({ setShow }) {
    const openModal = () => setShow(true)

    return (
        <React.Fragment>
            <button id='card-editbtn-btn' onClick={ openModal }>Edit</button>
        </React.Fragment>
    );
}

export default EditButton