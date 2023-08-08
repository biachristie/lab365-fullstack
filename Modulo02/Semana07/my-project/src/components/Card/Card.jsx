import EditButton from "../EditButton/EditButton";
import LikeButton from "../LikeButton/LikeButton";
import Modal from "../Modal/Modal";

import "./Card.css"

function Card({ users, show, setShow }) {
    const renderList = (user) => {
        return  <div key={ user.id } className="card" >
                    <ul className="card-list">
                        <li>Nickname: { user.nickname }</li>
                        <li>Age: { user.age }</li>
                        <li>E-mail: { user.email }</li>
                    </ul>
                    <div className="card-btns">
                        <div id="card-likebtn">
                            { <LikeButton /> }
                        </div>
                        <div id="card-editbtn">
                            { <EditButton setShow={ setShow } /> }
                        </div>
                    </div>
                    <Modal show={ show } setShow={ setShow } user={ user } />
                </div>
    }
    
    return (
        <div className="cards-container">
            { users.map(renderList) }
        </div>
    );
}

export default Card;