import React, { Fragment } from 'react'

import Header from './Header'
import TabBar from './Tabbar'

const Layouts = ({ children }) => (
    <Fragment>
        <Header />
        <div className="styled-body">
            <div className="styled-wrap">
                {children}
            </div>
        </div>
        <TabBar />
    </Fragment>
)

export default Layouts
