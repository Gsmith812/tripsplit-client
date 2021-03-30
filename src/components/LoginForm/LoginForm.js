import React from 'react';
import './LoginForm.css';

const LoginForm = props => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/dashboard');
        props.hideModal();
    }

    return (
        <form className='LoginForm' onSubmit={(e) =>  handleSubmit(e)}>
            <h2>Login</h2>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' required />
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginForm;