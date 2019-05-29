import uuid from 'uuid';

//action generators --> functions that return action objects
// ADD_EXPENSE
const addExpense = ( {description='', note='', amount=0, createdAt=0 } = {} ) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ( id=0 ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


export { addExpense, removeExpense, editExpense };