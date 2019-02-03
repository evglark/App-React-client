import routerComponent, {IReactComponent} from './routerComponent'

import Auth from 'modules/auth'

interface IRouter {
    path: string;
    exact?: boolean;
    component: {(Params: IReactComponent): JSX.Element} | JSX.Element;
}

export default (store): IRouter[] => (
    [{
        path: '/',
        exact: true,
        component: routerComponent({
            Public: true,
            AsyncReducer: false,
            MainComponent: Auth.Components.AuthForm
        })
    },
    {
        path: '/twoo',
        component: routerComponent({
            Public: true,
            AsyncReducer: {
                store: store,
                name: 'posts',
                moduleStore: {li: 1, lit: 2, lib: 3}
            },
            MainComponent: Auth.Components.AuthTwoo
        })
    }]
)
