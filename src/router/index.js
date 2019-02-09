import routerComponent from './routerComponent'
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
            AsyncReducer: {asyncReducer: Posts.Store, reducerName: 'postsReducer', store: store},
            MainComponent: Posts.Components.PostList
        })
    }]
)
