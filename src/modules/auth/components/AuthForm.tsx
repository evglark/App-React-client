import React from 'react'
import * as _ from 'lodash'

interface Props {
    user: any;
    token: any;
    history: any;
}

interface State {
    email: string;
    password: string;
    rememberPass: boolean;
}

export class AuthForm extends React.Component<Props, State> {
    public state: State = {
        email: '',
        password: '',
        rememberPass: true
    }

    private setEmail = (e) => {
        this.setState({email: e.target.value})
    }

    private setPassword = (e) => {
        this.setState({password: e.target.value})
    }

    private setRememberPass = () => {
        this.setState({rememberPass: !this.state.rememberPass})
    }

    private addDataToLocalStorage(authToken: string, user: any): void {
        localStorage.setItem('AuthToken', authToken)
        localStorage.setItem('User', JSON.stringify(user))
    }

    private addDataToSessionStorage(authToken: string, user: any): void {
        sessionStorage.setItem('AuthToken', authToken)
        sessionStorage.setItem('User', JSON.stringify(user))
    }

    public componentWillReceiveProps(nextProps: Props): void {
        if (!_.equals(this.props.user, nextProps.user)) {
            if(this.state.rememberPass) {
                this.addDataToLocalStorage(nextProps.token, nextProps.user)
            } else this.addDataToSessionStorage(nextProps.token, nextProps.user)
            nextProps.history.push('/user')
        }
    }

    public render(): JSX.Element {
        return (
            <div>1</div>
        )
    }
}
