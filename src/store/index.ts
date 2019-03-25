import {applyMiddleware, createStore, compose} from 'redux'
import {middlewares} from './middleware'
import {createReducers} from './reducers'

let composeEnhancers = compose;
let Window: any = window;

if (Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
};

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const create_Store = (initialState = {}): any => {
    const store: any = createStore(createReducers(), initialState, enhancer);
    store.asyncReducers = {};

    return store;
}
