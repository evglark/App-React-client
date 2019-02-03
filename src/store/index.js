import { createStore, compose } from 'redux'
import createReducers from './reducers'

let composeEnhancers = compose

if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}

const enhancer = composeEnhancers();

export default (initialState = {}) => {
    const store = createStore(createReducers(), initialState, enhancer)

    store.asyncReducers = {}
    return store
}

export const injectAsyncReducer = (store, reducerName, asyncReducer) => {
    if (!store.asyncReducers[reducerName]) {
        console.log(`[IAR] reducer with name "${reducerName}" already in use`)
    }

    store.asyncReducers[reducerName] = asyncReducer;
    const reducer = createReducers(store.asyncReducers);
    store.replaceReducer(reducer);
}
