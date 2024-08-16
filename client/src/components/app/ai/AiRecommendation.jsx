import React, { useEffect, useState } from 'react'
import { AiItemsContext } from '../../contexts/aiUserItemsContext'
import { useContext } from 'react'
import { logError } from '../../Utils'
import { sendAiRequest } from './AiFunctions'

function AiRecommendation() {
    const userItems = useContext(AiItemsContext)
    const [data, setData] = useState([])
    
    const clickHandler = async () => {
        const arr = userItems.map(el => el.data.title ? el.data.title : el.data.name)
        console.log("user input:", arr)
        sendAiRequest(arr).then(data => {setData(data)}, logError)
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div>
            <button disabled={userItems.length === 0} onClick={() => clickHandler()} className='p-3 border-2 m-5 hover:bg-red-900'>Get Recommendations.</button>
        </div>
    )
}

export default AiRecommendation
