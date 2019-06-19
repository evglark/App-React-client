import React from 'react'
import {Components} from '../index'

enum EFormState {
    AUTH = "AUTH",
    REG = "REG"
}

interface IAuthCommonBoardState {
    formMode: EFormState;
}

class AuthCommonBoard extends React.Component<any, IAuthCommonBoardState>{

    state: IAuthCommonBoardState = {
        formMode: EFormState.AUTH
    };

    render() {
        return (
            <div>
                {this.state.formMode}
                {Components.AuthForm}
            </div>
        );
    }
}

export default AuthCommonBoard
