import React from 'react'
import ItemCard from './ItemCard'
import { ITEM_TYPES } from '../../Utils'

function ItemSlider({data, type, isIdArr, isAi}) {
  return (
    <div className='flex flex-wrap gap-2'>
        {data?.map((e, i) => <ItemCard 
        data={type === ITEM_TYPES.ALL ? e.data : e} 
        key={e.id ? e.id : i} 
        type={type === ITEM_TYPES.ALL ? e.type : type} 
        isIdArr={isIdArr} isAi={isAi} /> )}
    </div>
  )
}

export default ItemSlider
