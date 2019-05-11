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
        /** Изначальное состояние */
        static Component = null;
        state = {
            Component: RouterComponent.Component
        };

        componentWillMount() {
            if(this.state.Component === null) {
                /** Передеть MainComponent в State */
                this.setState({Component: MainComponent});
                /** если AsyncReducer true, добавляем редюсер асинхронно (пердаем их в функцию injectAsyncReducer) */
                AsyncReducer && injectAsyncReducer(AsyncReducer);
            }
        }

        render(): JSX.Element {
            const {Component} = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    }

    return RouterComponent
};
