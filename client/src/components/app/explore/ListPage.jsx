import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getItemsTMDB } from '../../Utils'
import ItemCard from '../ItemCard'
import { logError } from '../../Utils'

function ListPage() {

    const {listName, type} = useParams()
    const [page, setPage] = useState(1)
    const [data, setData] = useState(null)
    const [result, setResult] = useState([])

    const onSuccess = (data) => {
        setData(data)
        setResult(data.results)
    }

    useEffect(() => {
        let ignore = false;
        if(!ignore) getItemsTMDB(`https://api.themoviedb.org/3/${type}/${listName}?language=en-US&page=${page}`).then(onSuccess, logError)
        return () => {ignore = true}
    }, [page])


    const {total_results, total_pages} = data ? data : {}

    return (
    <div>
        <button onClick={() => {setPage(p => p - 1 == 0 ? 1 : p - 1)}}> (-) </button>
        <p>{page}/{total_pages}</p> 
        <button onClick={() => {setPage(p => p + 1 == total_pages ? total_pages : p + 1)}}> (+) </button>

        <p>Total Results: {total_results}</p>

        <div className='flex flex-wrap'>
            {result?.map((e, i) => <ItemCard data={e} key={e.id ? e.id : i} type={type} /> )}
        </div>
    </div>
    )
}

export default ListPage
