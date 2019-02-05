import createReducer from 'utils/createReducer'

const initState = {
    token: localStorage.getItem('AuthToken') || sessionStorage.getItem('AuthToken') || null,
    user: JSON.parse(localStorage.getItem('User')) || JSON.parse(sessionStorage.getItem('User')) || null,
    isLoading: false,
    error: {}
};

const actionHandlers = {
    // [action.REQUEST]: state => ({...state}),
    // [action.SUCCESS]: (state, { payload }) => ({...state}),
    // [action.FAIL]: (state, { payload }) => ({...state}),
}

export const authReducer = createReducer(initState, actionHandlers);
