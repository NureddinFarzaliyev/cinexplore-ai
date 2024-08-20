import React, { useEffect, useState } from 'react'
import { ITEM_TYPES, logError } from '../../Utils'
import { getItemsTMDB } from '../../Utils'
import SearchResults from './SearchResults'
import { ImCross } from "react-icons/im";

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
    
    return (
    <div>

        <div className='flex shadow-xl relative'>

            <select className='bg-accent text-center shadow-xl font-semibold h-10 rounded-lg rounded-e-none sm:px-10' name='type' onChange={(e) => setType(e.target.value)} >
                <option value={ITEM_TYPES.MOVIE}>Movies</option>
                <option value={ITEM_TYPES.TV}>TV Shows</option>
            </select>

            <input type="text" placeholder='Search...' className='w-full h-10 rounded-lg rounded-s-none pl-5 opacity-75' value={value} onChange={e => setValue(e.target.value)} />

            <button className='absolute right-4 top-0 bottom-0 text-black text-opacity-30 hover:text-opacity-40' onClick={() => {setValue('')}}><ImCross/></button>
        </div>

        <SearchResults data={data} type={type} ResultComponent={ResultComponent} />
    </div>
    )
}

export default Search
