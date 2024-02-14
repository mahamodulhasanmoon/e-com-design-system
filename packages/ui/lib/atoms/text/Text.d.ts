import React from 'react';
import { fontSize } from '@d.labs/foundations/lib';
import '@d.labs/scss/lib/text.css';
interface TextProps {
    size?: keyof typeof fontSize;
    children: React.ReactNode;
}
declare const Text: React.FC<TextProps>;
export default Text;
