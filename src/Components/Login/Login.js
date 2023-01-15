import React from 'react';
import './Login.css'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import {useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
   const [signInWithGoogle, user] = useSignInWithGoogle(auth);
   const location = useLocation();
   const navigate = useNavigate();
   
   const from = location?.state?.from?.pathname || '/';
   const handleGoogleSignIn = () =>{
         signInWithGoogle()
         .then( () => {
            navigate(from,{replace:true});
         })
   }
    return (
        <div className='login'>
            <h1>Please login..</h1>
            <div style={{margin:'15px'}}>
                <button onClick={()=>handleGoogleSignIn()}>Google Sign In</button>
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