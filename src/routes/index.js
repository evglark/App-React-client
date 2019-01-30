import React from 'react'

export default () => ([
    {
        path: '/',
        exact: true,
        component: () => <h1>2</h1>
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
