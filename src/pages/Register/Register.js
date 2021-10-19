import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'
const Register = () => {
    const { signInWithGoogle, emailChangeHandling, passwordChangeHandling, handleRegistration, error } = useAuth();
    return (

        <div className='mt-2 text-center'>
            <h2 className='mb-2'>Health Care24</h2>

            <form onSubmit={handleRegistration} className='mx-auto registerForm'>
                <h4>Register Form: Create an account</h4>
                <input onBlur={emailChangeHandling} className='mb-2' type="text" name="" id="email" placeholder='your email' required />
                <br />

                <input onBlur={passwordChangeHandling} type="password" id="password" placeholder='password' required />
                <br />
                <button className='mt-2' type="submit">Register</button>
                <p className='text-danger'><small>{error}</small></p>
                <p className='mt-2'><small>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</small></p>
                <hr className='hrStyle' />
                <p>Already have and account?<Link to='/login'>Sign In</Link>
                    <button onClick={signInWithGoogle}>Sign In With Google</button>
                </p>
            </form>
        </div>
    );
};

export default Register;