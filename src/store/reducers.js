import { combineReducers } from "redux";
import { authReducer } from "modules/auth/store";
/**
 * @param asyncReducers modules/Store/any
 */
export const createReducers = (asyncReducers = {}) => {
    return combineReducers({
        authReducer,
        ...asyncReducers,
    });
};
