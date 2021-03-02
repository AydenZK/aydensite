import React from 'react';

const job = props => {
    return (
        <div>
            <h2>{ props.position }</h2>
            <h2>{ props.employer }</h2>
            <p>{props.startYear}-{props.endYear}</p>
        </div>
    )
};

export default job; 