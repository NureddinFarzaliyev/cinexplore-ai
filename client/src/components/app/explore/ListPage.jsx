import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getItemsTMDB } from '../../Utils'
import ItemCard from '../items/ItemCard'
import { logError } from '../../Utils'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

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
    <div className="mt-24 absolute">
        <div className='flex flex-col items-center my-5'>
            <div className='bg-gray-200 w-52 flex items-center px-5 justify-between h-7 rounded-md text-black'>
                <button onClick={() => {setPage(p => p - 1 == 0 ? 1 : p - 1)}}> <FaAngleLeft/> </button>
                <div className='bg-accent h-full px-6 text-white font-bold'>{page}/{total_pages}</div> 
                <button onClick={() => {setPage(p => p + 1 == total_pages + 1 ? p : p + 1)}}> <FaAngleRight/> </button>
            </div>
            <p className='text-center'>Total Results: {total_results}</p>
        </div>

        <div className='flex flex-wrap gap-2 justify-center sm:px-10'>
            {result?.map((e, i) => <ItemCard data={e} key={e.id ? e.id : i} type={type} /> )}
        </div>
    </div>
    )
}

export default ListPage
