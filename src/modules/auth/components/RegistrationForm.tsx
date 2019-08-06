import React from 'react'
import {connect} from 'react-redux'
import {Input} from 'Components/common/Input'
import {IAuthActions, IInitState, signUp} from '../store'

/**
 * Interface for IError
 * @props {string} login Поле - логин пользователя.
 * @props {string} password Поле - пароль пользователя.
 * @props {boolean} rememberPass Чекбокс - запомнить пароль.
 */
interface IRegFormState {
    login: string;
    password: string;
    firstName: string;
    lastName: string;
}

type IRegFormProps = IInitState & IAuthActions;

class __RegistrationForm extends React.Component<IRegFormProps, IRegFormState> {
    static state: IRegFormState;
    private constructor(props: IRegFormProps) {
        super(props);
        this.state = {
            login: '',
            password: '',
            firstName: '',
            lastName: ''
        };
    };

    public setLogin = (value: string): void => {
        this.setState({login: value});
    };

    public setPassword = (value: string): void => {
        this.setState({password: value});
    };

    public setFirstName = (value: string): void => {
        this.setState({firstName: value});
    };

    public setLastName = (value: string): void => {
        this.setState({lastName: value});
    };

    public handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        const {login, password, firstName, lastName} = this.state;

        e.preventDefault();
        this.props.signUp(login, password, firstName, lastName);
    };

    public render(): JSX.Element {
        const {login , password, firstName, lastName} = this.state;

        const regexp = /^[a-zA-Z0-9._\b]+$/;
        const invalidEmail = !login || !regexp.test(login);
        const invalidPassword = !password || !regexp.test(password);
        const invalidFirstName = !firstName || !regexp.test(firstName);
        const invalidLastName = !lastName || !regexp.test(lastName);
        const submitDisabled = invalidEmail || invalidPassword || invalidFirstName || invalidLastName;

        const inputsRegForm = [{
            id: 'login',
            name: 'Login',
            value: login,
            placeholder: 'Enter your login',
            setter: this.setLogin,
            regexp
        }, {
            id: 'RegPassword',
            name: 'Password',
            placeholder: 'Enter your password',
            value: password,
            setter: this.setPassword,
            regexp
        }, {
            id: 'firstName',
            name: 'firstName',
            label: 'First Name',
            value: firstName,
            placeholder: 'Enter your First Name',
            setter: this.setFirstName,
            regexp
        }, {
            id: 'lastName',
            name: 'lastName',
            label: 'Last Name',
            placeholder: 'Enter your First Name',
            value: lastName,
            setter: this.setLastName,
            regexp
        }];

        return (
            <div>
                <form id='login-form' onSubmit={this.handleSubmit}>
                    {inputsRegForm.map((item, i) => <Input {...item} key={`key-${i}-${item.id}`} />)}
                </form>
                <br />
                <input value="Log In" type="submit" className="fadeIn fourth" form='login-form' disabled={submitDisabled}/>
            </div>
        )
    }
}

const mapState = (state): IInitState => state.authReducer;

const mapDispatch = (dispatch): IAuthActions => ({
    signUp: (login: string, password: string, firstName: string, lastName: string) => {
        dispatch(signUp(login, password, firstName, lastName));
    }
});

export const RegistrationForm = connect(mapState, mapDispatch)(__RegistrationForm);
