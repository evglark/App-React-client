import React from 'react'

export class ControlLine extends React.Component<any, any>{

    public render(): JSX.Element {
        const {currentDate} = this.props;

        return (
            <div className="control-line">
                <button>prev</button>
                <div className="month-name">
                    {currentDate.format('LL')}
                </div>
                <button>next</button>
            </div>
        );
    }
}
