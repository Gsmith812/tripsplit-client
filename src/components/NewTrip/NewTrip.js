import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './NewTrip.css';

const NewTrip = props => {

    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState('');
    const [error, setError] = useState(null);

    const handleAddFriend = e => {
        e.preventDefault();
        setError(null);
        if(newFriend === '') {
            setError('Name cannot be empty.')
        } else {
            setFriends([...friends, {id: friends.length + 1, name: newFriend}]);
            setNewFriend('');
        }
    }

    const handleDeleteFriend = id => {
        const updatedFriendsList = friends.filter(friend => friend.id !== id );
        setFriends(updatedFriendsList);
    }

    return (
        <section className='NewTrip'>
            <h2>Add Trip</h2>
            <form className='new-trip-form'>
                <label htmlFor='trip-name'>Name of Trip:</label>
                <input type='text' id='trip-name' name='tripName' required />
                <label htmlFor='add-friends'>Friends on Trip:</label>
                <ul className='friends-list'>
                    {friends.map(friend => {
                        return (
                            <li className='friend-item' key={friend.id}>{friend.name} <FontAwesomeIcon className='delete-friend-btn' icon={faWindowClose} onClick={() => handleDeleteFriend(friend.id)} /></li>
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