import React from 'react'
import {connect} from 'react-redux'
import * as _ from 'lodash'
import {IInitState} from '../store'
import {IAuthActions, signIn} from '../store/actions'
<<<<<<< HEAD:src/modules/auth/components/AuthForm.tsx
import {Input} from '../../../Components/common/Input'
=======
>>>>>>> f64f552e76edd77c7e2a2dbb186b65c751057e6b:src/modules/auth/components/AuthForm.tsx

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

    state: IState = {
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
        const inputsForm = [{
            id: 'login',
            name: 'Login',
            placeholder: 'Enter your login',
            value: this.state.email,
            onChange: this.setEmail,
        }, {
            id: 'password',
            name: 'Password',
            placeholder: 'Enter your password',
            value: this.state.password,
            onChange: this.setPassword
        }];

        return (
            <div>
                <form id='login-form' onSubmit={this.handleSubmit}>
                    {inputsForm.map((item, i) => (
                        <Input
                            id={item.id}
                            name={item.name}
                            placeholder={item.placeholder}
                            value={item.value}
                            onChange={item.onChange}
                            key={`key-${i}-${item.id}`}
                        />
                    ))}

                    <input type='checkbox' name='checkForRemember'
                           checked={this.state.rememberPass} onChange={this.setRememberPass} />
                    <label htmlFor='checkForRemember'>Remember my password</label>
                    <br />
                </form>
                <input value="Log In" type="submit" className="fadeIn fourth" form='login-form'/>
            </div>
        )
    }
}

const mapState = (state): IInitState => {
    return state.authReducer;
};

const mapDispatch = (dispatch): IAuthActions => ({
    signIn: (email: string, password: string) => {
        dispatch(signIn(email, password));
    }
});

export const AuthForm = connect(mapState, mapDispatch)(__AuthForm);
