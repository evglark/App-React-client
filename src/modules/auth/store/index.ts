import {RSAA} from 'redux-api-middleware'
import {createReducer} from 'store/createReducer'
import createTypeRequest from 'helpers/createTypeRequest'

const KEY: string = 'auth';
const AUTH_LOGIN: any = createTypeRequest(`${KEY}-login`);

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
const initState: IInitState = {
    token: localStorage.getItem('AuthToken') || sessionStorage.getItem('AuthToken') || null,
    user: JSON.parse(localStorage.getItem('User')) || JSON.parse(sessionStorage.getItem('User')) || null,
    isLoading: false,
    error: {}
};

// Actions
export const signIn = (email: string, password: string): any => ({
    [RSAA]: {
        method: 'POST',
        endpoint: 'http://localhost:4001/api/auth/sign-in',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `email=${email}&password=${password}`,
        types: AUTH_LOGIN.getValues(),
    }
});

// Action Handlers
const actionHandlers = {
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
