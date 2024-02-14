import React from 'react';
import { fontSize } from '@d.labs/foundations/lib';
import '@d.labs/scss/lib/text.css';

const Text = ({ size = fontSize.base, children }) => {
    const className = `dlabs-text dlabs-text-${size}`;
    return (React.createElement("p", { className: className }, children));
};

export { Text as default };
//# sourceMappingURL=Text.js.map
