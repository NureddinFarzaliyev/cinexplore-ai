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
    <div className='mt-5'>
      <div className='flex justify-between py-3'>
        <h1 className='text-2xl font-semibold'>{listHeader ? listHeader : similarName}</h1>
        {isSimilar === true ? null : <Link to={`/explore/page/${listType}/${listName}`} className='p-1 underline hover:text-accent'>Show More</Link>}
      </div>

      <ItemSlider data={data} type={listType} />
    </div>
  )
}

export default ItemList
