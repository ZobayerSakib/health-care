import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, signOutGoogle } = useAuth();
    return (
        <div className='pageHeader'>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/program'>Program</NavLink>
                <NavLink to='/training'>Training</NavLink>
                <span className='text-white'> {user.displayName} </span>
                {user.email ? <button onClick={signOutGoogle} className='headerButton'>Sign Out</button>
                    : <Link to='/login'>LOGIN</Link>

                }

            </nav>

        </div>
    );
};

export default Header;