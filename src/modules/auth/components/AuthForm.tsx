import React from 'react'
import connect from 'react-redux/es/connect/connect'
import * as _ from 'lodash'
import { signIn } from '../store'

/**
 * Interface for IError
 * @props {user} user Статус ошибки.
 * @props {token} token Код запроса.
 * @props {history} history Сообщение ошибки.
 */
interface Props {
    user: any;
    token: any;
    history: any;
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

    private setEmail = (e): void => {
        this.setState({email: e.target.value});
    };

    private setPassword = (e) => {
        this.setState({password: e.target.value});
    };

    private setRememberPass = () => {
        this.setState({rememberPass: !this.state.rememberPass});
    };

    private addDataToLocalStorage(authToken: string, user: any): void {
        localStorage.setItem('AuthToken', authToken);
        localStorage.setItem('User', JSON.stringify(user));
    };

    private addDataToSessionStorage(authToken: string, user: any): void {
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
        const {email, password, rememberPass} = this.state;
        return (
            <div>
                {/* Login Form */}
                <form onSubmit={this.props.signIn(this.state.email, this.state.password)}>
                    <input type="text" name="login" value={email} onChange={(e) => this.setEmail(e)} placeholder="login"/>
                    <br />
                    <input type="text" name="login" value={password} onChange={(e) => this.setPassword(e)} placeholder="password" />
                    <br />
                    <input type='checkbox' name='checkForRemember' checked={rememberPass} onChange={this.setRememberPass} />
                    <label htmlFor='checkForRemember'>Remember my password</label>
                    <br />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>
            </div>
        )
    }
}

const mapState = ({ auth }) => auth;

const mapDispatch = dispatch => ({
    signIn: (email, password) => e => {
        e.preventDefault();
        dispatch(signIn(email, password))
    }
});

export default connect(mapState, mapDispatch)(__AuthForm);
