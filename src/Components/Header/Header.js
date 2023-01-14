import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'
const Header = () => {
    const {user , handleSignOut} = useFirebase() ;
    return (
        <div className='header'>
            <nav>
               <Link to={'/'}>Home</Link>
               <Link to={'/products'}>Products</Link>
               <Link to={'/Orders'}>Orders</Link>
               <Link to={'/Register'}>Register</Link>
               <span style={{marginRight:'15px'}}>{user?.displayName && user.displayName}</span>
               {
                 user?.uid 
                 ?
                 <button onClick={handleSignOut}>Signout</button>
                 :
                 <Link to={'/login'}>Login</Link>
               }
            </nav>
        </div>
    );
};

export default Header;