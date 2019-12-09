import { createReducers } from "./reducers";

export const injectAsyncReducer = (props) => {
    const { asyncReducer, reducerName, store } = props;

    if (!store.asyncReducers[reducerName]) {
        console.info(`[IAR] reducer with name "${reducerName}" already in use`, 'background: #222; color: #bada55');
    }

    store.asyncReducers[reducerName] = asyncReducer;
    const reducer = createReducers(store.asyncReducers);
    store.replaceReducer(reducer);
};
