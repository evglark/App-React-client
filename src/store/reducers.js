import {combineReducers} from 'redux'
import authReducer from 'modules/auth/store'

export default (asyncReducers) => combineReducers({
    authReducer,
    ...asyncReducers,
})
