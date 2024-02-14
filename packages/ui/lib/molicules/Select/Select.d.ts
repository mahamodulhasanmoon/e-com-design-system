import React from 'react';
import '@d.labs/scss/lib/Select.css';
export interface SelectOptions {
    label?: string;
    value?: string;
}
interface ISelectProps {
    label?: string;
    options?: Array<SelectOptions>;
    onOptionSelected?: (option: SelectOptions, optionIndex: number) => void;
}
declare const Select: React.FC<ISelectProps>;
export default Select;
