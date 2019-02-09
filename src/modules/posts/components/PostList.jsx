import React from 'react'

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
                {posts.map(item => (
                    <div key={`key-posts-${item}`}>
                        {this.renderPost()}
                    </div>)
                )}
            </div>
        )
    }
}

export default AuthForm
