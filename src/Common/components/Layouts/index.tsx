import React from 'react'

// TODO: created some modules in Layouts component
import './layouts.scss'

/**
 * Interface for IProps
 * @props {JSX.Element} children - Common content.
 */
interface IProps {
    children: JSX.Element;
}

export const Layouts = (props: IProps): JSX.Element => (
    <div className="common-class">
        <div className="styled-wrap">
            {props.children}
        </div>
    </div>
);
