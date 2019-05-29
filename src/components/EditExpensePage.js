import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from './../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm defaultValues={props.expenses.find((expense) => expense.id===props.match.params.id)}
            onSubmit={( { description, amount, createdAt, note } ) => {
                props.dispatch(editExpense( props.match.params.id, { description, amount, createdAt, note } ));
                props.history.push('/');
            }}/>
            <button onClick={() => {
                props.dispatch(removeExpense(props.match.params.id))
                props.history.push('/');
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(EditExpensePage);