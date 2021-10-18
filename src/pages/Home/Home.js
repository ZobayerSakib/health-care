import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <>
            {/* ---------Home page banner section --------------*/}
            <div className='homeBanner'>

                <div className='bannerInfo'>
                    <h1>Health Care24</h1>
                    <h2>Your care is our dedication</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eligendi aspernatur similique recusandae optio veritatis neque accusantium esse odio! Ipsam voluptatem inventore qui recusandae perspiciatis!</p>
                </div>
            </div>

            {/* ------------------Home Page services section -----------------*/}
            <div className='services'>
                <h1 className='text-center mt-4'>Our Services</h1>
            </div>
        </>
    );
};

export default Home;