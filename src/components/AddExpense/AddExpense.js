import React from 'react';
import './AddExpense.css';

export default function AddExpense(props) {
    const { friends } = props;
    return (
        <div className='AddExpense'>
            <form className='add-expense-form'>
                <h2>Add Expense</h2>
                <label htmlFor='expense-name'>Name of Expense:</label>
                <input type='text' id='expense-name' name='expenseName' required />
                <label htmlFor='paid-by'>Who paid for this expense?</label>
                <select id='paid-by' required>
                    <option value=''>Select One..</option>
                    {friends.map(friend => {
                        return (
                            <option key={friend.id} value={friend.name}>{friend.name}</option>
                        )
                    })}
                </select>
                <label htmlFor='amount-paid'>Amount:</label>
                <input type='text' id='amount-paid' name='amountPaid' required />
                <button type='submit' className='add-expense-btn'>Add Expense</button>
            </form>
        </div>
    )
}