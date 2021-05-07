import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = props => {
    const { exp } = props;
    return (
        <div className='expense-item' key={exp.id}>
            <div className='expense-field'>
                <span className='left-col'>{exp.expenseName}</span>
                <span className='center-col'>{exp.paidBy}</span>
                <span className='right-col'>{exp.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            </div>
        </div>
    )
}

export default ExpenseItem;