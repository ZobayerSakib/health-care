import React from 'react';
import './ErrorPage.css'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='errorPageDesign'>
            <h1>404</h1>
            <p>Opps! your searching result is not exist. Please Go Back </p>
            <Link to='/home'>Go Back</Link>
        </div>
    );
};

export default ErrorPage;