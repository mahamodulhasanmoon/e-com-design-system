import React from 'react';
import Spacing from '../../foundations/Spacing'
import '@d.labs/scss/lib/Utility.css'
interface ColorProps {
  hexCode:string,
  width?:string;
  height?:string;
}
const Color:React.FC<ColorProps> = (
  {
    hexCode,
    width=Spacing.sm,
    height=Spacing.sm
  }) => {
    const className = `dlabs-w-${width} dlabs-h-${height}`;
  return (
    <div className={className} style={{backgroundColor: hexCode}}>
      
    </div>
  );
};

export default Color;