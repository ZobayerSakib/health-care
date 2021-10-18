import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <>
            <h2>Please Login</h2>
            <div className='loginForm'>

                <div className='mt-4 mb-5'>
                    <form  >
                        <input type="email" placeholder='Your email' />
                        <br />
                        <br />
                        <input type="password" placeholder='password' />
                        <br />
                        <br />
                        <button type="submit">Continue</button>
                    </form>
                    <h4 className='text-center or'>------or--------</h4>
                    <button onClick={signInWithGoogle}>Sign In With Google</button>
                </div>
            </div>

        </>
    );
};

export default Login;