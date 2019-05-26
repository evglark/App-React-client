import React from 'react'
import {DAYS_SET} from '../../utils/consts'
import {Day} from './Day'

export class Week extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="week">
                {
                    DAYS_SET.map(item => (
                        <Day key={`key-Day-${item}`} />
                    ))
                }
            </div>
        );
    }
}
