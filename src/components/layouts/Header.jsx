import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <Fragment>
        <div className="wrap">
            <Link to='/'>Home</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/user'>User</Link>
        </div>
    </Fragment>
)


export default Header
