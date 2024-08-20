import React, { useEffect, useState } from 'react'
import ChooseItems from './ChooseItems'
import AiProvider from '../../contexts/AiProvider'
import AiRecommendation from './AiRecommendation'

function Ai() {



  return ( 
    <div className='mt-24 absolute px-2 sm:px-20 overflow-hidden w-dvw'>
      <AiProvider>
        <ChooseItems />
        <AiRecommendation />
      </AiProvider>
    </div>
  )
}

export default Ai
