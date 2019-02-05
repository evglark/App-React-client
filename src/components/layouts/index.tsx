import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

interface IProps {
    children: JSX.Element;
}

export class Layouts extends Component<IProps> {
    protected renderHeader(): JSX.Element {
        return (
            <div className="wrap">
                <div className="preview"><h1>Hello World!!!</h1></div>

                <div className="nav-bar">
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/">User</Link>
                </div>
            </div>
        );
    }

    protected renderTabbar(): JSX.Element {
        return (
            <div className="Container">1</div>
        );
    }

    public render(): JSX.Element {
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
        );
    }
}
