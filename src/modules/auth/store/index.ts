import {RSAA} from 'redux-api-middleware'
import {createReducer} from 'store/createReducer'
import createTypeRequest from 'helpers/createTypeRequest'

const KEY: string = 'auth';
const AUTH_LOGIN: any = createTypeRequest(`${KEY}-login`)

/**
 * Interface for InitState
 * @props {string} token записывается после авторизации и слижут инструментом аутентификации.
 * @props {string} user записывается после авторизации и является карент юзером.
 * @props {boolean} isLoading состояние запроса.
 * @props {any} error обьект ошибки, может быть пустым.
 */
interface IInitState {
    token: string;
    user: any | {};
    isLoading: boolean,
    error: any | {
        status: boolean,
        code: number,
        message: string
    };
}
const initState: IInitState = {
    token: localStorage.getItem('AuthToken') || sessionStorage.getItem('AuthToken') || null,
    user: JSON.parse(localStorage.getItem('User')) || JSON.parse(sessionStorage.getItem('User')) || null,
    isLoading: false,
    error: {}
};

// Actions
export const signIn = (login, password) => ({
    [RSAA]: {
        method: 'POST',
        endpoint: 'http://localhost:4001/api/auth/sign-in',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `email=${login}&password=${password}`,
        types: AUTH_LOGIN.getValues(),
    }
})

// ActionHandlers
const actionHandlers = {
    [AUTH_LOGIN.REQUEST]: (state: IInitState): any => ({ ...state, isLoading: true, error: {} }),
    [AUTH_LOGIN.SUCCESS]: (state: IInitState, { payload }): any => ({
        ...state,
        token: payload.data.token,
        user: payload.data.user,
        isLoading: false,
        error: false
    }),
    [AUTH_LOGIN.FAIL]: (state: IInitState, { payload }): any => ({
        ...state,
        isLoading: false,
        error: {
            status: true,
            code: payload.response.status,
            message: payload.response.message
        }
    })
}

export const authR = createReducer(initState, actionHandlers);
