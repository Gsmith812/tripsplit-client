import React, { useContext } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './LandingPage.css';
import TripSplitContext from '../../context/TripSplitContext';
import Modal from '../../components/Modal/Modal';
import LoginForm from '../../components/LoginForm/LoginForm';

const LandingPage = props => {

    const { show, hideModal, modal, handleModals } = useContext(TripSplitContext);

    return (
        <section className='LandingPage'>
            <div className='hero'>
               <h1 className='app-name'>TripSplit</h1>
               <button className='demo' onClick={() => props.history.push('/dashboard')}>Demo</button>
            </div>
            <p className='tagline'>Splitting vacations shouldn't give you a splitting headache...</p>
            <hr />
            <p className='description'>Make splitting trip expenses with friends and colleagues easier by using TripSplit! Let us do the number crunching for you, so you can get back to enjoying your vacation!</p>
            <hr />
            <div className='account-btns'>
                <button onClick={() => handleModals('sign-up')}>Sign Up</button>
                <button onClick={() => handleModals('login')}>Login</button>
            </div>
            <Modal show={show} handleClose={hideModal}>
                {modal === 'sign-up' && <SignUpForm />}
                {modal === 'login' && <LoginForm />}
            </Modal>
        </section>
    )
}

export default LandingPage;