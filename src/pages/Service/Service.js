import React from 'react';
import 'animate.css';
import './Service.css'
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
    const { id, name, image, description } = service;
    const url = `/details/${id}`
    return (
        <div className='serviceDivDesign mt-4 mb-4 m-3'>
            <div className='w-75'>
                <h2 className='mb-4 text-center animate__animated animate__fadeInLeft'>{name}</h2>
                <div className='imgTransfer '>
                    <img className='imgStyle' width='200px' height='200px' src={image} alt="" />
                </div>
                <p className='mt-3'>{description}</p>
                {
                    <button> <Link to={url}>Details of {name}</Link></button>
                }
            </div>
        </div>
    );
};

export default Service;