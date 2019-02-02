import React, { Component } from 'react'
import {asyncReducer} from '../store';


interface IReactComponent {
    Public: boolean;
    AsyncReducer: IAsyncReducer;
    MainComponent: JSX.Element;

    history: {push(url: string): void};
}

interface IAsyncReducer {
    store: {(store: {}): {}},
    name: string,
    moduleStore: {(store: {}): {}},
}

export default ({ Public, AsyncReducer, MainComponent }) => (
    class AsyncComponent extends Component<IReactComponent> {
        static Component = null
        state = {Component: AsyncComponent.Component}

        componentWillMount() {
            if(!this.state.Component) {
                if(Public || localStorage.getItem('AuthToken')) {
                    this.setState({Component: MainComponent});
                    AsyncReducer && asyncReducer(AsyncReducer);
                } else this.props.history.push('/sign-in')
            }
        }

        render() {
            const {Component} = this.state
            if(Component) return <Component {...this.props} />
            return null
        }
    }
)
