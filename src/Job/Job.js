import React from 'react';

const job = props => {
    return (
        <div>
            <h2>Job: { props.position }</h2>
            <h2>Company: { props.employer }</h2>
            <p>Period: {props.startYear}-{props.endYear}</p>
        </div>
    )
};

export default job; 