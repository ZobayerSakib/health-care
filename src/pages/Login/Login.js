import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInWithGoogle, emailChangeHandling, passwordChangeHandling, login, error } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSign = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <>

            <div className='mt-3 createFont'>

                <form onSubmit={login} className='loginForm mx-auto' >
                    <h2 className='text-center mb-2'>Please Login</h2>

                    <input onBlur={emailChangeHandling} className='mb-2' type="email" placeholder='Your email' required />
                    <br />
                    <input onBlur={passwordChangeHandling} className='mb-2' type="password" placeholder='password' required />
                    <br />
                    <button type="submit">Continue</button>
                    <p className='text-danger'><small>{error}</small></p>

                    <p>Are you a new user? <Link to='/register'>Create a new account</Link></p>
                    <h4 className='text-center or'>------or--------</h4>
                    <button onClick={handleGoogleSign}>Sign In With Google</button>

                </form>

            </div>

        </>
    );
};

export default Login;