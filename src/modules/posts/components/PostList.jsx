import React from 'react'
import {Calendar} from '../../../Components/common/DatePicker'

const posts = [1, 2, 3, 4, 5, 6];

class AuthForm extends React.Component {
    renderPost() {
        return(
            <h1>1</h1>
        )
    }

    render() {
        return (
            <div>
                <Calendar />
                {
                    posts.length > 0 &&
                    posts.map(item => (
                        <div key={`key-posts-${item}`}>
                            {this.renderPost()}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default AuthForm
