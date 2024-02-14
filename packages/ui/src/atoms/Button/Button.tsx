import React from 'react'
import '@devXionLabs/scss/lib/button.css'
interface ButtonProps{
title:string;
children:React.ReactNode,
onClick:()=> void;
}


const Button:React.FC<ButtonProps> = ({title,children,onClick})=> {
    return (
        <button className='btn' title={title} onClick={onClick}>{children}</button>
        )
}
export default Button