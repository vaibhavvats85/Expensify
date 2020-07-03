import filterReducers from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filterReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducers(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const state = filterReducers(undefined, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set set text filter', () => {
    const text = 'Rent'
    const state = filterReducers(undefined, {
        type: 'SET_TEXT_FILTER',
        text
    });
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const startDate = moment().startOf('month');
    const state = filterReducers(undefined, {
        type: 'SET_START_DATE',
        startDate
    });
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment().endOf('month');
    const state = filterReducers(undefined, {
        type: 'SET_END_DATE',
        endDate
    });
    expect(state.endDate).toEqual(endDate);
});