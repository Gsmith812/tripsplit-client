import React from 'react';
import './FriendsList.css';

const FriendsList = props => {
    const { trip } = props;

    return (
        <section className='FriendsList'>
            {trip.friends.map(friend => {
                const calcAmtOwed = (trip.totalAmount/3) - friend.amountPaid;                       

                return (
                    <div className='friend-item' key={friend.id}>
                        <div className='friend-summary'>
                            <p>{
                                calcAmtOwed < 0
                                    ? `${friend.name} is owed ${(calcAmtOwed * -1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
                                    : `${friend.name} owes ${calcAmtOwed.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
                            }</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
};

export default FriendsList;