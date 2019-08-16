import React from 'react'
import {Link} from 'react-router-dom'
import {
    Menu,
    List,
    SignUp,
    SignIn,
    Search,
    Setting,
    MoonDark,
    MoonLight
} from 'Components/icons'
import './layouts.scss'

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
 * @props {string} name Name of Item nav bar.
 * @props {JSX.Element} [icon] Icon of Item nav bar.
 */
interface INavBar {
    path?: string;
    func?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    id: string;
    name: string;
    mark?: number;
    icon?: JSX.Element;
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
                {func: this.changeTheme, id: "theme", name: "Change theme", icon: <MoonLight />},
                {path: "/setting", id: "global-setting", name: "Setting", icon: <Setting/>},
                {path: "/search", id: "global-search", name: "Search", icon: <Search/>}
            ]
        };
    }

    private changeTheme = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        e.preventDefault();
        this.setState((state) => ({theme: state.theme === '' ? 'dark-theme' : ''}));
    };

    private renderTabBars(): JSX.Element {
        const {commonMenu, systemMenu} = this.state;
        const renderUl = (item: INavBar): JSX.Element => (
            <Link
                to={item.path ? item.path : ''}
                onClick={item.func && item.func}
                className="link-nav-bar-item"
                key={`layout-tab-bar-menu-item-key-${item.id}`}
            >
                <li
                    className="li-nav-bar-item d-flex justify-content-start"
                    key={`key-nav-bar-${item.id.toLowerCase()}`}
                >
                    <div className="icon-nav-bar-link">{item.icon && item.icon}</div>
                    <div className="name-nav-bar-link d-flex flex-column justify-content-center">
                        {item.name && item.name}
                    </div>
                </li>
            </Link>
        );

        return (
            <div className="layout-tab-bar">
                <div className="layout-nav-bar d-flex flex-column justify-content-between">
                    <ul className="ul-nav-bar-menu common-menu">
                        {commonMenu.map(item => renderUl(item))}
                    </ul>
                    <ul className="ul-nav-bar-menu system-menu">
                        {systemMenu.map(item => renderUl(item))}
                    </ul>
                </div>
            </div>
        );
    }

    public render(): JSX.Element {
        const protoClass: string[] = ['common-class'];
        protoClass.push(this.state.theme);

        return (
            <div className={protoClass.join(' ')}>
                <div className="styled-body">
                    <div className="styled-wrap">
                        {this.props.children}
                    </div>
                </div>
                {this.renderTabBars()}
            </div>
        );
    }
}
