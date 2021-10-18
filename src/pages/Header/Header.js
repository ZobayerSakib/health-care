import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'
const Header = () => {
    const { user, signOutGoogle } = useFirebase();
    return (
        <div className='pageHeader'>
            <nav>
                <NavLink to='/home'>HOME</NavLink>
                <NavLink to='/about'>ABOUT</NavLink>
                <NavLink to='/services'>SERVICES</NavLink>
                <NavLink to='/program'>PROGRAM</NavLink>
                <span className='text-white'> {user.displayName} </span>
                {user.email ? <button onClick={signOutGoogle} className='headerButton'>Sign Out</button>
                    : <Link to='/login'>LOGIN</Link>

                }

            </nav>

        </div>
    );
};

export default Header;