import React from 'react';
import { fontSize } from '@d.labs/foundations/lib';
import '@d.labs/scss/lib/Utility.css';

const Color = ({ hexCode, width = fontSize.sm, height = fontSize.sm }) => {
    const className = `dlabs-w-${width} dlabs-h-${height}`;
    return (React.createElement("div", { className: className, style: { backgroundColor: hexCode } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
