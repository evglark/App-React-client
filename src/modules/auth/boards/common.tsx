import React from 'react'
import {AuthForm} from '../components/AuthForm'
import {RegistrationForm} from '../components/RegistrationForm'
import {Tab, Row, Col, Nav} from 'react-bootstrap'

enum EFormState {
    AUTH = 'AUTH',
    REG = 'REG'
}

interface IAuthCommonBoardState {
    formMode: EFormState;
}

export class AuthCommonBoard extends React.Component<{}, IAuthCommonBoardState>{
    static state: IAuthCommonBoardState;
    private constructor(props: any) {
        super(props);
        this.state = {
            formMode: EFormState.AUTH
        };
    };

    public render() {
        return (
            <div>
                <button onClick={() => this.setState({formMode: EFormState.REG})}>Reg</button>
                <button onClick={() => this.setState({formMode: EFormState.AUTH})}>Auth</button>
                {this.state.formMode === EFormState.AUTH ? <AuthForm /> : <RegistrationForm />}
            </div>
        );
    }
}
