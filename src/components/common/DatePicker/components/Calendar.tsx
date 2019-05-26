import React, {Fragment} from 'react'
import {Moment} from 'moment'
import {ControlLine} from './controlLine'
import {Month} from './calendar/Month'
import './style.scss'

const moment = require('moment');

/**
 * @prop {Moment} currentDate Отображаемая дата.
 */
interface IState {
    currentDate: Moment;
}

export class Calendar extends React.Component {
    state: IState = {
        currentDate: moment().format('M')
    };

    public render(): JSX.Element {
        console.log(this.state.currentDate);
        return (
            <Fragment>
                <ControlLine />
                <Month />
            </Fragment>
        );
    }
}
