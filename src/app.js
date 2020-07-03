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

const jsx = (
 <Provider store={store}>
     <AppRouter/>
 </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));