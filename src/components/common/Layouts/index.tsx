import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Menu, List, SignUp, SignIn, Search, Setting} from 'Components/icons'
import './layouts.scss'

interface IProps {
    children: JSX.Element;
}

interface INavBar {
    path: string;
    id: string;
    name: string;
    icon?: JSX.Element;
}

interface IState {}

export class Layouts extends React.Component<IProps, IState> {
    static state: IState;
    private constructor(props: IProps) {
        super(props);
        this.state = {};
    };

    private renderTopBar(): JSX.Element {
        return (
            <div className="layout-topBar" />
        );
    }

    private renderHeader(): JSX.Element {
        return (
            <div className="header">
                <div className="layout-title">Hello World!!!</div>
            </div>
        );
    }

    private renderTabBar(): JSX.Element {
        const commonMenu : INavBar[] = [
            {
                path: "/",
                id: "common-menu",
                name: "Menu",
                icon: <Menu/>
            }, {
                path: "/posts",
                id: "posts-list",
                name: "Post",
                icon: <List/>
            }, {
                path: "/authReg",
                id: "auth-sign-up",
                name: "Sign up",
                icon: <SignUp/>},
            {
                path: "/authIn",
                id: "auth-sign-in",
                name: "Sign in",
                icon: <SignIn/>
            }
        ];

        const systemMenu : INavBar[] = [
            {
                path: "/setting",
                id: "global-setting",
                name: "Setting",
                icon: <Setting/>
            }, {
                path: "/search",
                id: "global-search",
                name: "Search",
                icon: <Search/>
            }
        ];

        return (
            <div className="layout-tabBar">
                <div className="layout-navBar d-flex flex-column justify-content-between">
                    <ul className="ul-navBar-menu common-menu">
                        {
                            commonMenu.map(item => (
                                <Link to={item.path} className="link-navBar-item">
                                    <li
                                        className="li-navBar-item d-flex justify-content-start"
                                        key={`key-navBar-${item.id.toLowerCase()}`}
                                    >
                                        <div className="icon-navBar-link">{item.icon && item.icon}</div>
                                        <div className="name-navBar-link d-flex flex-column justify-content-center">
                                            {item.name && item.name}
                                        </div>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>

                    <ul className="ul-navBar-menu system-menu">
                        {
                            systemMenu.map(item => (
                                <Link to={item.path}>
                                    <li
                                        className="li-navBar-item d-flex justify-content-start"
                                        key={`key-navBar-${item.id.toLowerCase()}`}
                                    >
                                        <div className="icon-navBar-link">{item.icon && item.icon}</div>
                                        <div className="name-navBar-link d-flex flex-column justify-content-center">
                                            {item.name && item.name}
                                        </div>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }

    public render(): JSX.Element {
        return (
            <Fragment>
                {this.renderTopBar()}
                {this.renderHeader()}
                <div className="styled-body">
                    <div className="styled-wrap">
                        {this.props.children}
                    </div>
                </div>
                {this.renderTabBar()}
            </Fragment>
        );
    }
}
