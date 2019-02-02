import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import {Layouts} from './components/layouts'

const App = ({router}) => {
    return (
        <BrowserRouter basename='/'>
            <Layouts>
                {renderRoutes(router)}
            </Layouts>
        </BrowserRouter>
    )
}

export default App
