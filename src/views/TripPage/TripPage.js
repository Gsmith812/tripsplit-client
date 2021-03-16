import React, { useContext } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './TripPage.css';
import STORE from '../../dummy-store';
import FriendsList from '../../components/FriendsList/FriendsList';
import Modal from '../../components/Modal/Modal';
import TripSplitContext from '../../context/TripSplitContext';
import LoginForm from '../../components/LoginForm/LoginForm';
import AddExpense from '../../components/AddExpense/AddExpense';

const TripPage = (props) => {

    const { show, hideModal, modal, handleModals } = useContext(TripSplitContext);

    const { trips } = STORE;
    const { tripId } = props.match.params;
    const currTrip = trips.filter(trip => trip.id === parseInt(tripId));

    return (
        <section className='TripPage'>
            <NavBar history={props.history} />
            <button className='back-button' onClick={() => props.history.goBack()}>Back to Dashboard</button>
            <section className='trip-details'>
                <div className='trip-description'>
                    <h2>{currTrip[0].tripName}</h2>
                    <p>Trip Starts: {currTrip[0].tripStartDate}</p>
                    <p>Trip Ends: {currTrip[0].tripEndDate}</p>
                    <p>Trip Total: {currTrip[0].totalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                </div>
                <div className='trip-group'>
                    <h3>Friends</h3>
                    <FriendsList trip={currTrip[0]} />
                </div>
            </section>
            <section className='expense-list'>
                <div className='col-headings'>
                    <h3>Expense Name</h3>
                    <h3>Paid By</h3>
                    <h3>Amount</h3>
                </div>
                {currTrip[0].expenses.map(exp => {
                    return (
                        <div className='expense-item' key={exp.id}>
                            <div className='expense-field'>
                                <span className='left-col'>{exp.expenseName}</span>
                                <span className='center-col'>{exp.paidBy}</span>
                                <span className='right-col'>{exp.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                            </div>
                        </div>
                    )
                })}
                <button className='add-expense' onClick={() => handleModals('add-expense')}>+ EXPENSE</button>
            </section>
            <Modal show={show} handleClose={hideModal}>
                {modal === 'login' && <LoginForm />}
                {modal === 'add-expense' && <AddExpense friends={currTrip[0].friends} /> }
            </Modal>
        </section>
    )
}

export default TripPage;