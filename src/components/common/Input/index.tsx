import React from 'react'
import './input.scss'

export interface IInputProps extends React.HTMLProps<HTMLInputElement>{
    id: string;
    name: string;
    label?: string;
    value: string;
    regexp?: RegExp;
    setter: (value: string) => void;
}

export class Input extends React.Component<IInputProps, {}> {
    public setValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.props.setter(e.target.value);
    };

    public render(): JSX.Element {
        const {id, name, label, type, placeholder, value, regexp} = this.props;
        const inputClass: string[] = ['common-input'];
        const labelClass: string[] = ['common-label'];
        const regexpTest = regexp && regexp.test(value) || !value;

        if(regexp && !regexpTest) {
            inputClass.push('common-input-error');
            labelClass.push('common-label-error');
        }

        return (
            <div className="common-field">
                <input id={id} name={name} type={type ? type : 'text'}
                       className={inputClass.join(' ')}
                       placeholder={placeholder ? placeholder : 'Some text...'}
                       onChange={this.setValue}
                />
                <label
                    htmlFor={id}
                    className={labelClass.join(' ')}
                >
                    {label ? label : name}
                </label>
            </div>
        );
    }
}

