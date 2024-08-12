import React, { useEffect, useState } from 'react'
import { getItemsTMDB } from '../../Utils'
import ItemCard from '../ItemCard'

function ItemList({listName, listHeader, listType}) {
    const [data, setData] = useState(null)

    const onSuccess = (data) => {
        setData(data.results)
        // console.log(data.results)
    }

    const onFail = (error) => {
        console.error(error)
    }

    useEffect(() => {
        let ignore = false;
        if(!ignore) getItemsTMDB(`https://api.themoviedb.org/3/${listType}/${listName}?language=en-US&page=1`).then(onSuccess, onFail)
        return () => {ignore = true}
    }, [])

  return (
    <div className='border-8 m-5'>
      <h1 className='text-3xl'>{listHeader}</h1>

      
      <div className='flex flex-wrap gap-2'>
        {data?.map(e => <ItemCard data={e} key={e.id} type={listType} /> )}
      </div>
    </div>
  )
}

export default ItemList
