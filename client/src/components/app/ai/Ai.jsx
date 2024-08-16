import React, { useEffect, useState } from 'react'
import { getRecommendation } from './AiFunctions'
import { ITEM_TYPES } from '../../Utils'
import ChooseItems from './ChooseItems'

function Ai() {

  const [type, setType] = useState(ITEM_TYPES.MOVIE)
  const [userItems, setUserItems] = useState([])

  // getRecommendation(ITEM_TYPES.TV, ['mr. robot', 'severance', 'true detective'])


  return ( 
    <div>
      


      <ChooseItems />


        

    </div>
  )
}

export default Ai
