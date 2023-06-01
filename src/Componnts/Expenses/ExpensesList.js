import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    if (props.filteredExpenses.length === 0) {
        return <h2 className='expense-list__fallback'>No expense found</h2>;
    }

    return (
        <React.Fragment>
            <ul className='expense-list'>
                {props.filteredExpenses.map((item) => (
                    <ExpenseItem
                        key={item.id}
                        date={item.date}
                        title={item.title}
                        amount={item.amount}
                    />
                ))}
            </ul>
        </React.Fragment>
    );
};

export default ExpensesList;
