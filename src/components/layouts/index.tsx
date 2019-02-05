import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

interface IProps {
    children: JSX.Element;
}

interface INabBar {
    to: string;
    name: string;
}
const NavBar: INabBar[] = [
    {
        to: "/",
        name: "Home"
    }, {
        to: "/posts",
        name: "Posts"
    }, {
        to: "/",
        name: "Som"
    }
]

export class Layouts extends Component<IProps> {
    protected renderNavBar(): JSX.Element {
        return (
            <div className="navbar">
                <ul className="navbar-nav">
                    {
                        NavBar && // active
                        NavBar.map(item => (
                            <li className="nav-item">
                                <Link to={item.to} class="nav-link">{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    protected renderHeader(): JSX.Element {
        return (
            <div className="wrap">
                <div className="preview">
                    <h1>Hello World!!!</h1>
                </div>
                {this.renderNavBar()}
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
