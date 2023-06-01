import React, {useState} from 'react';
import './App.css';

import ExpensesRoot from './Componnts/Expenses/ExpensesRoot';
import AddNewExpense from './Componnts/NewExpenses/AddNewExpense';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
    {
        id: 'e5',
        title: 'Health Insurance',
        amount: 280.87,
        date: new Date(2019, 3, 19),
    },
];

const App = () => {
    const [expenseList, setExpenseList] = useState(DUMMY_EXPENSES);

    const addExpensesDataHandler = (newExpense) => {
        setExpenseList((prevState) => [newExpense, ...prevState]);
    };

    return (
        <React.Fragment>
            <div className='title'>
                <h1>Let's Get Started!.</h1>
            </div>
            <AddNewExpense onAddinngExpenses={addExpensesDataHandler} />

            <ExpensesRoot expenseItems={expenseList} />
        </React.Fragment>
    );
    /*--------------Alternative to JSX code----------------------
     return React.createElement(
        'div',
        {},
        React.createElement('h2', {}, "Let's get Started "),
        React.createElement(ExpensesRoot, {expenseItems: expenses}),
    );
    */
};

export default App;
