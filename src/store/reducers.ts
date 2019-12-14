import {combineReducers} from 'redux'

import {mainReducer} from 'Modules/main/store'

/**
 * @param asyncReducers Modules/store/any
 */
export const createReducers = (asyncReducers = {}) => {
    return combineReducers({
        mainReducer,
        ...asyncReducers,
    })
};
