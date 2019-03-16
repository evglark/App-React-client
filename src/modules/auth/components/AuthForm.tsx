import React from 'react'
import {connect} from 'react-redux'
import * as _ from 'lodash'
import {IInitState, signIn} from '../store'

/**
 * Interface for IError
 * @props {user} user Статус ошибки.
 * @props {token} token Код запроса.
 * @props {history} history Сообщение ошибки.
 */
interface Props extends IInitState {
    history: any;
    signIn: (email: string, password: string) => void;
}

/**
 * Interface for IError
 * @props {string} email Поле - емаил пользователя.
 * @props {string} password Поле - пароль пользователя.
 * @props {boolean} rememberPass Чекбокс - запомнить пароль.
 */
interface State {
    email: string;
    password: string;
    rememberPass: boolean;
}

class __AuthForm extends React.Component<Props, State> {
    public state: State = {
        email: '',
        password: '',
        rememberPass: true
    };

    private setEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({email: e.target.value});
    };

    private setPassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({password: e.target.value});
    };

    private setRememberPass = (): void => {
        this.setState({rememberPass: !this.state.rememberPass});
    };

    private addDataToLocalStorage = (authToken: string, user: any): void => {
        localStorage.setItem('AuthToken', authToken);
        localStorage.setItem('User', JSON.stringify(user));
    };

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(this.state.email, this.state.password);
        this.props.signIn(this.state.email, this.state.password);
    };

    private addDataToSessionStorage = (authToken: string, user: any): void => {
        sessionStorage.setItem('AuthToken', authToken);
        sessionStorage.setItem('User', JSON.stringify(user));
    };

    public componentWillReceiveProps(nextProps: Props): void {
        if (!_.equals(this.props.user, nextProps.user)) {
            if(this.state.rememberPass) {
                this.addDataToLocalStorage(nextProps.token, nextProps.user);
            } else this.addDataToSessionStorage(nextProps.token, nextProps.user);
            nextProps.history.push('/user');
        }
    };

    public render(): JSX.Element {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="login"
                        value={this.state.email}
                        onChange={this.setEmail}
                        placeholder="login"
                    /><br />

                    <input
                        type="text"
                        name="login"
                        value={this.state.password}
                        onChange={this.setPassword}
                        placeholder="password"
                    /><br />

                    <input
                        type='checkbox'
                        name='checkForRemember'
                        checked={this.state.rememberPass}
                        onChange={this.setRememberPass}
                    />
                    <label htmlFor='checkForRemember'>Remember my password</label>
                    <br />

                    <input
                        type="submit"
                        className="fadeIn fourth"
                        value="Log In"
                    />
                </form>
            </div>
        )
    }
}

const mapState = (props) => props.authReducers;

const mapDispatch = dispatch => ({
    signIn: (email, password) => () => {
        dispatch(signIn(email, password))
    }
});

export const AuthForm = connect(mapState, mapDispatch)(__AuthForm);
