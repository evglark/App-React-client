import * as React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {create_Store} from 'store'
import {routers} from 'router'
import App from 'App'
import 'style.scss'

const HTML_elem = document.querySelector('#root');
const store = create_Store();
const router = routers(store);

const renderApp = (Component) => {
    render(
        <Provider store={store}>
            <Component router={router}/>
        </Provider>,
        HTML_elem
    )
};

renderApp(App);
