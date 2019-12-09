import * as React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {create_Store} from 'store'
import {App} from 'App'

import './style.scss'

const HTML_elem = document.querySelector('#root');
const store = create_Store();

const renderApp = (Component) => {
    render (
        <Provider store={store}>
            <Component />
        </Provider>,
        HTML_elem
    )
};

renderApp(App);
