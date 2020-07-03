import { removeExpense, addExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});


test('should setup add expense action object with given object', () => {
    const expenseData = {
        description: 'Laptop',
        amount: '550000',
        createdAt: 10000,
        note: 'Lenoveo 330s'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});


test('should setup add expense action object with default object', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
        }
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'Lenovo 330s 128TB SSD' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'Lenovo 330s 128TB SSD' }
    })
});