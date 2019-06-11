import React from 'react'
import {authComponents} from '../components'

enum EFormState {
    AUTH = "AUTH",
    REG = "REG"
}

interface IAuthCommonBoardState {
    formMode: EFormState;
}

class AuthCommonBoard extends React.Component<any, IAuthCommonBoardState>{
    constructor(props) {
        super(props);

        // @ts-ignore
        this.state = {
            formMode: null
        }
    }

    render() {
        return (
            authComponents.AuthForm
        );
    }
}

export default AuthCommonBoard
