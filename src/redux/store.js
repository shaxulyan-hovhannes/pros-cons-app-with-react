import { createStore, combineReducers } from 'redux';
import prosCons from 'redux/prosCons/reducers';

const reducers = combineReducers({
    prosCons
});

const store = createStore(reducers);

export default store;