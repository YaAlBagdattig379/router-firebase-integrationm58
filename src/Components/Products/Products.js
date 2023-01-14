import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth = getAuth(app);
const Products = () => {
   const [user] = useAuthState(auth);
    return (
        <div>
            <h1>Knock Knock who is there</h1>
            <h2>User Name</h2>
            <h4 style={{color:'green'}}>
                {
                user? 
                user.displayName
                :
                'no one'
                }</h4>
        </div>
    );
};

export default Products;