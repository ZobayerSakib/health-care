import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <>

            <div className='mt-3 createFont'>
                <h2 className='text-center mb-2'>Please Login</h2>

                <form className='loginForm mx-auto' >
                    <input className='mb-2' type="email" placeholder='Your email' required />
                    <br />
                    <input className='mb-2' type="password" placeholder='password' required />
                    <br />
                    <button type="submit">Continue</button>
                    <h4 className='text-center or'>------or--------</h4>
                    <button onClick={signInWithGoogle}>Sign In With Google</button>

                </form>

            </div>

        </>
    );
};

export default Login;