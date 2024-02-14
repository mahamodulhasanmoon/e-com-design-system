import React from 'react';
import Spacing from '../../foundations/Spacing';
import '@d.labs/scss/lib/Utility.css';
interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: React.FC<ColorProps>;
export default Color;
