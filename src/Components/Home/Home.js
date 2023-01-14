import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Home.css'
const auth = getAuth(app);
const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='home'>
            <h1>This is home</h1>
            <p>Current user is : <span style={{
                color:'green'}}>
            {
            user 
            ? 
            user.displayName :
            'no one available'
            }
            </span></p>
        </div>
    );
};

export default Home;