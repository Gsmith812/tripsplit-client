import React from 'react';
import './NewTrip.css';

const NewTrip = props => {


    return (
        <section className='NewTrip'>
            <h2>Add Trip</h2>
            <form className='new-trip-form'>
                <label htmlFor='trip-name'>Name of Trip:</label>
                <input type='text' id='trip-name' name='tripName' required />
                <label htmlFor='add-friends'>Friends on Trip:</label>
                <div id='add-friends'>

                </div>
                <div className='dates'>
                    <label htmlFor='start-date'>Start Date:</label>
                    <input type='date' id='start-date' name='startDate' required />
                    <label htmlFor='end-date'>End Date:</label>
                    <input type='date' id='end-date' name='endDate' required />
                </div>
                <button type='submit' className='add-trip-btn'>Add Trip</button>
            </form>
        </section>
    )
}

export default NewTrip;