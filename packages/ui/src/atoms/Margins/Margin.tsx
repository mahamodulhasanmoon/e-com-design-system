import React from 'react'
import {spacing} from '@d.labs/foundations/lib';
import '@d.labs/scss/lib/margin.css';
interface MarginProps {
space?:keyof typeof spacing;
children:React.ReactNode;
top?:boolean;
left?:boolean;
right?:boolean;
bottom?:boolean;
}

const Margin:React.FC<MarginProps> = ({space='md',children,bottom,left,right,top}) => {
   
   let className:string = ''
   if(!left && !right && !top && !bottom){
    className = `dlabs-m-${space}`
   }  

   if(left) className += `dlabs-ml-${space} `;
   if(right) className += `dlabs-mr-${space} `;
   if(top) className += `dlabs-mt-${space} `;
   if(bottom) className += `dlabs-mb-${space} `;

    return(
        <div className={className}>{children}</div>
    )
};

export default Margin;
