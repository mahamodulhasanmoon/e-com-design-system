import React from 'react';
import '@d.labs/scss/lib/margin.css';

const Margin = ({ space = 'md', children, bottom, left, right, top }) => {
    let className = '';
    if (!left && !right && !top && !bottom) {
        className = `dlabs-m-${space}`;
    }
    if (left)
        className += `dlabs-ml-${space} `;
    if (right)
        className += `dlabs-mr-${space} `;
    if (top)
        className += `dlabs-mt-${space} `;
    if (bottom)
        className += `dlabs-mb-${space} `;
    return (React.createElement("div", { className: className }, children));
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
