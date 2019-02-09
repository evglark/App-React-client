import createReducer from 'utils/createReducer'

const initState = {
    data: [],
    meta: {},
    isLoading: false,
    receivedAt: null,
    error: null
};

const actionHandlers = {
    // [action.REQUEST]: state => ({...state}),
    // [action.SUCCESS]: (state, { payload }) => ({...state}),
    // [action.FAIL]: (state, { payload }) => ({...state}),
}

export default createReducer(initState, actionHandlers);
