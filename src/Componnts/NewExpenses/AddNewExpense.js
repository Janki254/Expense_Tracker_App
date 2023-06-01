import React, {useState} from 'react';
import './AddNewExpense.css';
import ExpenseForm from './ExpenseForm';

const AddNewExpense = (props) => {
    // Show Form
    const [openForm, setOpenForm] = useState(false);

    const openFormHandler = () => {
        setOpenForm(true);
    };
    const closeFormHandler = () => {
        setOpenForm(false);
    };
    // Add Expense Item
    const addExpensesHandler = (expenses) => {
        const expensesData = {
            ...expenses,
            id: Math.random().toString(),
        };
        props.onAddinngExpenses(expensesData);
    };
    return (
        <React.Fragment>
            <div className='new-expense'>
                {!openForm && (
                    <button onClick={openFormHandler}>Add New Expenses</button>
                )}
                {openForm && (
                    <ExpenseForm
                        onCloseForm={closeFormHandler}
                        onAddExpenses={addExpensesHandler}
                    />
                )}
            </div>
        </React.Fragment>
    );
};

export default AddNewExpense;
