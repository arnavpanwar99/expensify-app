import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from './../selectors/expenses'

const ExpensesList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => <ExpenseListItem {...expense} key={expense.id}/>)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses( state.expenses, state.filters )
    }
}

export default connect(mapStateToProps)(ExpensesList);