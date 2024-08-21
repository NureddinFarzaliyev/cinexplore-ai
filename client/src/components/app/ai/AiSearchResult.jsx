import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AiItemsDispatchContext } from '../../contexts/aiUserItemsContext'
import { AI_DISPATCH_ACTION } from '../../Utils'

function AiSearchResult({ type, data, setIsResultsOpen}) {
    const dispatch = useContext(AiItemsDispatchContext)

    return (
        <div className='flex items-center gap-3 p-1 rounded hover:bg-gray-400 transition-colors cursor-pointer' onClick={() => {
            dispatch({type: AI_DISPATCH_ACTION.ADD, payload: {type: type, data: data}})
            setIsResultsOpen(false)
            }}>
            <img src={`${data.poster_path != null ? 
                    (`https://image.tmdb.org/t/p/w200/${data.poster_path}`) : 
                    (`https://placehold.co/124x186`)}`} 
                    alt={data.title ? data.title : data.name} 
                    className='rounded-lg shadow-xl w-12 object-cover' />
            <p className='font-semibold'>{data.name ? data.name : data.title}</p>
        </div>
    )
}

export default AiSearchResult
