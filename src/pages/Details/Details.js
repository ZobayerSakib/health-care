import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    let { serviceId } = useParams();
    return (
        <div>
            <h2>G Details{serviceId}</h2>
        </div>
    );
};

export default Details;