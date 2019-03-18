import createTypeRequest from 'helpers/createTypeRequest'
import {createReducer} from 'store/createReducer'

export const KEY: string = 'auth';
export const AUTH_LOGIN: any = createTypeRequest(`${KEY}-login`);

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
    error: any | IError
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
    token: localStorage.getItem('AuthToken') || sessionStorage.getItem('AuthToken') || null,
    user: JSON.parse(localStorage.getItem('User')) || JSON.parse(sessionStorage.getItem('User')) || null,
    isLoading: false,
    error: {}
};

// Action Handlers
export const actionHandlers = {
    [AUTH_LOGIN.REQUEST]: (state: IInitState): IInitState => ({
        ...state,
        isLoading: true,
        error: {}
    }),
    [AUTH_LOGIN.SUCCESS]: (state: IInitState, { payload }): IInitState => ({
        ...state,
        token: payload.data.token,
        user: payload.data.user,
        isLoading: false,
        error: false
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

export const authStore = createReducer(initState, actionHandlers);
