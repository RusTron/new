import { createStore, combineReducers } from 'redux';
import { peopleReducer} from './reducers/peopleReducer';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  people: peopleReducer,
  form: formReducer,
});

const store = createStore(rootReducer);
debugger;

console.log(store.getState());

export default store;
