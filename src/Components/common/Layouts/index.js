import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, List, SignUp, SignIn, } from 'Components/icons';
import './layouts.scss';
export class Layouts extends React.Component {
    constructor(props) {
        super(props);
        this.changeTheme = (e) => {
            e.preventDefault();
            this.setState((state) => ({
                theme: state.theme === '' ? 'dark-theme' : ''
            }));
        };
        this.renderUl = (item) => (React.createElement(Link, { key: `layout-tab-bar-menu-item-key-${item.id}`, className: "link-nav-bar-item", to: item.path ? item.path : '', onClick: item.func && item.func },
            React.createElement("li", { key: `key-nav-bar-${item.id.toLowerCase()}`, className: "li-nav-bar-item d-flex justify-content-start" },
                item.icon &&
                    React.createElement("div", { className: typeof item.icon === 'string' ? "emoji-nav-bar-link" : "icon-nav-bar-link" }, item.icon),
                item.name &&
                    React.createElement("div", { className: "name-nav-bar-link" }, item.name))));
        this.state = {
            theme: '',
            commonMenu: [
                { path: "/", id: "common-menu", name: "Menu", icon: React.createElement(Menu, null), mark: 1 },
                { path: "/posts", id: "posts-list", name: "Post", icon: React.createElement(List, null) },
                { path: "/authReg", id: "auth-sign-up", name: "Sign up", icon: React.createElement(SignUp, null) },
                { path: "/authIn", id: "auth-sign-in", name: "Sign in", icon: React.createElement(SignIn, null) }
            ],
            systemMenu: [
                { path: "/setting", id: "global-setting", icon: "⚙️" },
                { path: "/search", id: "global-search", icon: "🔎" },
                { func: this.changeTheme, id: "theme", icon: "🎨" }
            ]
        };
    }
    ;
    render() {
        const { theme, commonMenu, systemMenu } = this.state;
        const protoClass = ['common-class'];
        protoClass.push(theme);
        console.log(typeof commonMenu[0].icon);
        return (React.createElement("div", { className: protoClass.join(' ') },
            React.createElement("div", { className: "styled-body" },
                React.createElement("div", { className: "styled-wrap" }, this.props.children)),
            React.createElement("div", { className: "layout-tab-bar" },
                React.createElement("div", { className: "layout-nav-bar" },
                    React.createElement("ul", { className: "common-menu ul-nav-bar-menu" }, commonMenu.map(item => this.renderUl(item))),
                    React.createElement("ul", { className: "system-menu ul-nav-bar-menu" }, systemMenu.map(item => this.renderUl(item)))))));
    }
}
