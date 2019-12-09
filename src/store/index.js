import { applyMiddleware, compose, createStore } from "redux";
import { middleware } from "./middleware";
import { createReducers } from "./reducers";

let composeEnhancers = compose;
const Window = window;

if (Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const initStore = (initialState = {}) => {
    const store = createStore(createReducers(), initialState, enhancer);
    store.asyncReducers = {};
    return store;
};
