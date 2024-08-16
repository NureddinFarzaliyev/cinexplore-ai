import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AiItemsDispatchContext } from '../../contexts/aiUserItemsContext'
import { AI_DISPATCH_ACTION } from '../../Utils'

function AiSearchResult({ type, data}) {
    const dispatch = useContext(AiItemsDispatchContext)

    return (
        <div>
            {data.name ? data.name : data.title}
            <button className='border-2' 
            onClick={() => {dispatch({type: AI_DISPATCH_ACTION.ADD, payload: {type: type, data: data}})}}> 
                add
            </button>
        </div>
    )
}

export default AiSearchResult
