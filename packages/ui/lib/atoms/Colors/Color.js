import React from 'react';
import Spacing from '../../foundations/Spacing.js';
import '@d.labs/scss/lib/Utility.css';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
    const className = `dlabs-w-${width} dlabs-h-${height}`;
    return (React.createElement("div", { className: className, style: { backgroundColor: hexCode } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
