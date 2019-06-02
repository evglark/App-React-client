import React from 'react'
import {DAYS_SET} from '../utils/consts'
import {Day} from './Day'

export class Week extends React.Component<any, any>{

    public render(): JSX.Element {
        const {
            firstDayOfWeek,
            firstDayOfCurrentMonth,
            lastDayOfCurrentMonth
        } = this.props;

        return (
            <div className="week">
                {
                    DAYS_SET.map((item, i) => (
                        <Day
                            key={`key-Day-${item}`}
                            day={firstDayOfWeek.clone().add(i,'day')}
                            firstDayOfCurrentMonth={firstDayOfCurrentMonth}
                            lastDayOfCurrentMonth={lastDayOfCurrentMonth}
                        />
                    ))
                }
            </div>
        );
    }
}
