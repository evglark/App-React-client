import {combineReducers} from 'redux'
import {authR as authReducers} from 'modules/auth/store'

/**
 * @param asyncReducers modules/store/any
 */
export const createReducers = (asyncReducers: any) => {
    return combineReducers({
        authReducers,
        ...asyncReducers,
    })
}