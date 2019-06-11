import {combineReducers} from 'redux'
// import {__module} from 'modules/__module/store'

/**
 * @param asyncReducers modules/store/any
 */
export const createReducers = (asyncReducers = {}) => {
    return combineReducers({
        ...asyncReducers,
    })
};
