import {AuthCommonBoard} from './boards/common'
import {AuthForm} from './components/AuthForm'
import {RegistrationForm} from './components/RegistrationForm'
import {authReducer} from './store'

export const Boards = {AuthCommonBoard};

export const Components = {
    AuthForm,
    RegistrationForm
};

export const Store = authReducer;

export const authModule = {Boards, Components, Store};
