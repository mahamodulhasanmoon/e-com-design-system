import React from 'react';
import { fontSize, spacing } from '@d.labs/foundations/lib';
import '@d.labs/scss/lib/Utility.css';
interface ColorProps {
    hexCode: string;
    width?: keyof typeof spacing;
    height?: keyof typeof fontSize;
}
declare const Color: React.FC<ColorProps>;
export default Color;
