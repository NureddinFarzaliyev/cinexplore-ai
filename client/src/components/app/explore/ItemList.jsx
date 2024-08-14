import React, { useEffect, useState } from 'react'
import { getItemsTMDB } from '../../Utils'
import ItemSlider from './ItemSlider'

function ItemList({listName, listHeader, listType}) {
  const [data, setData] = useState(null)

  const onSuccess = (data) => {
    setData(data.results)
  }

  const onFail = (error) => {
    console.error(error)
  }

  useEffect(() => {
    let ignore = false;
    if(!ignore) getItemsTMDB(`https://api.themoviedb.org/3/${listType}/${listName}?language=en-US&page=1`).then(onSuccess, onFail)
    return () => {ignore = true}
  }, [])

  // TODO: ADD EXPANDED PANEL FOR SHOW MORE
    
  return (
    <div className='border-8 m-5'>
      <h1 className='text-3xl'>{listHeader}</h1>
      <ItemSlider data={data} type={listType} />
    </div>
  )
}

export default ItemList
