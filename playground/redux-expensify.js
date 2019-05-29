import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//demo state --> this snippet is uesd nowhere in the program
const demoState = {
    expenses: [{
        id: 'jidofvodvn',
        description: 'Rent',
        note: 'This is the rent expense for June.',
        amount: 9000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //amount or date
        startDate: undefined,
        endDate: undefined
    }
}


const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

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

//CHANGE_FILTER_TEXT
const changeFilterText = ( {text=''} = {} ) => ({
    type: 'CHANGE_FILTER_TEXT',
    text
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SET_START_DATE
const setStartDate = (startDate=undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

//SET_END_DATE
const setEndDate = (endDate=undefined) => ({
    type: 'SET_END_DATE',
    endDate
})

//reducer --> a pure function that that createStore uses to conditionally update store

const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expenses]
        case 'REMOVE_EXPENSE':
            return (
                state.filter((item) => item.id!=action.id)
            )
        case 'EDIT_EXPENSE':
            return (
                state.map((item) => {
                    if(item.id===action.id){
                        return {
                            ... item,
                            ... action.updates
                        }
                    }else{
                        return item
                    }
                })
            )
        default:
            return state;
    }
};
const filtersReducer = ( state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'CHANGE_FILTER_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

//getVisibleExpenses
const getVisibleExpenses = (expenses, { text, startDate, endDate, sortBy} ) => {
    return (
        expenses.filter((expense) => {
            const textFilter=expense.note.toLowerCase().includes(text.toLowerCase())||expense.description.toLowerCase().includes(text.toLowerCase());
            const startDateFilter=startDate<expense.createdAt;
            const endDateFilter=endDate>expense.createdAt;
            return textFilter && startDateFilter && endDateFilter;
        }).sort(( a, b ) => {
            if( (sortBy==='date' && a.createdAt>b.createdAt) || (sortBy==='amount' && a.amount>b.amount) ){
                return -1
            }else if( (sortBy==='date' && a.createdAt<b.createdAt) || (sortBy==='amount' && a.amount<b.amount) ){
                return 1
            }else {
                return 0
            }
        })
    )
}



//the createStore funcion --> this function actually creates a redux store and updates it when an action is dispatched
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

//the subscribe function --> it keeps a watch on store update and updates the app when it detects one
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})



//action dispatchers -->  this function dispathes the action object for different cases
//ADD_EXPENSE
const expenseOne = store.dispatch(addExpense({description: 'Rent',note: 'The rent for month May',amount: '10000',createdAt: 300}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 500, createdAt: 400}));

/*
//REMOVE_EXPENSE
store.dispatch(removeExpense(expenseOne.expenses.id));
*/

//EDIT_EXPENSE
store.dispatch(editExpense( expenseTwo.expenses.id, {description: 'Coffee(hot) rent', note: 'This is the edited coffee'} ));


//CHANGE_FILTER_TEXT
store.dispatch(changeFilterText( {text: 'rent'} ));

//SORT_BY_AMOUNT
store.dispatch(sortByAmount());

//SORT_BY_DATE
store.dispatch(sortByDate());

//SET_START_DATE
store.dispatch(setStartDate(121));

//SET_END_DATE
store.dispatch(setEndDate(500));
