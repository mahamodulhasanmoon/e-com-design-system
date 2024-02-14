import React from 'react';
import { fontSize } from '@d.labs/foundations/lib';
import '@d.labs/scss/lib/text.css'
interface TextProps{

size?: keyof typeof fontSize ;
children: React.ReactNode
}

const Text:React.FC<TextProps> = ({size=fontSize.base,children}) => {
    const className = `dlabs-text dlabs-text-${size}`
    return (
        <p className={className}>
          {children}  
        </p>
    );
};

export default Text;
