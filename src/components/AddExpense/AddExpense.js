import React, { useContext, useState } from 'react';
import TripSplitContext from '../../context/TripSplitContext';
import './AddExpense.css';

export default function AddExpense(props) {

    const { friends } = props.trip;

    const { handleNewExpense } = useContext(TripSplitContext);

    const [paidBy, setPaidBy] = useState('');
    const [friendsIncluded, setFriendsIncluded] = useState([]);
    const [splitType, setSplitType] = useState('');
    const [friendSplitList, setFriendSplitList] = useState([]);

    const handleCheckBox = (e, friend) => {
        if(friendsIncluded.length === 0) {
            setFriendsIncluded([friend]);
        } else if(e.target.checked) {
            setFriendsIncluded([...friendsIncluded, friend]);
        } else {
            const removeFriend = friendsIncluded.filter(f => f.id !== friend.id);
            setFriendsIncluded(removeFriend);
        }
    }

    const handlePaidBy = e => {
        setFriendsIncluded([]);
        setPaidBy(e.target.value);
    }

    const handleSplitType = (e) => {
        setSplitType(e.target.value);
        setFriendSplitList([]);
        const friendSplitIncluded = [];
        friendSplitIncluded.push({ name: paidBy,amount: 0})
        friendsIncluded.forEach(f => {
            friendSplitIncluded.push({name: f.name ,amount: 0});
            return friendSplitIncluded;
        });
        setFriendSplitList(friendSplitIncluded);
    }

    const handleAddExpense = e => {
        e.preventDefault();
        const { expenseName, amountPaid, splitType } = e.target;
        const newExpense = {
            expenseName: expenseName.value,
            amount: parseFloat(amountPaid.value),
            paidBy,
            splitType: splitType.value,
            friendsIncluded
        };
        if(splitType.value === 'Itemized') {
            newExpense.itemizedAmounts = friendSplitList;
        }
        if(splitType.value === 'Percentage') {
            newExpense.percentageAmounts = friendSplitList;
        }
        handleNewExpense(newExpense, props.trip.id);
    }

    const handleSplitPercentages = (e, index) => {
        friendSplitList[index] = {...friendSplitList[index], amount: parseFloat(e.target.value)};
        setFriendSplitList([...friendSplitList]);
    }

    const handleSplitItemized = (e, index) => {
        friendSplitList[index] = {...friendSplitList[index], amount: parseFloat(e.target.value)};
        setFriendSplitList([...friendSplitList]);
    }

    return (
        <div className='AddExpense'>
            <form className='add-expense-form' onSubmit={(e) => handleAddExpense(e)}>
                <h2>Add Expense</h2>
                <label htmlFor='expense-name'>Name of Expense:</label>
                <input type='text' id='expense-name' name='expenseName' required />
                <section className='amount-paid'>
                    <label htmlFor='amount-paid'>Amount:</label>
                    <input type='text' id='amount-paid' name='amountPaid' required />
                </section>
                <label htmlFor='paid-by'>Who paid for this expense?</label>
                <select id='paid-by' name='paidBy' onChange={(e) => handlePaidBy(e)} required>
                    <option value=''>Select One..</option>
                    {friends.map(friend => {
                        return (
                            <option key={friend.id} value={friend.name}>{friend.name}</option>
                        )
                    })}
                </select>
                {
                    paidBy !== '' && (
                        <div className='friends-included'>
                            <p>Which friends are included on this expense?</p>
                            {friends.map(friend => {
                                return (
                                    friend.name !== paidBy && (
                                    <label onClick={(e) => handleCheckBox(e, friend)}  key={friend.id}>
                                        <input type='checkbox' className='friend-item' value={friend.name} name='onExpense' />
                                        {friend.name}
                                    </label>
                                ))
                            })}
                            <label htmlFor='split-type'>How is it split?</label>
                            <select id='split-type' name='splitType' onChange={(e) => handleSplitType(e)} required>
                                <option value=''>Select one...</option>
                                <option value='Equally'>Equally</option>
                                <option value='Percentage'>Percentage</option>
                                <option value='Itemized'>Itemized</option>
                            </select>
                        </div>
                    )
                }
                {
                    splitType === 'Percentage' &&
                    (
                        <section className='split-form'>
                            {friendSplitList.map((f, i) => {
                                return (
                                    <div className='friend-split' key={i}>
                                        <label htmlFor='split-percentage'>
                                            {f.name}
                                        </label>
                                        <input type='percentage' id='split-percentage' value={f.amount} onChange={(e) => handleSplitPercentages(e, i)} name={`splitPercentage`+ i} required />
                                    </div>
                                )
                            })}
                        </section>
                    )
                }
                {
                    splitType === 'Itemized' && (
                        <section className='split-form'>
                            {friendSplitList.map((f, i) => {
                                return (
                                    <div className='friend-split' key={i}>
                                        <label htmlFor='itemized-split'>
                                            {f.name}
                                        </label>
                                        <input type='number' id='itemized-split' name={`itemizedSplit`+ i} value={f.amount} onChange={(e) => handleSplitItemized(e, i)} required />
                                    </div>
                                )
                            })}
                        </section>
                    )
                }
                <button type='submit' className='add-expense-btn'>Add Expense</button>
            </form>
        </div>
    )
}