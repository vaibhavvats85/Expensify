import { createStore } from 'redux';

const initialState = {
    count: 0
}

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ()=>({
    type: 'RESET',
});

const setCount = ({setCountTo})=> ({
    type: 'SET',
    setCountTo
});

// Reducers
// 1. Reducers are pure functions (Do not interact with outside world)
// 2. Never change state or action (instead return a new state)

const countReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: initialState.count
            };
        case 'SET':
            return {
                count: action.setCountTo
            };

        default:
            return state;
    }
};
const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({setCountTo: 101}));