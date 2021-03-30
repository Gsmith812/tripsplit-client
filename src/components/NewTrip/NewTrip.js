import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import TripSplitContext from '../../context/TripSplitContext';
import './NewTrip.css';

const NewTrip = props => {

    const { handleAddTrip, handleModals, hideModal } = useContext(TripSplitContext)

    const [friends, setFriends] = useState([{
        id: 1,
        name: 'Guest',
        amountPaid: 0,
        settled: false
    }]);
    const [newFriend, setNewFriend] = useState('');
    const [tripName, setTripName] = useState('');
    const [tripStartDate, setTripStartDate] = useState(null);
    const [tripEndDate, setTripEndDate] = useState(null);
    const [error, setError] = useState(null);

    const handleAddFriend = e => {
        e.preventDefault();
        setError(null);
        if(newFriend === '') {
            setError('Name cannot be empty.')
        } else {
            setFriends([...friends, {
                id: friends[friends.length - 1].id + 1,
                name: newFriend,
                amountPaid: 0,
                settled: false
            }]);
            setNewFriend('');
        }
    }

    const handleDeleteFriend = id => {
        const updatedFriendsList = friends.filter(friend => friend.id !== id );
        setFriends(updatedFriendsList);
    }

    const handleInputChange = e => {
        // Setting all input changes besides friends into one function
        e.target.name === 'tripName' && setTripName(e.target.value);
        e.target.name === 'startDate' && setTripStartDate(e.target.value);
        e.target.name === 'endDate' && setTripEndDate(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        // Create trip object
        const newTrip = {
            tripName,
            friends,
            expenses: [],
            tripStartDate,
            tripEndDate,
            totalAmount: 0
        }
        handleAddTrip(newTrip);
        handleModals(null);
        hideModal();
    }

    return (
        <section className='NewTrip'>
            <h2>Add Trip</h2>
            <form className='new-trip-form'>
                <label htmlFor='trip-name'>Name of Trip:</label>
                <input type='text' id='trip-name' name='tripName' onChange={handleInputChange} required />
                <label htmlFor='add-friends'>Friends on Trip:</label>
                <ul className='friends-list'>
                    {friends.map(friend => {
                        return (
                        <li className='friend-item' key={friend.id}>{friend.name} 
                            {
                                friend.id !== 1 &&
                                <FontAwesomeIcon className='delete-friend-btn' icon={faWindowClose} onClick={() => handleDeleteFriend(friend.id)} />
                            }
                        </li>
                        )
                    })}
                </ul>
                <div id='add-friends'>
                    <input type='text' name='newFriend' value={newFriend} onChange={(e) => setNewFriend(e.target.value)} placeholder={`Friend's Name`} />
                    <button onClick={handleAddFriend}>Add Friend</button>
                    <div className='add-friend-error'>{error}</div>
                </div>
                <div className='dates'>
                    <label htmlFor='start-date'>Start Date:</label>
                    <input type='date' id='start-date' name='startDate' onChange={handleInputChange} required />
                    <label htmlFor='end-date'>End Date:</label>
                    <input type='date' id='end-date' name='endDate' onChange={handleInputChange} required />
                </div>
                <button type='submit' className='add-trip-btn' onClick={(e) => handleSubmit(e)}>Add Trip</button>
            </form>
        </section>
    )
}

export default NewTrip;