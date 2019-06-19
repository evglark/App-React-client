import React from 'react'
import {connect} from 'react-redux'
import {IInitState} from '../store'
import {IAuthActions, signUp} from '../store/actions'

interface IProps {}

/**
 * Interface for IError
 * @props {string} email Поле - емаил пользователя.
 * @props {string} password Поле - пароль пользователя.
 * @props {boolean} rememberPass Чекбокс - запомнить пароль.
 */
interface IState {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

type IAuthFormProps = IProps & IInitState & IAuthActions;

class __RegistrationForm extends React.Component<IAuthFormProps, IState> {

    state: IState = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };

    private setEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({email: e.target.value});
    };

    private setPassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({password: e.target.value});
    };

    private setFirstName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({firstName: e.target.value});
    };

    private setLastName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({lastName: e.target.value});
    };

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        const {email, password, firstName, lastName} = this.state;
        e.preventDefault();

        this.props.signUp(email, password, firstName, lastName);
    };

    public render(): JSX.Element {
        return (
            <div>
                <form id='login-form' onSubmit={this.handleSubmit}>

                    <input type="text" name="login" placeholder="login"
                           value={this.state.email} onChange={this.setEmail} />
                    <br />

                    <input type="text" name="password" placeholder="password"
                           value={this.state.password} onChange={this.setPassword} />
                    <br />

                    <input type="text" name="firstName" placeholder="firstName"
                           value={this.state.firstName} onChange={this.setFirstName} />
                    <br />

                    <input type="text" name="lastName" placeholder="lastName"
                           value={this.state.lastName} onChange={this.setLastName} />
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
    signUp: (email: string, password: string, firstName: string, lastName: string) => {
        dispatch(signUp(email, password, firstName, lastName));
    }
});

export const RegistrationForm = connect(mapState, mapDispatch)(__RegistrationForm);
