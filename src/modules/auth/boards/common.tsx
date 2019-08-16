import React from 'react'
import {AuthForm} from '../components/AuthForm'
import {RegistrationForm} from '../components/RegistrationForm'
import {Tab, Row, Col, Nav} from 'react-bootstrap'
import {CommonPage} from 'Components/common/CommonPage'

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
                <CommonPage />
                {/*<button onClick={() => this.setState({formMode: EFormState.REG})}>Reg</button>
                <button onClick={() => this.setState({formMode: EFormState.AUTH})}>Auth</button>
                {this.state.formMode === EFormState.AUTH ? <AuthForm sdfds={1} /> : <RegistrationForm />}*/}
            </div>
        );
    }
}
