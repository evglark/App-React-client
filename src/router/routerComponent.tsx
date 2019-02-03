import React, { Component } from 'react'
import {asyncReducer} from '../store';

export interface IReactComponent {
    Public: boolean;
    AsyncReducer: IAsyncReducer | boolean;
    MainComponent: JSX.Element;
    history: {push(url: string): void};
}

interface IAsyncReducer {
    store: any;
    name: string;
    moduleStore: {(store: {}): {}};
}

export default ({Public, AsyncReducer, MainComponent}): any => (
    class RotreComponent extends Component<IReactComponent> {
        static Component = null
        state = {Component: RotreComponent.Component}

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
