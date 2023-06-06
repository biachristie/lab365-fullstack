import React from 'react';

function Main({ prop }) {
    return(
        <div>
            <h1>
                Hello World!
            </h1>
            <span>This is my first {prop} page.</span>
        </div>
    );
}

export default Main;