import React, { useEffect, useState } from 'react'
import ItemSlider from '../items/ItemSlider'
import { Link } from 'react-router-dom'
import { fetchDataForItemList } from './itemListFunctions'
import { IoSparkles } from "react-icons/io5";
import './explore.css'

function ItemList({listName, listHeader, listType, isSimilar}) {
  const [data, setData] = useState(null)
  const [similarName, setSimilarName] = useState('')

  useEffect(() => {
    fetchDataForItemList(isSimilar, listType, listName, setSimilarName, setData);
  }, [])
    
  return (
    <div className={`mt-10 ${isSimilar === true && 'accentGradient p-4 rounded-lg'}`}>
      <div className='flex flex-col sm:flex-row justify-between'>

        <h1 className='text-lg sm:text-2xl font-semibold flex gap-3 items-center'> 
          {similarName && (
            <span className='mx-2 text-4xl'>
              <IoSparkles />
            </span>
          )}
          {listHeader ? listHeader : similarName}
        </h1>

        {isSimilar === true ? null : <Link to={`/explore/page/${listType}/${listName}`} className='sm:p-1 text-sm sm:text-base underline hover:text-accent'>Show More</Link>}

      </div>

      <div className='mt-4'>
        <ItemSlider data={data} type={listType}  />
      </div>
    </div>
  )
}

export default ItemList
