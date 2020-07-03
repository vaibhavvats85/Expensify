import React from 'react';
import '../styles/style.scss';
import 'normalize.css/normalize.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as fromComponents from '../components';
import AddExpense from '../components/AddExpense';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header'


export const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={fromComponents.Expense} exact={true} />
                <Route path="/create" component={AddExpense} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={fromComponents.HelpPage} />
                <Route component={fromComponents.NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);