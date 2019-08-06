import React from 'react'
import {connect} from 'react-redux'
import * as _ from 'lodash'
import {Input} from 'Components/common/Input'
import {IAuthActions, IInitState, signIn} from '../store'

/**
 * Interface for IError
 * @props {history} history Объект для редиректа.
 */
interface IProps {
    history: any;
}

/**
 * Interface for IError
 * @props {string} login Поле - логин пользователя.
 * @props {string} password Поле - пароль пользователя.
 * @props {boolean} rememberPass Чекбокс - запомнить пароль.
 */
interface IAuthFormState {
    login: string;
    password: string;
    rememberPass: boolean;
}

type IAuthFormProps = IProps & IInitState & IAuthActions;

class __AuthForm extends React.Component<IAuthFormProps, IAuthFormState> {
    static state: IAuthFormState;
    private constructor(props: IAuthFormProps) {
        super(props);
        this.state = {
            login: '',
            password: '',
            rememberPass: true
        };
    };

    public componentWillReceiveProps(nextProps: IAuthFormProps): void {
        if (!(_.isEqual(this.props.user, nextProps.user))) {
            if(this.state.rememberPass) {
                const {token, user} = nextProps;
                localStorage.setItem('AuthToken', token);
                localStorage.setItem('User', JSON.stringify(user));
            } else {
                const {token, user} = nextProps;
                sessionStorage.setItem('AuthToken', token);
                sessionStorage.setItem('User', JSON.stringify(user));
            }
            nextProps.history.push('/user');
        }
    };

    public setLogin = (value: string): void => {
        this.setState({login: value});
    };

    public setPassword = (value: string): void => {
        this.setState({password: value});
    };

    public setRememberPass = (): void => {
        this.setState({rememberPass: !this.state.rememberPass});
    };

    public handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.props.signIn(this.state.login, this.state.password);
    };

    public render(): JSX.Element {
        const {login , password, rememberPass} = this.state;

        const regexp = /^[a-zA-Z0-9._\b]+$/;
        const invalidLogin = !login || !regexp.test(login);
        const invalidPassword = !password || !regexp.test(password);
        const submitDisabled = invalidLogin || invalidPassword;

        const inputsLoginForm = [{
            id: 'login',
            name: 'Login',
            value: login,
            placeholder: 'Enter your login',
            setter: this.setLogin,
            regexp
        }, {
            id: 'password',
            name: 'Password',
            value: password,
            placeholder: 'Enter your password',
            setter: this.setPassword,
            regexp
        }];

        return (
            <div>
                <form id='login-form' onSubmit={this.handleSubmit}>
                    {inputsLoginForm.map((item, i) => <Input {...item} key={`key-${i}-${item.id}`} />)}
                    <input type='checkbox' name='checkForRemember'
                           checked={rememberPass} onChange={this.setRememberPass} />
                    <label htmlFor='checkForRemember'>Remember my password</label>
                </form>
                <input value="Log In" type="submit" className="fadeIn fourth" form='login-form' disabled={submitDisabled} />
            </div>
        )
    }
}

const mapState = (state): IInitState => state.authReducer;

const mapDispatch = (dispatch): IAuthActions => ({
    signIn: (login: string, password: string) => {
        dispatch(signIn(login, password));
    }
});

export const AuthForm = connect(mapState, mapDispatch)(__AuthForm);
