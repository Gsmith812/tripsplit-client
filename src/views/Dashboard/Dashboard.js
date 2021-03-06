import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './Dashboard.css';
import TripSplitContext from '../../context/TripSplitContext';
import Modal from '../../components/Modal/Modal';
import NewTrip from '../../components/NewTrip/NewTrip';
import STORE from '../../dummy-store';

const Dashboard = props => {

    const { show, hideModal, modal, handleModals } = useContext(TripSplitContext);

    const { trips } = STORE;

    return (
        <section className='Dashboard'>
            <NavBar />
            <div className='top-container'>
                <section className='greeting'>
                    <h2>Hello, Guest</h2>
                </section>
            </div>
            <section className='trips-list'>
                <h3>Upcoming Trips</h3>
                <div className='trips-container'>
                        {trips.map((trip, i) => {
                            return (
                                <div className='trip-item' key={i}>
                                    <Link className='trip-link' to={`/trips/${trip.id}`}>
                                        <h4>{trip.tripName}</h4>
                                        <p>Total Amount: {trip.totalAmount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
                                        <p>Trip starts on {trip.tripStartDate}</p>
                                    </Link>
                                </div>
                            )
                        })}
                </div>
                <button className='new-trip' onClick={() => handleModals('newTrip')}>New Trip</button>
                <Modal show={show} handleClose={hideModal}>
                    {modal === 'newTrip' && <NewTrip />}
                </Modal>
            </section>
        </section>
    )
}

export default Dashboard;