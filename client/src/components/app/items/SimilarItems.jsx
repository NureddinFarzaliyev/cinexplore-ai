import React, { useEffect, useState } from 'react'
import { getItemsTMDB, logError } from '../../Utils'
import ItemSlider from './ItemSlider'

function SimilarItems({id, type}) {
    const [data, setData] = useState([])

    useEffect(() => {
        getItemsTMDB(`https://api.themoviedb.org/3/${type}/${id}/similar`)
        .then(data => setData(data.results), logError)
    }, [id])

    
    return (
        <div>
            <h1>Similar:</h1>
            <ItemSlider data={data} type={type} isIdArr={false} />
        </div>
    )
}

export default SimilarItems