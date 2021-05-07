import React, { useContext } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './TripPage.css';
import FriendsList from '../../components/FriendsList/FriendsList';
import Modal from '../../components/Modal/Modal';
import TripSplitContext from '../../context/TripSplitContext';
import LoginForm from '../../components/LoginForm/LoginForm';
import AddExpense from '../../components/AddExpense/AddExpense';
import ExpenseItem from '../../components/ExpenseItem/ExpenseItem';

const TripPage = (props) => {

    const { show, hideModal, modal, handleModals, trips } = useContext(TripSplitContext);

    const { tripId } = props.match.params;
    const currTrip = trips.find(trip => trip.id === parseInt(tripId));

    return (
        <section className='TripPage'>
            <NavBar history={props.history} />
            <button className='back-button' onClick={() => props.history.goBack()}>Back to Dashboard</button>
            <section className='trip-details'>
                <div className='trip-description'>
                    <h2>{currTrip.tripName}</h2>
                    <p>Trip Starts: {currTrip.tripStartDate}</p>
                    <p>Trip Ends: {currTrip.tripEndDate}</p>
                    <p>Trip Total: {currTrip.totalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                </div>
                <div className='trip-group'>
                    <h3>Friends</h3>
                    <FriendsList trip={currTrip} />
                </div>
            </section>
            <section className='expense-list'>
                <div className='col-headings'>
                    <h3>Expense Name</h3>
                    <h3>Paid By</h3>
                    <h3>Amount</h3>
                </div>
                {currTrip.expenses.length > 0 ?
                    currTrip.expenses.map(exp => {
                        return (
                            <ExpenseItem exp={exp} key={exp.id} />
                        )
                    }) 
                    : <p className='no-expenses'>No expenses yet.</p>
                }
                <button className='add-expense' onClick={() => handleModals('add-expense')}>+ EXPENSE</button>
            </section>
            <Modal show={show} handleClose={hideModal}>
                {modal === 'login' && <LoginForm hideModal={() => hideModal()} history={props.history} />}
                {modal === 'add-expense' && <AddExpense trip={currTrip} hideModal={() => hideModal()} history={props.history} /> }
            </Modal>
        </section>
    )
}

export default TripPage;