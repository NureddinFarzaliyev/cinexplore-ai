import React, { useEffect, useState } from 'react'
import { AiItemsContext } from '../../contexts/aiUserItemsContext'
import { useContext } from 'react'
import { logError } from '../../Utils'
import { handleAiData, sendAiRequest } from './AiFunctions'
import ItemSlider from '../items/ItemSlider'
import { ITEM_TYPES } from '../../Utils'
import RecommendationButton from './RecommendationButton'

function AiRecommendation() {
    const userItems = useContext(AiItemsContext)
    const [data, setData] = useState([])
    const [processedData, setProcessedData] = useState([])
    const [btnState, setBtnState] = useState('')
    
    const clickHandler = () => {
        if(userItems.length != 0){
            setBtnState('loading')
            const arr = userItems.map(el => el.data.title ? el.data.title : el.data.name)
            sendAiRequest(arr).then(data => {setData(data)}, logError)
        }
    }
    
    const processData = async (data) => {
        const processed = await handleAiData(data)
        setProcessedData(processed)
        setBtnState('')
    }
    
    useEffect( () => {   
        processData(data)
    }, [data])

    return (
        <div>
            <RecommendationButton clickHandler={clickHandler} btnState={btnState} /> <br />
            { processedData.length !== 0 && <i className='opacity-50'>Caution: Leaving this page or clicking any of the items will cause your recommendations to be lost. This issue will be fixed.</i>}
            <div className='mt-1'>
                {<ItemSlider data={processedData && processedData} type={ITEM_TYPES.ALL} isIdArr={false} isAi={false} />}
            </div>
        </div>
    )
}

export default AiRecommendation
