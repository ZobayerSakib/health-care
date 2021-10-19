import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const { serviceId } = useParams();
    console.log(serviceId)
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const url = (`services.json${serviceId}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])

    return (
        <div>
            <p>{detail}</p>
            <Link to='/home'>Go Back</Link>

        </div>
    );
};

export default Details;