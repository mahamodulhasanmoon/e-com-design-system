import React, { useLayoutEffect, useRef, useState } from 'react';
import '@d.labs/scss/lib/Select.css'
import Text from '../../atoms/text';

export interface SelectOptions {
    label?: string;
    value?: string;
}
export interface RenderOptionProps {
    label?: string;
    value?: string;
}

interface ISelectProps {
    label?: string;
    options?: Array<SelectOptions>;
    onOptionSelected?: (option: SelectOptions, optionIndex: number) => void;
    renderOption?: (props: RenderOptionProps) => React.ReactNode;
}

const Select: React.FC<ISelectProps> = ({
    label = 'please choose option',
    options = [],
    onOptionSelected,
    renderOption
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [overlayTop, setOverlayTop] = useState<number>(0);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const labelRef = useRef<HTMLButtonElement>(null)

    useLayoutEffect(() => {

        setOverlayTop(labelRef.current?.offsetHeight || 0)

    }, [labelRef.current?.offsetHeight])

    const handleClickOption = (option: SelectOptions, optionIndex: number) => {
        if (onOptionSelected) {
            onOptionSelected(option, optionIndex)


        }
        setSelectedIndex(optionIndex)
        setIsOpen(false)
    }

    return (
        <div className='dlabs-select'>
            <button ref={labelRef} className='dlabs-select-label' onClick={() => setIsOpen(state => !state)}>
                {/* <span>{label}</span> */}
                <Text>
                    {label}
                </Text>
                <svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					width={'1rem'}
					height={'1rem'}
                    className={`dlabs-select-caret ${
						isOpen
							? 'dlabs-select-caret-open'
							: 'dlabs-select-caret-close'
					}`}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19.5 8.25l-7.5 7.5-7.5-7.5'
					/>
				</svg>

            </button>
            {
                isOpen && (
                    <ul style={{
                        top: overlayTop
                    }} className='dlabs-select-overlay'>
                        {
                            options.map((option, i) => {
                                const isSelected = selectedIndex === i
                                return (
                                    <li key={option.value}
                                        className={`dlabs-select-option  ${isSelected ? 'dlabs-select-option-selected' : ''}`}
                                        onClick={() => handleClickOption(option, i)}
                                    >{option.label}</li>
                                )
                            })
                        }
                    </ul>
                )
            }
        </div>
    );
};

export default Select;