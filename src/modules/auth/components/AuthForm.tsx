import React from 'react'
import {connect} from 'react-redux'
import * as _ from 'lodash'
import {IInitState} from '../store'
import {IAuthActions, signIn} from '../store/actions'

/**
 * Interface for IError
 * @props {history} history Сообщение ошибки.
 */
interface IProps {
    history: any;
}

/**
 * Interface for IError
 * @props {string} email Поле - емаил пользователя.
 * @props {string} password Поле - пароль пользователя.
 * @props {boolean} rememberPass Чекбокс - запомнить пароль.
 */
interface IState {
    email: string;
    password: string;
    rememberPass: boolean;
}

type IAuthFormProps = IProps & IInitState & IAuthActions;

class __AuthForm extends React.Component<IAuthFormProps, IState> {
    public state: IState = {
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

    private addDataToSessionStorage = (authToken: string, user: any): void => {
        sessionStorage.setItem('AuthToken', authToken);
        sessionStorage.setItem('User', JSON.stringify(user));
    };

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        const {email, password} = this.state;
        e.preventDefault();

        this.props.signIn(email, password);
    };

    public componentWillReceiveProps(nextProps: IAuthFormProps): void {
        if (!(_.isEqual(this.props.user, nextProps.user))) {
            if(this.state.rememberPass) {
                this.addDataToLocalStorage(nextProps.token, nextProps.user);
            } else this.addDataToSessionStorage(nextProps.token, nextProps.user);
            nextProps.history.push('/user');
        }
    };

    public render(): JSX.Element {
        return (
            <div>
                <form id='login-form' onSubmit={this.handleSubmit}>
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
                </form>

                <input value="Log In" type="submit" className="fadeIn fourth" form='login-form'/>
            </div>
        )
    }
}

const mapState = (state): IInitState => {
    const {authReducers: {token, user, isLoading, error}} = state;
    return ({token, user, isLoading, error});
};

const mapDispatch = (dispatch): IAuthActions => ({
    signIn: (email: string, password: string) => {
        dispatch(signIn(email, password));
    }
});

export const AuthForm = connect(mapState, mapDispatch)(__AuthForm);
