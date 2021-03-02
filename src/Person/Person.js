import React from 'react';

const person = (props) => {
    // const RandAge = Math.floor(Math.random()*30);

    return (
        <div>
            <p> I am { props.name } and I am { props.age } years old</p>
            <p> { props.children } </p>
        </div>
    )
}

export default person; // allows us to use this component in other files of our webapp