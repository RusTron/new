import { createStore, applyMiddleware } from 'redux';

const initialState = {
  x: 1,
  y: 1,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        x: state.x + 1,
      };
    default:
      return state;
  }
}
const store = createStore(rootReducer, initialState);
debugger;

console.log(store.getState());

// store.dispatch({type: 'INCREASE'});




export default store;