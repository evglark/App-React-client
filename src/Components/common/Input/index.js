import React from 'react';
import './input.scss';
export class Input extends React.Component {
    constructor() {
        super(...arguments);
        this.setValue = (e) => {
            this.props.setter(e.target.value);
        };
    }
    render() {
        const { id, name, label, type, placeholder, value, regexp } = this.props;
        const inputClass = ['common-input'];
        const labelClass = ['common-label'];
        const regexpTest = regexp && regexp.test(value) || !value;
        if (regexp && !regexpTest) {
            inputClass.push('common-input-error');
            labelClass.push('common-label-error');
        }
        return (React.createElement("div", { className: "common-field" },
            React.createElement("input", { id: id, name: name, type: type ? type : 'text', className: inputClass.join(' '), placeholder: placeholder ? placeholder : 'Some text...', onChange: this.setValue }),
            React.createElement("label", { htmlFor: id, className: labelClass.join(' ') }, label ? label : name)));
    }
}
