import React from 'react'
import routerComponent from './routerComponent'

import Auth from 'modules/auth'

export default () => ([
    {
        path: '/',
        exact: true,
        component: routerComponent({
            Public: true,
            AsyncReducer: false,
            MainComponent: Auth.Components.AuthForm
        })
    }, {
        path: '/sign-in',
        exact: true,
        component: () => <h1>1</h1>
    }, {
        path: '/posts',
        exact: true,
        component: () => <h1>3</h1>
    }, {
        path: '/user',
        exact: true,
        component: () => <h1>4</h1>
    }, {
        path: '*',
        component: () => <h1>5</h1>
    }
])
