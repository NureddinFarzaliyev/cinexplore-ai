import React, { useEffect } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaAngleDown } from "react-icons/fa";
import { getItemsTMDB } from '../../Utils';
import Episodes from './Episodes';

function Seasons({seasons, id}) {

    return (
        <div className='sm:w-[70vw] sm:h-96'>
            <div className='sm:h-96 sm:w-[80%] pr-3 sm:overflow-y-scroll overflow-x-hidden'>

            {seasons?.map((e, i) => {
                return(
                    <Disclosure as="div" className="w-[100%] bg-bg bg-opacity-95 shadow-lg p-4 rounded-lg m-3" key={i} >
                    <DisclosureButton className="group flex w-full items-center justify-between">
                        <div className='flex'>
                            <img src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`} className='w-14 sm:w-20 rounded-md' alt="" />
                            <div className='text-left ml-5'>
                                <h1 className='font-semibold text-xl mb-1'>{e.name}</h1>
                                <p className='h-10 sm:h-20 overflow-scroll text-sm opacity-50 w-[80%]'>{e.overview}</p>
                            </div>
                        </div>
                        <FaAngleDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                    </DisclosureButton>

                    <DisclosurePanel className="mt-2">
                        <Episodes id={id} season={e.season_number} />
                    </DisclosurePanel>
                    
                </Disclosure>)
            })}
            
            </div>

        </div>
    )
}

export default Seasons
