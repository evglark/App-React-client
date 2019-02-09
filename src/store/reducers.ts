import {combineReducers} from 'redux'
import authReducer from 'modules/auth/store'

/**
 * @param asyncReducers modules/store/any
 */
export const createReducers = (asyncReducers: any) => {
    return combineReducers({
        authReducer,
        ...asyncReducers,
    })
}