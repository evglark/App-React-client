import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {Layouts} from 'Common/components/Layouts'
import {MainPage} from 'Modules/main'
import {AboutPage} from 'Modules/about'

export const App = () => {
    return (
        <BrowserRouter basename='/'>
            <Layouts>
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                </Switch>
            </Layouts>
        </BrowserRouter>
    )
};
