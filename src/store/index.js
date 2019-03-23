import {applyMiddleware, createStore, compose} from 'redux'
import {middlewares} from './middleware'
import {createReducers} from './reducers'

let composeEnhancers = compose;

if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default (initialState = {}) => {
    const store = createStore(createReducers(), initialState, enhancer);

    store.asyncReducers = {};
    return store
}
