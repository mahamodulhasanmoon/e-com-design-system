import React from 'react';
import '@d.labs/scss/lib/margin.css';

const Padding = ({ space = 'md', children, bottom, left, right, top }) => {
    let className = '';
    if (!left && !right && !top && !bottom) {
        className = `dlabs-p-${space}`;
    }
    if (left)
        className += `dlabs-pl-${space} `;
    if (right)
        className += `dlabs-pr-${space} `;
    if (top)
        className += `dlabs-pt-${space} `;
    if (bottom)
        className += `dlabs-pb-${space} `;
    return (React.createElement("div", { className: className }, children));
};

export { Padding as default };
//# sourceMappingURL=Padding.js.map
