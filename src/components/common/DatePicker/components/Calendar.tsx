import React, {Fragment} from 'react'
import {Moment} from 'moment'
import {ControlLine} from './ControlLine'
import {Month} from './Month'
import '../style.scss'

const moment = require('moment');

/**
 * @prop {Moment} currentDate Отображаемая дата.
 */
interface IState {
    currentDate: Moment;
}

export class Calendar extends React.Component {
    state: IState = {
        currentDate: moment()
    };

    public render(): JSX.Element {
        return (
            <div className="date-picker">
                <ControlLine currentDate={this.state.currentDate} />
                <Month
                    currentDate={this.state.currentDate}
                />
            </div>
        );
    }
}
