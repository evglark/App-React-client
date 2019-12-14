import {RSAA} from 'redux-api-middleware'
import {createTypeRequest} from 'Services/typeRequest'

const API_LINK = 'http://localhost:4001/api';

export const KEY: string = 'MAIN';
export const MAIN_SOME = createTypeRequest(`${KEY}-SOME`);

/**
 * Interface for IAuthActions
 * @props {Function} [someFunc] Регистрация пользователя.
 */
export interface IAuthActions {
    someFunc?: (props: any) => {};
}

export const someFunc = (props: any): {} => {
    return ({
        [RSAA]: {
            method: 'POST',
            endpoint: `${API_LINK}/auth/sign-up`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: '#1',
            types: MAIN_SOME.getValues(),
        }}
    );
};
