import React from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense } from './../actions/expenses';
import { connect } from 'react-redux';


const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={( { description, amount, createdAt, note } ) => {
            props.dispatch(addExpense({ description, amount, createdAt, note }));
            props.history.push('/');
        }}/>
    </div>
)

export default connect()(AddExpensePage);