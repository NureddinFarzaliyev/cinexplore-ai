import React, { useEffect, useState } from 'react'
import { AiItemsContext } from '../../contexts/aiUserItemsContext'
import { useContext } from 'react'
import { logError } from '../../Utils'
import { handleAiData, sendAiRequest } from './AiFunctions'
import ItemSlider from '../items/ItemSlider'
import { ITEM_TYPES } from '../../Utils'
import RecommendationButton from './RecommendationButton'
import { addRecommendationsToLocal } from './AiFunctions'

function AiRecommendation() {
    const userItems = useContext(AiItemsContext)
    const [data, setData] = useState([])
    const [processedData, setProcessedData] = useState([])
    const [btnState, setBtnState] = useState('')
    const [prevrec, setPrevrec] = useState(null)

    useEffect(() => {
        setPrevrec(localStorage.getItem('prevrec'))
    }, [processedData])
    
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
        addRecommendationsToLocal(JSON.stringify(processed))
        setBtnState('')
    }
    
    useEffect( () => {   
        processData(data)
    }, [data])

    return (
        <div className='flex flex-col items-center'>
            <RecommendationButton clickHandler={clickHandler} btnState={btnState} /> <br />
            { processedData.length === 0 && <p className='opacity-50 italic mb-1 text-xs'>Previous Recommendations:</p>}
            <div className='mt-1 w-[100%]'>
                {<ItemSlider data={processedData.length !== 0 ? processedData : JSON.parse(prevrec)} type={ITEM_TYPES.ALL} isIdArr={false} isAi={false} />}
            </div>
        </div>
    )
}

export default AiRecommendation
