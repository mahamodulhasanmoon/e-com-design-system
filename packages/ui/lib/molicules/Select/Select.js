import React, { useState, useRef, useLayoutEffect } from 'react';
import '@d.labs/scss/lib/Select.css';

const Select = ({ label = 'please choose option', options = [], onOptionSelected }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [overlayTop, setOverlayTop] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const labelRef = useRef(null);
    useLayoutEffect(() => {
        setOverlayTop(labelRef.current?.offsetHeight || 0);
    }, [labelRef.current?.offsetHeight]);
    const handleClickOption = (option, optionIndex) => {
        if (onOptionSelected) {
            onOptionSelected(option, optionIndex);
        }
        setSelectedIndex(optionIndex);
        setIsOpen(false);
    };
    return (React.createElement("div", { className: 'dlabs-select' },
        React.createElement("button", { ref: labelRef, className: 'dlabs-select-label', onClick: () => setIsOpen(state => !state) },
            React.createElement("span", null, label),
            React.createElement("svg", { width: '1rem', height: '1rem', xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m19.5 8.25-7.5 7.5-7.5-7.5" }))),
        isOpen && (React.createElement("ul", { style: {
                top: overlayTop
            }, className: 'dlabs-select-overlay' }, options.map((option, i) => {
            const isSelected = selectedIndex === i;
            return (React.createElement("li", { key: option.value, className: `dlabs-select-option  ${isSelected ? 'dlabs-select-option-selected' : ''}`, onClick: () => handleClickOption(option, i) }, option.label));
        })))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
