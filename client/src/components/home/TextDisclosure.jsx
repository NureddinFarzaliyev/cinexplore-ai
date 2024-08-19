import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaChevronDown } from "react-icons/fa";

function TextDisclosure({title, text}) {
    return (
        <div className="sm:min-h-48 mt-5 sm:mt-0">
            <Disclosure> 

                <DisclosureButton className="w-full p-3 bg-accent hover:bg-accentHover transition-colors rounded-lg">
                    <div className='flex justify-between items-center'> 
                        <span className='text-sm font-semibold'> {title} </span>
                        <FaChevronDown className='group-data-[open]:rotate-180' />
                    </div>
                </DisclosureButton>

                <DisclosurePanel className={'font-regular p-3 rounded text-sm shadow-2xl bg-darkBg sm:text-md'}>{text}</DisclosurePanel>

            </Disclosure>
        </div>
    )
}

export default TextDisclosure
