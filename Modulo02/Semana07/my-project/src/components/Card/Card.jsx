function Card({ users }) {
    const renderList = (user) => {
        return <ul key={ user.nickname }>
            <li>Nickname: { user.nickname }</li>
            <li>Age: { user.age }</li>
            <li>E-mail: { user.email }</li>
        </ul>
    }
    
    return (
        <div className="card-container">
            { users.map(renderList) }
        </div>
    );
}

export default Card;