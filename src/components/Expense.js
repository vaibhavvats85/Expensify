import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilter from './ExpensesListFilter';
export const Expense = () => (
    <div>
        <ExpensesListFilter />
        <ExpensesList />
    </div>
);