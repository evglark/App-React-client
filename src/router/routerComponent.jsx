import React, { Component } from 'react'
import {injectAsyncReducer} from 'store';

// export interface IReactComponent {
//     Public: boolean;
//     AsyncReducer: IAsyncReducer | boolean;
//     MainComponent: JSX.Element;
//     history: {push(url: string): void};
// }

// interface IAsyncReducer {
//     store: any;
//     reducerName: string;
//     asyncReducer: {(store: {}): {}};
// }

export default ({Public, AsyncReducer, MainComponent}) => (
    class RotreComponent extends Component {
        // Изначальное состояние
        static Component = null
        state = {Component: RotreComponent.Component}

        componentWillMount() {
            if(this.state.Component == null) {
                // если свойство Public или AuthToken == true
                // [true] передеть в State MainComponent
                // [else] иначе редирект на логин
                if(Public || localStorage.getItem('AuthToken')) {
                    // Component проходит проверку, и готовится к рендерингу
                    this.setState({Component: MainComponent});

                    // AsyncReducer:
                    // если AsyncReducer не false, значит нужно добавить редюсер асинхронно, для этого:
                    // деструктуризацруем свойства AsyncReducer и пердаем их в функцию injectAsyncReducer
                    if(AsyncReducer) {
                        const {store, reducerName, asyncReducer} = AsyncReducer;
                        injectAsyncReducer(store, reducerName, asyncReducer);
                    }
                } else {
                    this.props.history.push('/sign-in');
                }
            }
        }

        render() {
            const {Component} = this.state
            if(Component) return <Component {...this.props} />
            return null
        }
    }
)
