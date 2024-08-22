import React from 'react'
import ItemCard from './ItemCard'
import { ITEM_TYPES } from '../../Utils'
import { Fade } from "react-awesome-reveal";

function ItemSlider({data, type, isIdArr, isAi}) {
  
  if(data){
    return (
      <Fade triggerOnce={true}>
      <div className='flex gap-2 overflow-x-scroll'>
          {data?.map((e, i) => <ItemCard 
          data={type === ITEM_TYPES.ALL ? e.data : e} 
          key={e.id ? e.id : i} 
          type={type === ITEM_TYPES.ALL ? e.type : type} 
          isIdArr={isIdArr} isAi={isAi} /> )}
      </div>
      </Fade>
    )
  }else{
    return (
      <div className='h-52'>
      </div>
    )
  }
}

export default ItemSlider
