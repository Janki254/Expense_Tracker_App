import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const yearChangeHandler = (e) => {
        props.onSaveFilter(e.target.value);
    };

    return (
        <React.Fragment>
            <div className='expenses-filter'>
                <div className='expenses-filter__control'>
                    <label>Filter By Year</label>
                    <select
                        value={props.filteredYear}
                        onChange={yearChangeHandler}
                    >
                        <option value={2019}>2019</option>
                        <option value={2020}>2020</option>
                        <option value={2021}>2021</option>
                        <option value={2022}>2022</option>
                        <option value={2023}>2023</option>
                    </select>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ExpenseFilter;
