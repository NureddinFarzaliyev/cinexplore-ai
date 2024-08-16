import React, { useEffect, useState } from 'react'
import { ITEM_TYPES, logError } from '../../Utils'
import { getItemsTMDB } from '../../Utils'
import { Link } from 'react-router-dom'

function Search( {ResultComponent} ) {
    const [value, setValue] = useState('')
    const [query, setQuery] = useState('')
    const [type, setType] = useState(ITEM_TYPES.MOVIE)

    const [data, setData] = useState()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setQuery(value)
        }, 300);
        return () => clearTimeout(timeout)
    }, [value])

    const onSuccess = (data) => {
        setData(data.results)
    }

    useEffect(() => {
        if(query != ''){
            getItemsTMDB(`https://api.themoviedb.org/3/search/${type}?query=${query}&include_adult=false&language=en-US&page=1`)
            .then(onSuccess, logError)
        }else{
            setData(null)
        }
    }, [query, type])

    // TODO: EXPORT TO DIFFERENT COMPONENTS IF YOU CAN

    // TODO: FORMAT AND STYLE SEARCH RESULTS

    
    return (
    <div>
        
        <input type="text" onChange={e => setValue(e.target.value)} />

        <form> 
            <input type="radio" name='movieortv' id="movie" 
            checked={type === ITEM_TYPES.MOVIE} 
            onChange={() => setType(ITEM_TYPES.MOVIE)} />
            <label htmlFor="movie">Movies</label>

            <input type="radio" name='movieortv' id='tv' 
            checked={type === ITEM_TYPES.TV} 
            onChange={() => setType(ITEM_TYPES.TV)} />
            <label htmlFor="tv">TV Shows</label>
        </form>

        <div>
            {data?.map((e, i) => <ResultComponent data={e} key={i} type={type} />)}
        </div>
    </div>
    )
}

export default Search
