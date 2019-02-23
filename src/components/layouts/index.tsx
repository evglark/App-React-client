import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

import {Home, Cityscape, Iceberg} from 'components/icons'
import './layouts.scss'


interface IProps {
    children: JSX.Element;
}

interface IIconsNavBar {
    path: string;
    name: string;
    icon?: JSX.Element;
}

interface IState {
    IconsNavBar: IIconsNavBar[]
}

export class Layouts extends React.Component<IProps, IState> {
    state = {
        IconsNavBar: [
            {path: "/", name: "Home", icon: <Home />},
            {path: "/posts", name: "Posts", icon: <Cityscape />},
            {path: "/", name: "Som", icon: <Iceberg />}
        ]
    }

    protected renderTopbar(): JSX.Element {
        return (
            <div className="layout-topbar">1</div>
        );
    }

    protected renderHeader(): JSX.Element {
        const {IconsNavBar} = this.state
        return (
            <div className="header">
                <div className="layout-title">Hello World!!!</div>
                <div className="layout-navbar">
                    <ul className="ul-navbar-menu">
                        {
                            IconsNavBar &&
                            IconsNavBar.map(item => (
                                <li className="li-navbar-item" key={`key-navbar-${item.name.toLowerCase()}`}>
                                    <Link to={item.path}>
                                        <div className="img-navbar-link">{item.icon}</div>
                                        <div className="a-navbar-link">{item.name}</div>
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
        let authToken: boolean = Boolean(localStorage.getItem('AuthToken'))
        return (
            <Fragment>
                {authToken && (
                    <Fragment>
                        {this.renderTopbar()}
                        {this.renderHeader()}
                    </Fragment>
                )}
                <div className="styled-body">
                    <div className="styled-wrap">
                        {this.props.children}
                    </div>
                </div>
                {
                    authToken &&
                    this.renderTabbar()
                }
            </Fragment>
        );
    }
}
