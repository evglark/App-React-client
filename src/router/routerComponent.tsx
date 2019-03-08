import React, { Component } from 'react'
import {injectAsyncReducer} from 'store/asyncReducer'

/**
 * @props {Function} hispory глобальная пропса
 * для редиректа на другую страницу
 */
interface IPropsHOC {
    history: {push(url: string): void}
}

/**
 * @props {JSX.Element} Component default null, 
 * получает компонент из пропсов и определеяет показывать его или нет
 */
interface IStateHOC {
    Component: JSX.Element
}

/**
 * @props {boolean} Public false если страница приватна и юзера надо отправить на логин.
 * @props {any} AsyncReducer false если асинхронное подключение редюсера не нужно или обьект подлючаемого редюсера.
 * @props {JSX.Element} MainComponent сам компонент.
 */
export interface IPropsHOF {
    Public: boolean;
    AsyncReducer: any;
    MainComponent: any;
}

export const routerComponent = ({Public, AsyncReducer, MainComponent}: IPropsHOF): any => {
    class RouterComponent extends Component <IPropsHOC, IStateHOC>{
        // Изначальное состояние
        static Component = null;
        state = {
            Component: RouterComponent.Component
        };

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
                        const {asyncReducer, reducerName, store} = AsyncReducer;
                        injectAsyncReducer(asyncReducer, reducerName, store);
                    }
                } else {
                    this.props.history.push('/sign-in');
                }
            }
        }

        render() {
            const {Component} = this.state;
            let View = Component ? <Component {...this.props} /> : null;

            return View
        }
    }

    return RouterComponent
};
