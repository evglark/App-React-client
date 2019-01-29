import {createStore} from 'redux'
import createReducers from './reducers'

export default (initialState = {}) => {
    const reducers = createReducers();
    const store = createStore(reducers, initialState);

    store.asyncReducers = {};

    return store
}
