import React from 'react'
import {spacing} from '@d.labs/foundations/lib';
import '@d.labs/scss/lib/padding.css';
interface MarginProps {
space?:keyof typeof spacing;
children:React.ReactNode;
top?:boolean;
left?:boolean;
right?:boolean;
bottom?:boolean;
}

const Padding:React.FC<MarginProps> = ({space='md',children,bottom,left,right,top}) => {
   
   let className:string = ''
   if(!left && !right && !top && !bottom){
    className = `dlabs-p-${space}`
   }  

   if(left) className += `dlabs-pl-${space} `;
   if(right) className += `dlabs-pr-${space} `;
   if(top) className += `dlabs-pt-${space} `;
   if(bottom) className += `dlabs-pb-${space} `;

    return(
        <div className={className}>{children}</div>
    )
};

export default Padding;
