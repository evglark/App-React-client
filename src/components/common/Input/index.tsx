import React from 'react'
import './input.scss'

interface IProps extends React.HTMLProps<HTMLInputElement> {
    id: string;
    name: string;
    mask?: string;
}

/**
 * Interface for State of Input
 * @props {boolean} valid Валидность значения.
 */
interface IState {
    valid: boolean;
}

export class Input extends React.Component<IProps, IState> {

    state: IState = {
        valid: true
    };

    public render(): JSX.Element {
        const {id, name, type, placeholder} = this.props;
        const inputClass: string[] = ['common-input'];
        const labelClass: string[] = ['common-label'];

        return (
            <div className="field">
                <input
                    id={id}
                    name={name}
                    type={type ? type : 'text'}
                    className={inputClass.join(' ')}
                    placeholder={placeholder ? placeholder : 'Some text...'}
                />
                <label htmlFor={id} className={labelClass.join(' ')}>{name}</label>
            </div>
        );
    }
}

