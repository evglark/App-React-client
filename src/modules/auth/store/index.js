import createReducer from '../../../services/createReducer'

export default createReducer({
    token: localStorage.getItem('AuthToken') || sessionStorage.getItem('AuthToken') || null,
    user: JSON.parse(localStorage.getItem('User')) || JSON.parse(sessionStorage.getItem('User')) || null,
    isLoading: false,
    error: {}
});
