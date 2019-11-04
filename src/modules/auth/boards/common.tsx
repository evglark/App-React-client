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

            </div>
        );
    }
}
