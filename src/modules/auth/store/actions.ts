import {RSAA} from 'redux-api-middleware'
import {createTypeRequest} from 'helpers/createTypeRequest'

export const KEY: string = 'auth';
export const AUTH_LOGIN = createTypeRequest(`${KEY}-login`);

export interface IAuthActions {
    signIn: (email: string, password: string) => any;
}

export const signIn = (email: string, password: string): any => ({
    [RSAA]: {
        method: 'POST',
        endpoint: 'http://localhost:4001/api/auth/sign-in',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `email=${email}&password=${password}`,
        types: AUTH_LOGIN.getValues(),
    }
});
