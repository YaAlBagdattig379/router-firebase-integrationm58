import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Orders = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h4>Don't Knock me somehow</h4>
            <h4>`{user?.displayName}`</h4>

        </div>
    );
};

export default Orders;