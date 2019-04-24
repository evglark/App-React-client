import React from 'react'
import {connect} from 'react-redux'
import {IInitState} from '../store'
import {IAuthActions, signUp} from '../store/actions'

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
 * @props {string} firstName Поле - имя пользователя.
 * @props {string} lastName Поле - фамилия пользователя.
 */
interface IState {
    email: string;
    password: string;
    firstName: string,
    lastName: string
}

type IAuthFormProps = IProps & IInitState & IAuthActions;

class __RegistrationForm extends React.Component<IAuthFormProps, IState> {
    public state: IState = {
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
                <form id='registration-form' onSubmit={this.handleSubmit}>

                    <input type="text" name="login" placeholder="login"
                           value={this.state.email} onChange={this.setEmail} />
                    <br />

                    <input type="text" name="password" placeholder="password"
                           value={this.state.password} onChange={this.setPassword} />
                    <br />

                    <input type="text" name="first-name" placeholder="first name"
                           value={this.state.firstName} onChange={this.setFirstName} />
                    <br />

                    <input type="text" name="last-name" placeholder="last name"
                           value={this.state.lastName} onChange={this.setLastName} />
                    <br />
                </form>
                <input type="submit" className="fadeIn fourth" form="registration-form" value="Log Up" />
            </div>
        )
    }
}

const mapState = (state): IInitState => {
    const {authReducers: {token, user, isLoading, error}} = state;
    return ({token, user, isLoading, error});
};

const mapDispatch = (dispatch): IAuthActions => ({
    signUp: (email: string, password: string, firstName: string, lastName: string) => {
        dispatch(signUp(email, password, firstName, lastName));
    }
});

export const RegistrationForm = connect(mapState, mapDispatch)(__RegistrationForm);
