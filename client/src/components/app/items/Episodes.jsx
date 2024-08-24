import React, { useEffect, useState } from 'react'
import { getItemsTMDB } from '../../Utils'

function Episodes({id, season}) {

    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        getItemsTMDB(`https://api.themoviedb.org/3/tv/${id}/season/${season}`).then(data => setEpisodes(data.episodes))
    }, [id, season])

    return (
        <div>
            {episodes?.map((e, i) => {
                return(
                <div key={i} className='flex gap-3 items-center my-4'>
                    <img className={'h-20 rounded-lg'} src={`https://image.tmdb.org/t/p/w200/${e.still_path}`} alt=":(" />
                    <div>
                        <h1 className='font-semibold'>S{season}E{i+1} | {e.name}</h1>
                        <p className='text-xs opacity-50 mt-1'>{e.overview}</p>
                    </div>
                </div>)
            })}
        </div>  
    )
}

export default Episodes
