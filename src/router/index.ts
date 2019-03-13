import {routerComponent, IPropsHOF} from './routerComponent'
import {authModule as Auth} from 'modules/auth'
import Posts from 'modules/posts'

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

export default (store): IRouter[] => {
    return [{
        path: '/',
        exact: true,
        component: routerComponent({
            Public: true,
            AsyncReducer: false,
            MainComponent: Auth.Components.AuthForm
        })
    }, {
        path: '/posts',
        component: routerComponent({
            Public: true,
            AsyncReducer: {asyncReducer: Posts.Store, reducerName: 'postsReducer', store: store},
            MainComponent: Posts.Components.PostList
        })
    }];
}
