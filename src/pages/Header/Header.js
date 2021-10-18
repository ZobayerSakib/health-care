import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='pageHeader'>
            <nav>
                <NavLink to='/home'>HOME</NavLink>
                <NavLink to='/about'>ABOUT</NavLink>
                <NavLink to='/services'>SERVICES</NavLink>
                <NavLink to='/program'>PROGRAM</NavLink>

            </nav>

        </div>
    );
};

export default Header;