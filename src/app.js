import ReactDOM from 'react-dom';
import {AppRouter} from './routers/AppRouter';
import React from 'react';
import './styles/style.scss';
import 'normalize.css/normalize.css';
import {Provider} from 'react-redux';
import configureStore from './store/configStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
    console.log(state);
});

store.dispatch(addExpense({ description: 'We have rented a wardrobe', amount: 100, createdAt: 10 }));
store.dispatch(addExpense({ description: 'Electricity bill', amount: 300, createdAt: 20 }));
store.dispatch(addExpense({ description: 'Water bill', amount: 19300, createdAt: 12000 }));

const jsx = (
 <Provider store={store}>
     <AppRouter/>
 </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));