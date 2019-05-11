import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Home, Cityscape, Iceberg} from 'Components/icons'


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
    state: IState = {
        IconsNavBar: [
            {
                path: "/",
                name: "Home",
                icon: <div/>
            }, {
                path: "/posts",
                name: "Posts",
                icon: <div/>
            }, {
                path: "/",
                name: "Som",
                icon: <div/>
            }
        ]
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
                <div className="layout-navBar">
                    <ul className="ul-navBar-menu">
                        {
                            this.state.IconsNavBar &&
                            this.state.IconsNavBar.map(item => (
                                <li className="li-navBar-item" key={`key-navBar-${item.name.toLowerCase()}`}>
                                    <Link to={item.path}>
                                        <div className="img-navBar-link">{item.icon}</div>
                                        <div className="a-navBar-link">{item.name}</div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }

    private renderTabBar(): JSX.Element {
        return (
            <div className="layout-tabBar">1</div>
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
