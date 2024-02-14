import React from 'react';
import { spacing } from '@d.labs/foundations/lib';
import '@d.labs/scss/lib/padding.css';
interface MarginProps {
    space?: keyof typeof spacing;
    children: React.ReactNode;
    top?: boolean;
    left?: boolean;
    right?: boolean;
    bottom?: boolean;
}
declare const Padding: React.FC<MarginProps>;
export default Padding;
