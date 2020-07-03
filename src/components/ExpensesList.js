import { connect } from 'react-redux';
import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpensesList = (props) => (
    <div>
        <h1>Expenses List</h1>
        {props.expenses.map((item, index) => {
            return <ExpenseListItem 
                {...item}
            />
        })
        }
    </div>
);


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesList);