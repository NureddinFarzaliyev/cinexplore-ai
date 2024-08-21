import React, { useEffect, useState } from 'react'
import { getItemsTMDB, logError } from '../../Utils'
import ItemSlider from './ItemSlider'

function SimilarItems({id, type}) {
    const [data, setData] = useState([])

    useEffect(() => {
        if(id !== undefined){
            let ignore = false
            if(!ignore) getItemsTMDB(`https://api.themoviedb.org/3/${type}/${id}/similar`).then(data => setData(data.results), logError)
            return () => {ignore = true}
        }
    }, [id])
    
    return (
        <div className='sm:w-[60vw]'>
            <h1 className='mb-2 text-lg font-semibold'>Similar:</h1>
            <ItemSlider data={data} type={type} isIdArr={false} />
        </div>
    )
}

export default SimilarItems