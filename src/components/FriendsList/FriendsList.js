import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './FriendsList.css';

const FriendsList = props => {
    const { trip } = props;

    const [open, setOpen] = useState(false);
    const [id, setId] = useState();

    const handleOpenedFriendItem = friendId => {
        if(friendId === id) {
            setOpen(!open);
            setId(null);
        } else {
            setOpen(true);
            setId(friendId);
        }
    }

    return (
        <section className='FriendsList'>
            {trip.friends.map(friend => {                      
                return (
                    <div className='friend-item' key={friend.id}>
                        <div className='friend-summary'>
                            <h2 onClick={() => handleOpenedFriendItem(friend.id)}>{friend.name}  <FontAwesomeIcon icon={faAngleDown} /></h2>
                            {(open && (id === friend.id)) && 
                            (friend.amountOwed
                                    ? Object.keys(friend.amountOwed).map(item => {
                                        return (
                                           <div className='amount-owed'>
                                               {friend.amountOwed[item] < 0 
                                                    ? `${item} owes ${friend.name} ${Math.abs(friend.amountOwed[item]).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
                                                    : `${friend.name} is owed ${friend.amountOwed[item].toLocaleString('en-US', { style: 'currency', currency: 'USD' })} by ${item}`
                                                }
                                           </div> 
                                        )
                                    })
                                    : `No amounts to settle!`
                            )}
                        </div>
                    </div>
                )
            })}
        </section>
    )
};

export default FriendsList;