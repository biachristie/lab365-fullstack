import LikeButton from "../LikeButton/LikeButton";

function Card({ users }) {
    const renderList = (user) => {
        return  <div key={ user.nickname }>
                    <ul className="card-list">
                        <li>Nickname: { user.nickname }</li>
                        <li>Age: { user.age }</li>
                        <li>E-mail: { user.email }</li>
                    </ul>
                    <div className="card-likebtn">
                        { <LikeButton /> }
                    </div>
                </div>
    }
    
    return (
        <div className="cards-container">
            { users.map(renderList) }
        </div>
    );
}

export default Card;