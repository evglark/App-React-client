import {RSAA} from 'redux-api-middleware'
import {createTypeRequest} from 'helpers/createTypeRequest'

export const KEY: string = 'AUTH';
export const AUTH_REG = createTypeRequest(`${KEY}-REG`);
export const AUTH_LOGIN = createTypeRequest(`${KEY}-LOGIN`);

/**
 * Interface for IAuthActions
 * @props {Function} [signUp] Регистрация пользователя.
 * @props {Function} [signIn] Авторизация пользователя.
 */
export interface IAuthActions {
    signUp?: (email: string, password: string, firstName: string, lastName: string) => any;
    signIn?: (email: string, password: string) => any;
}

export const signUp = (email: string, password: string, firstName: string, lastName: string): any => {
    return ({
        [RSAA]: {
            method: 'POST',
            endpoint: 'http://localhost:4001/api/auth/sign-up',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `email=${email}&password=${password}&firstName=${firstName}&lastName=${lastName}`,
            types: AUTH_REG.getValues()
        }
    });
};

export const signIn = (email: string, password: string) => {
    return ({
        [RSAA]: {
            method: 'POST',
            endpoint: 'http://localhost:4001/api/auth/sign-in',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `email=${email}&password=${password}`,
            types: AUTH_LOGIN.getValues(),
        }
    });
};
