import {createReducers} from './reducers'

interface IProps {
    asyncReducer: Function;
    reducerName: string;
    store: any;
}

export const injectAsyncReducer = (props: IProps): void => {
    const {asyncReducer, reducerName, store} = props;
    !store.asyncReducers[reducerName] &&
        console.info(`[IAR] reducer with name "${reducerName}" already in use`);

    store.asyncReducers[reducerName] = asyncReducer;
    const reducer = createReducers(store.asyncReducers);
    store.replaceReducer(reducer);
};
