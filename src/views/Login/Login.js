import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import NavBar from '../../components/NavBar/NavBar';
import './Login.css';

const Login = props => {
    return (
        <section className='Login'>
            <NavBar />
            <div className='login-container'>
                <LoginForm />
            </div>
        </section>
    )
}

export default Login;