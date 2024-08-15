import React, { useEffect, useState } from 'react'
import ItemSlider from '../items/ItemSlider'
import { Link } from 'react-router-dom'
import { fetchDataForItemList } from './itemListFunctions'

function ItemList({listName, listHeader, listType, isSimilar}) {
  const [data, setData] = useState(null)
  const [similarName, setSimilarName] = useState('')

  useEffect(() => {
    fetchDataForItemList(isSimilar, listType, listName, setSimilarName, setData);
  }, [])
    
  return (
    <div className='border-8 m-5'>
      <h1 className='text-3xl'>{listHeader ? listHeader : similarName}</h1>
      {isSimilar === true ? null : <Link to={`/explore/page/${listType}/${listName}`} className='bg-orange-900 p-1'>show more</Link>}
      <ItemSlider data={data} type={listType} />
    </div>
  )
}

export default ItemList
