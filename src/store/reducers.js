import {combineReducers} from 'redux'
import authReducer from '../auth/store/index'

export default asyncReducers => combineReducers({
    authReducer,
    ...asyncReducers,
})
