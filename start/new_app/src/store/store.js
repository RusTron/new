import { createStore, combineReducers } from 'redux';
import { peopleReducer} from './reducers/peopleReducer';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  people: peopleReducer,
  form: formReducer,
});
const store = createStore(rootReducer);

export default store;
