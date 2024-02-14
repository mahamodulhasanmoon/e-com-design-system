import React from 'react';
import '@d.labs/scss/lib/button.css';

const Button = ({ title, children, onClick }) => {
    return (React.createElement("button", { className: 'btn', title: title, onClick: onClick }, children));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
