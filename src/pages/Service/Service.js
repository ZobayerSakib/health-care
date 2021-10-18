import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, image, description } = props.service;
    return (
        <div className='servicesStyle mt-4 mb-4 m-3'>
            <div className='w-75'>
                <h2 className='mb-4 text-center'>{name}</h2>
                <div className='imgTransfer '>
                    <img className='imgStyle' width='200px' height='200px' src={image} alt="" />
                </div>
                <p className='mt-3'>{description}</p>
                <button className='w-100 btn btn-outline-danger'>Details about {name}</button>
            </div>
        </div>
    );
};

export default Service;