import React, { useState } from 'react'

import "./LikeButton.css"

function LikeButton() {
    const [count, setCount] = useState(0)
    const addLike = () => setCount((count) => count + 1)

    return (
        <React.Fragment>
            <span id='card-likebtn-span'>{ count }</span>
            <button id='card-likebtn-btn' onClick={ addLike }>❤</button>
        </React.Fragment>
    );
}

export default LikeButton;