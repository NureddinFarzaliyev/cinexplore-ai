import React, { useEffect, useState } from 'react'
import { getItemsTMDB } from '../../Utils'
import ItemSlider from './ItemSlider'
import { Link } from 'react-router-dom'
import { logError } from '../../Utils'

function ItemList({listName, listHeader, listType}) {
  const [data, setData] = useState(null)

  const onSuccess = (data) => {
    setData(data.results)
  }

  useEffect(() => {
    let ignore = false;
    if(!ignore) getItemsTMDB(`https://api.themoviedb.org/3/${listType}/${listName}?language=en-US&page=1`).then(onSuccess, logError)
    return () => {ignore = true}
  }, [])
    
  return (
    <div className='border-8 m-5'>
      <h1 className='text-3xl'>{listHeader}</h1>
      <Link to={`/explore/page/${listType}/${listName}`} className='bg-orange-900 p-1'>show more</Link>
      <ItemSlider data={data} type={listType} />
    </div>
  )
}

export default ItemList
