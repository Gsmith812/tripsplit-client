import React, { useState } from 'react';
import './AddExpense.css';

export default function AddExpense(props) {

    const { friends } = props;

    const [paidBy, setPaidBy] = useState('');
    const [friendsIncluded, setFriendsIncluded] = useState([]);
    const [splitType, setSplitType] = useState('');
    const [itemizedList, setItemizedList] = useState([]);
    const [percentageList, setPercentageList] = useState([]);

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

    const handleFriendsSplit = () => {
        if(splitType === 'Itemized') {
            const itemizedFriendsIncluded = [];
            itemizedFriendsIncluded.push({[paidBy]: 0});
            friendsIncluded.forEach(f => {
                itemizedFriendsIncluded.push({[f.name]: 0})
                return itemizedFriendsIncluded;
            });
            setItemizedList(itemizedFriendsIncluded);
        }
        else if(splitType === 'Percentage') {
            const percentageFriendsIncluded = [];
            percentageFriendsIncluded.push({[paidBy]: 0});
            friendsIncluded.forEach(f => {
                percentageFriendsIncluded.push({[f.name]: 0});
                return percentageFriendsIncluded;
            });
            setPercentageList(percentageFriendsIncluded);
        }
    }

    const handleSplitType = (e) => {
        setSplitType(e.target.value);
        setItemizedList([]);
        setPercentageList([]);
    }

    const handleAddExpense = e => {
        e.preventDefault();
        const { expenseName, amountPaid, splitType } = e.target;
        const newExpense = {
            expenseName: expenseName.value,
            amount: amountPaid.value,
            paidBy,
            splitType: splitType.value,
            friendsIncluded
        };
    }

    const handleItemization = (e, friend) => {
        setItemizedList(
            {
                [friend]: e.target.value
            }
        ) 
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
                <select id='paid-by' name='paidBy' onChange={(e) => setPaidBy(e.target.value)} required>
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
                            <div className='friend-split'>
                                <label htmlFor='split-percentage'>
                                    {paidBy}
                                </label>
                                <input type='percentage' id='split-percentage' name='splitPercentagePaidBy' required />
                            </div>
                            {friendsIncluded.map((f, i) => {
                                return (
                                    <div className='friend-split' key={f.id}>
                                        <label htmlFor='split-percentage'>
                                            {f.name}
                                        </label>
                                        <input type='percentage' id='split-percentage' name={`splitPercentage`+ i} onChange={(e) => handleItemization(e, f.name)} required />
                                    </div>
                                )
                            })}
                        </section>
                    )
                }
                {
                    splitType === 'Itemized' && (
                        <section className='split-form'>
                            <div className='friend-split'>
                                <label htmlFor='itemized-split'>
                                    {paidBy}
                                </label>
                                <input type='number' id='itemized-split' name='itemizedSplitPaidBy' required />
                            </div>
                            {friendsIncluded.map((f, i) => {
                                return (
                                    <div className='friend-split' key={f.id}>
                                        <label htmlFor='itemized-split'>
                                            {f.name}
                                        </label>
                                        <input type='number' id='itemized-split' value={itemizedList[f.name]} name={`itemizedSplit`+ i} onChange={(e) => handleItemization(e, f.name)} required />
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