import React from 'react'
import {Link} from 'react-router-dom'
import {
    Menu,
    List,
    SignUp,
    SignIn,
} from 'Components/icons'
import './layouts.scss'
import {string} from "prop-types";

/**
 * Interface for IProps
 * @props {JSX.Element} children Common content.
 */
interface IProps {
    children: JSX.Element;
}

/**
 * Interface for INavBar
 * @props {string} path Path for Item nav bar.
 * @props {Function} func OnClick for Item nav bar.
 * @props {string} id Id of Item nav bar.
 * @props {string} [name] Name of Item nav bar.
 * @props {JSX.Element} [icon] Icon of Item nav bar.
 */
interface INavBar {
    path?: string;
    func?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    id: string;
    name?: string;
    mark?: number;
    icon?: JSX.Element|string;
}

/**
 * Interface for IState
 * @props {string} theme Color theme.
 * @props {INavBar[]} commonMenu Common menu - upper left vertical menu.
 * @props {INavBar[]} systemMenu System menu - lower left vertical menu.
 */
interface IState {
    theme: string;
    commonMenu: INavBar[];
    systemMenu: INavBar[];
}

export class Layouts extends React.Component<IProps, IState> {
    static state: IState;
    private constructor(props: IProps) {
        super(props);
        this.state = {
            theme: '',
            commonMenu: [
                {path: "/", id: "common-menu", name: "Menu", icon: <Menu/>, mark: 1},
                {path: "/posts", id: "posts-list", name: "Post", icon: <List/>},
                {path: "/authReg", id: "auth-sign-up", name: "Sign up", icon: <SignUp/>},
                {path: "/authIn", id: "auth-sign-in", name: "Sign in", icon: <SignIn/>}
            ],
            systemMenu: [
                {path: "/setting", id: "global-setting", icon: "⚙️"},
                {path: "/search", id: "global-search", icon: "🔎"},
                {func: this.changeTheme, id: "theme", icon: "🎨"}
            ]
        };
    };

    private changeTheme = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        e.preventDefault();
        this.setState((state) => ({
            theme: state.theme === '' ? 'dark-theme' : ''
        }));
    };

    private renderUl = (item: INavBar): JSX.Element => (
        <Link
            key={`layout-tab-bar-menu-item-key-${item.id}`}
            className="link-nav-bar-item"
            to={item.path ? item.path : ''}
            onClick={item.func && item.func}
        >
            <li
                key={`key-nav-bar-${item.id.toLowerCase()}`}
                className="li-nav-bar-item d-flex justify-content-start"
            >
                {   item.icon &&
                    <div className={typeof item.icon === 'string' ? "emoji-nav-bar-link" : "icon-nav-bar-link"}>
                        {item.icon}
                    </div>
                }
                {
                    item.name &&
                    <div className="name-nav-bar-link">
                        {item.name}
                    </div>
                }
            </li>
        </Link>
    );

    public render(): JSX.Element {
        const {theme, commonMenu, systemMenu} = this.state;
        const protoClass: string[] = ['common-class'];
        protoClass.push(theme);
        console.log(typeof commonMenu[0].icon)

        return (
            <div className={protoClass.join(' ')}>
                <div className="styled-body">
                    <div className="styled-wrap">
                        {this.props.children}
                    </div>
                </div>
                <div className="layout-tab-bar">
                    <div className="layout-nav-bar">
                        <ul className="common-menu ul-nav-bar-menu">
                            {commonMenu.map(item => this.renderUl(item))}
                        </ul>
                        <ul className="system-menu ul-nav-bar-menu">
                            {systemMenu.map(item => this.renderUl(item))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
