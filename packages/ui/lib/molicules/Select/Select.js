import React, { useState } from 'react';
import '@d.labs/scss/lib/Select.css';

const Select = ({ label = 'please choose option', options = [], onOptionSelected }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClickOption = (option, optionIndex) => {
        if (onOptionSelected) {
            onOptionSelected(option, optionIndex);
            setIsOpen(false);
        }
    };
    return (React.createElement("div", { className: 'dlabs-select' },
        React.createElement("button", { className: 'dlabs-select-label', onClick: () => setIsOpen(state => !state) },
            React.createElement("span", null, label),
            React.createElement("span", null, label)),
        isOpen && (React.createElement("ul", { className: 'dlabs-select-overlay' }, options.map((option, i) => (React.createElement("li", { key: option.value, onClick: () => handleClickOption(option, i) }, option.label)))))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
