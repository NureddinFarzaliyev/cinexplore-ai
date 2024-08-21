import React from 'react'
import { ITEM_TYPES } from '../../Utils'
import TMDBIcon from '../../../assets/tmdb.svg'
import { FaClock } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io5";
import { FaTv } from "react-icons/fa6";
import SimilarItems from './SimilarItems';

function ItemAbout({data, type}) {

    const {budget, runtime, overview, status, vote_average,} = data
    const {} = data

    return (
        <div className='flex flex-col gap-10'>
            <div>
                <p className='max-h-24 overflow-scroll'>{overview}</p>

                <div className='flex gap-3 mt-4'>

                    <div className='flex items-center gap-2'><img className='h-4' src={TMDBIcon} alt="score" /> {vote_average}</div>

                    {type === ITEM_TYPES.TV ? (
                        <>
                            <div className='flex items-center gap-2'><FaTv /> {status}</div>
                        </>
                    ) : (
                        <>
                            <div className='flex items-center gap-2'><FaClock /> {runtime}</div>
                            <div className='flex items-center gap-2'><IoLogoUsd /> {budget}</div>
                        </>
                    ) }

                </div>
            </div>

            <SimilarItems id={data.id} type={type} />

        </div>
    )
}

export default ItemAbout
