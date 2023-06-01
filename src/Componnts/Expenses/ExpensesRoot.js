import React, {useState} from 'react';
import './ExpensesRoot.css';
import CardHolder from '../UI/CardHolder';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const ExpensesRoot = (props) => {
    const [selectedYear, setSelectedYear] = useState('2019');
    const filteredYearHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredYearExpenses = props.expenseItems.filter(
        (filtered_expense) => {
            return (
                filtered_expense.date.getFullYear().toString() === selectedYear
            );
        },
    );

    return (
        <React.Fragment>
            <CardHolder className='expenses'>
                <ExpenseFilter
                    filteredYear={selectedYear}
                    onSaveFilter={filteredYearHandler}
                />
                <ExpensesChart filteredExpenseItems={filteredYearExpenses} />

                <ExpensesList filteredExpenses={filteredYearExpenses} />
            </CardHolder>
        </React.Fragment>
    );
};

export default ExpensesRoot;
