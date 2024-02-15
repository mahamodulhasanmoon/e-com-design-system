import React from 'react'
import '@d.labs/scss/lib/button.css'
export interface ButtonProps{
title:string;
children:React.ReactNode,
onClick?:()=> void;
}


const Button:React.FC<ButtonProps> = ({title,children,onClick})=> {
    return (
        <button className='btn' title={title} onClick={onClick}>{children}</button>
        )
}
export default Button