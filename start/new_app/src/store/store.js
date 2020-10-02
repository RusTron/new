import { createStore, applyMiddleware, combineReducers } from 'redux';
import { modalReducer } from './reducers/modalReducer';
// import {MODAL1VISIBLE, MODAL1INVISIBLE, MODAL2VISIBLE} from '../variables/forHome';

// const initialState = {
//   modal1Visible: false,
//   y: 1,
// }

const rootReducer = combineReducers({
  modal: modalReducer,
});

const store = createStore(rootReducer);
debugger;

console.log(store.getState());

// store.dispatch({type: 'INCREASE'});




export default store;