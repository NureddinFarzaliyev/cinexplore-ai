import React, { useEffect, useState } from 'react'
import ChooseItems from './ChooseItems'
import AiProvider from '../../contexts/AiProvider'
import AiRecommendation from './AiRecommendation'

function Ai() {



  return ( 
    <AiProvider>
      <ChooseItems />
      <AiRecommendation />
    </AiProvider>
  )
}

export default Ai
