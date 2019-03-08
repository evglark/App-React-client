import {combineReducers} from 'redux'
import {authStore as authReducers} from 'modules/auth/store'

/**
 * @param asyncReducers modules/store/any
 */
export const createReducers = (asyncReducers) => {
    return combineReducers({
        authReducers,
        ...asyncReducers,
    })
};
