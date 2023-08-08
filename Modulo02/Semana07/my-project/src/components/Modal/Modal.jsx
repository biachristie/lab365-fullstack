import Form from "../Form/Form";

import "./Modal.css"

function Modal({ show, setShow, user }) {
    if (!show) { return null }

    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-header">
                    <h2 className="modal-title">Edit User</h2>
                </div>
                <div className="modal-body">
                    <Form userCard={ user } setShow={ setShow } />
                </div>
            </div>
        </div>
    );
}

export default Modal