import {createReducers} from './reducers'

export const injectAsyncReducer = (asyncReducer: Function, reducerName: string, store: any): void => {
    !store.asyncReducers[reducerName] &&
        console.info(`[IAR] reducer with name "${reducerName}" already in use`);

    store.asyncReducers[reducerName] = asyncReducer;
    const reducer = createReducers(store.asyncReducers);
    store.replaceReducer(reducer);
}
