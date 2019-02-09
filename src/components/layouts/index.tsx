import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Houme} from 'components/icons'

interface IProps {
    children: JSX.Element;
}

interface INabBar {
    path: string;
    name: string;
    icon?: JSX.Element;
}
const NavBar: INabBar[] = [
    {
        path: "/",
        name: "Home",
        icon: <Houme width='45px'/>
    },
    { 
        path: "/posts",
        name: "Posts"
    },
    { 
        path: "/", 
        name: "Som"
    }
]

export class Layouts extends Component<IProps, {}> {
    protected renderHeader(): JSX.Element {
        return (
            <div className="layout-header">
                <div className="layout-title">
                    <h1 className="layout-title-text">Hello World!!!</h1>
                </div>
                <div className="layout-navbar">
                    <ul className="ul-navbar-menu">
                        {
                            NavBar && // active
                            NavBar.map(item => (
                                <li className="li-navbar-item" key={`key-navbar-${item.name.toLowerCase()}`}>
                                    {item.icon}
                                    <Link
                                        to={item.path}
                                        className="a-navbar-link"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }

    protected renderTabbar(): JSX.Element {
        return (
            <div className="layout-tabbar">1</div>
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
