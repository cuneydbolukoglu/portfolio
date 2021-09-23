import { createStore } from 'redux';
function foodReducer(state = 'elma', action) {
    return state;
}

const store = createStore(foodReducer);
console.log(store.getState());