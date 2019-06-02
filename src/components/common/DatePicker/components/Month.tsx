import React from 'react'
import {WEEKS_SET} from '../utils/consts'
import {Week} from './Week'

export class Month extends React.Component<any, any>{

    public render(): JSX.Element {
        const {currentDate} = this.props;
        const firstDayOfCurrentMonth = currentDate.clone().startOf('month');
        const lastDayOfCurrentMonth = currentDate.clone().endOf('month');
        const firstMondayOfFirstWeek = firstDayOfCurrentMonth.clone().startOf('isoWeek');

        return (
            <div className="month">
                {
                    WEEKS_SET.map((item, i) => (
                        <Week
                            key={`key-week-${item}`}
                            firstDayOfWeek={firstMondayOfFirstWeek.clone().add((i * 7),'day')}
                            firstDayOfCurrentMonth={firstDayOfCurrentMonth}
                            lastDayOfCurrentMonth={lastDayOfCurrentMonth}
                        />
                    ))
                }
            </div>
        );
    }
}
