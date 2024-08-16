import React from 'react'
import { AiItemsDispatchContext } from '../../contexts/aiUserItemsContext'
import { useContext } from 'react'
import { AI_DISPATCH_ACTION } from '../../Utils'

function RemoveFromAIUserBtn({type, id}) {

    const dispatch = useContext(AiItemsDispatchContext)

    return (
        <button onClick={() => {dispatch({type: AI_DISPATCH_ACTION.REMOVE, payload: {type: type, id: id}})}}  className='w-20'>
            X
        </button>
    )
}

export default RemoveFromAIUserBtn
