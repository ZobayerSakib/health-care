import React from 'react';
import 'animate.css';
import './Service.css'
const Service = (props) => {
    const { name, image, description } = props.service;
    return (
        <div className='serviceDivDesign mt-4 mb-4 m-3'>
            <div className='w-75'>
                <h2 className='mb-4 text-center animate__animated animate__fadeInLeft'>{name}</h2>
                <div className='imgTransfer '>
                    <img className='imgStyle' width='200px' height='200px' src={image} alt="" />
                </div>
                <p className='mt-3'>{description}</p>
                <button >Details about {name}</button>
            </div>
        </div>
    );
};

export default Service;