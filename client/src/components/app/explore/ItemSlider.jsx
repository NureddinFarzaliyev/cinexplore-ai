import React from 'react'
import ItemCard from '../ItemCard'

function ItemSlider({data, type, isIdArr}) {
  return (
    <div className='flex flex-wrap gap-2'>

        {data?.map((e, i) => <ItemCard data={e} key={e.id ? e.id : i} type={type} isIdArr={isIdArr} /> )}

    </div>
  )
}

export default ItemSlider
