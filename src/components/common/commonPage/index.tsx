import React from 'react'
import {Link} from 'react-router-dom'
import {Sun} from 'Components/icons'
import './commonPage.scss'

interface IProps {
    withoutDefaultBlock?: boolean;
    children?: JSX.Element;
}

interface IState {}

export class CommonPage extends React.Component<IProps, IState> {
    static state: IState;
    private constructor(props: IProps) {
        super(props);
        this.state = {};
    };

    public render(): JSX.Element {
        const headerMenu = [
                {path: "/", id: "all", name: "All", mark: 1},
                {path: "/", id: "border", name: "border", mark: 0},
                {path: "/", id: "qwerty", name: "qwerty"},
        ];

        return (
            <div className="common-page">
                <div className="common-page-content d-flex justify-content-between">
                    {!this.props.withoutDefaultBlock &&
                        <React.Fragment>
                            <div className="common-page-name">
                                Hello World!!!
                            </div>

                            <div className="layout-nav-bar d-flex align-items-center">
                                <ul className="ul-nav-bar-menu common-page-menu d-flex">
                                    {
                                        headerMenu &&
                                        headerMenu.map(item => (
                                            <Link
                                                to="/"
                                                className="link-nav-bar-item"
                                                key={`common-page-menu-item-${item.id}`}
                                            >
                                                <li className="li-nav-bar-item">
                                                    <div className="name-nav-bar-link d-flex ">
                                                        {item.name && item.name}
                                                        {item.mark > 0 && (
                                                            <div className="mark-item-nav-bar d-flex flex-column justify-content-center">
                                                                {item.mark}
                                                            </div>
                                                        )}
                                                    </div>
                                                </li>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className="user-block d-flex align-items-center">
                                <div className="user-name d-flex">
                                    <Link to="/profile" className="link-nav-bar-item">Qweqwe qweqweqwe</Link>
                                    <div className="user-notification" />
                                </div>
                                <div className="user-avatar" />
                            </div>
                        </React.Fragment>
                    }
                    {this.props.children && this.props.children}
                </div>
            </div>
        );
    }
}
