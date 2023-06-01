import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // -------------multiple State Slices-------------------
    const [titleInput, setTitleInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [dateInput, setDateInput] = useState('');

    // -------------single State Slices-------------------
    // const [userInputs, setUserInputs] = useState({
    //     titleInput: '',
    //     amountInput: '',
    //     date: '',
    // });

    const handleTitleChange = (event) => {
        setTitleInput(event.target.value);

        // setUserInputs((prevState) => ({
        //     ...prevState,
        //     titleInput: event.target.value,
        // }));
    };
    const handleAmountChange = (event) => {
        setAmountInput(event.target.value);
        // setUserInputs((prevState) => ({
        //     ...prevState,
        //     amountInput: event.target.value,
        // }));
    };
    const handleDateChange = (event) => {
        setDateInput(event.target.value);
        // setUserInputs((prevState) => ({
        //     ...prevState,
        //     dateInput: event.target.value,
        // }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: titleInput,
            amount: +amountInput,
            date: new Date(dateInput),
        };

        props.onAddExpenses(expenseData);

        setTitleInput('');
        setDateInput('');
        setAmountInput('');
    };

    // dissmiss Form
    const formCloseHandler = () => {
        props.onCloseForm();
    };

    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input
                            type='text'
                            name='title'
                            value={titleInput}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input
                            type='number'
                            name='amount'
                            min='0.01'
                            step='0.01'
                            value={amountInput}
                            onChange={handleAmountChange}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input
                            type='date'
                            name='date'
                            min={'2019-01-01'}
                            max={'2023-05-31'}
                            value={dateInput}
                            onChange={handleDateChange}
                        />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button onClick={formCloseHandler}>Cancel</button>
                    <button type='submit'>Add New Expense</button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default ExpenseForm;
