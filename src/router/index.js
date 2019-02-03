import routerComponent, {IReactComponent} from './routerComponent'

import Auth from 'modules/auth'
import Posts from 'modules/posts'

export default (store) => (
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
        path: '/posts',
        component: routerComponent({
            Public: true,
            AsyncReducer: {
                store: store,
                reducerName: 'postsReducer',
                asyncReducer: Posts.Store,
            },
            MainComponent: Posts.Components.PostList
        })
    }]
)
