import {createReducer} from 'store/createReducer'
import {AUTH_REG, AUTH_LOGIN} from './actions'

/**
 * Interface for InitState
 * @props {string} token Записывается после авторизации и слижут инструментом аутентификации.
 * @props {string} user Записывается после авторизации и является карент юзером.
 * @props {boolean} isLoading Состояние запроса.
 * @props {any} error Обьект ошибки, может быть пустым.
 */
export interface IInitState {
    token: string;
    user: any;
    isLoading: boolean,
    error: IError
}

/**
 * Interface for IError
 * @props {boolean} status Статус ошибки.
 * @props {number} code Код запроса.
 * @props {string} message Сообщение ошибки.
 */
interface IError {
    status: boolean,
    code: number,
    message: string
}

// Init State
export const initState: IInitState = {
    token: '',
    user: '',
    isLoading: false,
    error: {
        status: null,
        code: null,
        message: null
    }
};

// Action Handlers
export const actionHandlers = {
    [AUTH_REG.REQUEST]: (state: IInitState): IInitState => ({...state}),
    [AUTH_REG.SUCCESS]: (state: IInitState, { payload }): IInitState => ({...state}),
    [AUTH_REG.FAIL]: (state: IInitState, { payload }): IInitState => ({...state}),
    [AUTH_LOGIN.REQUEST]: (state: IInitState): IInitState => ({
        ...state,
        isLoading: true,
        error: {
            status: null,
            code: null,
            message: null
        }
    }),
    [AUTH_LOGIN.SUCCESS]: (state: IInitState, { payload }): IInitState => ({
        ...state,
        token: payload.data.token,
        user: payload.data.user,
        isLoading: false,
        error: {
            status: null,
            code: null,
            message: null
        }
    }),
    [AUTH_LOGIN.FAIL]: (state: IInitState, { payload }): IInitState => ({
        ...state,
        isLoading: false,
        error: {
            status: true,
            code: payload.response.status,
            message: payload.response.message
        }
    })
};

export const authReducer = createReducer(initState, actionHandlers);
