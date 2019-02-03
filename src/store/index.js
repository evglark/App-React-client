import {createStore} from 'redux'
import createReducers from './reducers'

export const asyncReducer = ({store, reducerName, asyncReducer}) => {
    store.asyncReducers[reducerName] = asyncReducer

    const reducer = createReducers(store.asyncReducers)

    store.replaceReducer(reducer)
}
// createReducers(asyncReducers: any): Reducer<{}, AnyAction>
export default (initialState = {}) => {
    const reducers = createReducers();
    const store = createStore(reducers, initialState);

    store.asyncReducers = {};

    return store
}
