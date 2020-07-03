import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should add expense to state', () => {
    const state = expenseReducer(undefined, {
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    });
    expect(state).toEqual([expenses[0]]);
});

test('should remove expense from state', () => {
    const state = expenseReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    });
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should edit expense to state', () => {
    const updates = {
        description: 'Cell phone',
    }
    const state = expenseReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: updates
    });
    expect(state[1].description).toBe(updates.description);
});

