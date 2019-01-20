import React from 'react'
import { render } from 'react-dom'

import App from './App'

const HTML_elem = document.querySelector('#root')

const renderApp = (Component) => {
    render(
        <Component />,
        HTML_elem
    )
}

renderApp(App)
