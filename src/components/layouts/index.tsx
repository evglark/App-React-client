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
                <Link to='/twoo'>Posts</Link>
                <Link to='/twoo'>User</Link>
            </div>
        )
    }

    renderTabbar() {
        return <div className="Container"></div>
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
