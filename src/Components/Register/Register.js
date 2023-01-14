import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div className='register'>
            <h2>Please Register now</h2>
            <form action="" className='form'>
                <input type="text" name="" placeholder='type your name' id="" /> 
                <br/>
                <input type="email" name="" placeholder='type email' id="" />
                <br/>
                <input type="password" placeholder='type password' name="" id=""/>
                <br/>
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;