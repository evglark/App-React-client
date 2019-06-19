import {AuthForm} from './components/AuthForm'
import {RegistrationForm} from './components/RegistrationForm'
import {authReducer} from './store'

export const Components = {
    AuthForm,
    RegistrationForm
};

export const Store = authReducer;

export const authModule = {Components, Store};
