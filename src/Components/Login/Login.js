import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'
const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div className='login'>
            <h1>Please login..</h1>
            <div style={{margin:'15px'}}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form action="">
                <input type="email" name="" placeholder='type email' id="" />
                <br />
                <input type="password" placeholder='type password' name="" id="" /> <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;