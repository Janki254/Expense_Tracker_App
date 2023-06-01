import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import CardHolder from '../UI/CardHolder';

const ExpenseItem = (props) => {
    const expenseDate = props.date;
    const expenseItemTitle = props.title;
    const expenseAmount = props.amount;

    return (
        <React.Fragment>
            <li>
                <CardHolder className='expense-item'>
                    <ExpenseDate date={expenseDate} />
                    <div className='expense-item__description'>
                        <h2>{expenseItemTitle}</h2>
                        <div className='expense-item__price'>
                            ${expenseAmount}
                        </div>
                    </div>
                </CardHolder>
            </li>
        </React.Fragment>
    );
};
export default ExpenseItem;
