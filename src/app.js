import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import 'normalize.css/normalize.css'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
const store = configureStore();
import moment from 'moment';

store.dispatch(addExpense( {description: 'Electricity bill', note: 'The electricity bill for the month of June', amount: 3000} ));
store.dispatch(addExpense( {description: 'Gas bill', note: 'This is the gas bill for the month of June.', amount: 1000} ));
store.dispatch(addExpense({description: 'Rent', amount: 9000, createdAt: 7667}));
store.dispatch(addExpense({description: 'Misc', amount: 500, createdAt: 1559063906693}))

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));