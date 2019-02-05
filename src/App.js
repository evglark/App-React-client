import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {Layouts} from 'components/layouts'

const App = ({router}) => {
    return (
        <BrowserRouter basename='/'>
            <Layouts children={renderRoutes(router)} />
        </BrowserRouter>
    )
}

export default App
