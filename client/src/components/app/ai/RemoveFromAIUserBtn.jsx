import React from 'react'
import { AiItemsDispatchContext } from '../../contexts/aiUserItemsContext'
import { useContext } from 'react'
import { AI_DISPATCH_ACTION } from '../../Utils'
import { RxCrossCircled } from "react-icons/rx";

function RemoveFromAIUserBtn({type, id}) {

    const dispatch = useContext(AiItemsDispatchContext)

    return (
        <button onClick={() => {dispatch({type: AI_DISPATCH_ACTION.REMOVE, payload: {type: type, id: id}})}}  
        className='text-xl sm:opacity-70 hover:opacity-100 absolute top-1 left-1'>
            <RxCrossCircled />
        </button>
    )
}

export default RemoveFromAIUserBtn
