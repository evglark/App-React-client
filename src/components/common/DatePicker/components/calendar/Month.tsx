import React from 'react'
import {WEEKS_SET} from '../../utils/consts'
import {Week} from './Week'

export class Month extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="month">
                {
                    WEEKS_SET.map(item => (
                        <Week  key={`key-week-${item}`} />
                    ))
                }
            </div>
        );
    }
}
