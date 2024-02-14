import React from 'react';
import {fontSize,spacing} from '@d.labs/foundations/lib';
import '@d.labs/scss/lib/Utility.css'
interface ColorProps {
  hexCode:string,
  width?:keyof typeof spacing;
  height?:keyof typeof fontSize;
}
const Color:React.FC<ColorProps> = (
  {
    hexCode,
    width=fontSize.sm,
    height=fontSize.sm
  }) => {
    const className = `dlabs-w-${width} dlabs-h-${height}`;
  return (
    <div className={className} style={{backgroundColor: hexCode}}>
      
    </div>
  );
};

export default Color;