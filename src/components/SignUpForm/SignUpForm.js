import React from 'react';
import './SignUpForm.css';

const SignUpForm = props => {
    return (
        <section className='sign-up'>
            <div className='sign-up-container'>
                <h2>Sign-up</h2>
                <form className="sign-up-form">
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" id='first-name' name='first_name' required />
                    <label htmlFor='last-name'>Last Name:</label>
                    <input type='text' id='last-name' name='last_name' required />
                    <label htmlFor='email'>E-mail:</label>
                    <input type="email" id='email' name='email' required />
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' required />
                    <label htmlFor='confirm-password'>Confirm Password:</label>
                    <input type='password' id='confirm-password' name='confirmPassword' required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default SignUpForm;