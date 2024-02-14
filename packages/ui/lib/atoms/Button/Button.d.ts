import React from 'react';
import '@devXionLabs/scss/lib/button.css';
interface ButtonProps {
    title: string;
    children: React.ReactNode;
    onClick: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
