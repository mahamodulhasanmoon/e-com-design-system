import React, { useState } from 'react';
import '@d.labs/scss/lib/Select.css'

export interface SelectOptions {
    label?: string;
    value?: string;
}

interface ISelectProps{
label?:string;
options?: Array<SelectOptions>;
onOptionSelected?:(option:SelectOptions,optionIndex:number)=> void;
}

const Select: React.FC<ISelectProps> = ({
    label='please choose option',
    options=[],
    onOptionSelected
}) => {
    const [isOpen,setIsOpen] = useState<boolean>(false)

   const handleClickOption  = (option:SelectOptions, optionIndex:number)=>{
    if (onOptionSelected){ 
         onOptionSelected(option,optionIndex)
         setIsOpen(false)
        
        }
    }
        
    return (
        <div className='dlabs-select'>
          <button className='dlabs-select-label' onClick={()=> setIsOpen(state=> !state)}>
            <span>{label}</span>
            <span>{label}</span>
          </button>
{
    isOpen && (
        <ul className='dlabs-select-overlay'>
        {
            options.map((option,i) =>(
                <li  key={option.value}
                onClick={()=>handleClickOption(option,i)}
                >{option.label}</li>
            ) )
        }
      </ul>
    )
}
        </div>
    );
};

export default Select;