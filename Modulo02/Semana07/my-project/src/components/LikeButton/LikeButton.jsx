import React, { useState } from 'react'

function Button() {
    const [count, setCount] = useState(0)

    const addLike = () => setCount((count) => count + 1)

    return (
        <React.Fragment>
            <span>{count}</span>
            <button onClick={ addLike }>
                Like
            </button>
        </React.Fragment>
    );
}

export default Button;