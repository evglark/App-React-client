import React from 'react'

export class Day extends React.Component<any, any>{

    private handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        console.log(event, this.props.day);
    };

    public render(): JSX.Element {
        const {day, firstDayOfCurrentMonth, lastDayOfCurrentMonth} = this.props;
        const className: string[] = ['day'];

        const prevMonth    = day < firstDayOfCurrentMonth;
        const currentMonth = day >= firstDayOfCurrentMonth && day <= lastDayOfCurrentMonth;
        const nextMonth    = day > lastDayOfCurrentMonth;

        prevMonth    && className.push('prev-month');
        currentMonth && className.push('current-month');
        nextMonth    && className.push('next-month');

        return (
            <div
                className={className.join(' ')}
                onClick={this.handleClick}
            >
                {day.format('D')}
            </div>
        );
    }
}
