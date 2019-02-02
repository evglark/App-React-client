import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
    children: JSX.Element
}

export class Layouts extends Component<IProps> {
    renderHeader() {
        return (
            <div className="wrap">
                <Link to='/'>Home</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/user'>User</Link>
            </div>
        )
    }

    renderTabbar() {
        return <div className="Container">1</div>
    }

    render() {
        return (
            <Fragment>
                {this.renderHeader()}
                <div className="styled-body">
                    <div className="styled-wrap">
                        {this.props.children}
                    </div>
                </div>
                {this.renderTabbar()}
            </Fragment>
        )
    }
}
