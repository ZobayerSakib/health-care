import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, signOutGoogle } = useAuth();
    return (
        <div className='pageHeader'>
            <nav className='d-flex justify-content-between nav'>
                <div className='siteName'>
                    <h1>Health Care24</h1>

                </div>
                <div>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/details'>Details</NavLink>
                    <NavLink to='/program'>Program</NavLink>
                    <NavLink to='/training'>Training</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                    <span className='text-white'> {user.displayName} </span>
                    {user.email ? <button onClick={signOutGoogle} className='headerButton'>Sign Out</button>
                        : <Link to='/login'>LOGIN</Link>

                    }
                </div>
            </nav>

        </div>
    );
};

export default Header;