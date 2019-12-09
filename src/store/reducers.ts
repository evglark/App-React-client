import {combineReducers} from 'redux'
// import {authReducer} from 'Modules/auth/store'

/**
 * @param asyncReducers Modules/store/any
 */
export const createReducers = (asyncReducers = {}) => {
    return combineReducers({
        // authReducer,
        ...asyncReducers,
    })
};
