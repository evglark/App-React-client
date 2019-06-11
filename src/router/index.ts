import {routerComponent, IPropsHOF} from './routerComponent'

/**
 * @prop {string} path.
 * @props {boolean} [exact].
 * @props {Function} component.
 */
interface IRouter {
    path: string;
    exact?: boolean;
    component: IPropsHOF;
}

export const routers = (store): IRouter[] => {
    return [{
        path: '/',
        exact: true,
        component: routerComponent({
            Public: true,
            AsyncReducer: false,
            MainComponent: () => ("Hello world!!!")
        })
    }]
};
