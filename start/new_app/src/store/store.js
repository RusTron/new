import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import peopleReducer from './reducers/peopleReducer';
import loadingReducer from './reducers/loadingReducer';

const rootReducer = combineReducers({
  people: peopleReducer,
  loading: loadingReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
