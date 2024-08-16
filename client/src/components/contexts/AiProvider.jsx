import React from 'react'
import { useReducer } from 'react'
import { AiItemsContext } from './aiUserItemsContext'
import { AiItemsDispatchContext } from './aiUserItemsContext'
import { AI_DISPATCH_ACTION } from '../Utils'

function AiProvider({children}) {
    
    const itemsReducer = (state, action) => {
        switch (action.type) {
            case AI_DISPATCH_ACTION.ADD:
                return [...state, {type: action.payload.type, data: action.payload.data}]
            case AI_DISPATCH_ACTION.REMOVE:
                return state.filter((e) => {
                    return !(e.data.id === action.payload.id && e.type === action.payload.type)
                })
            default:
                return state
        }
    }

    const [userItems, dispatch] = useReducer(itemsReducer, [])

    return (
        <div>
        <AiItemsContext.Provider value={userItems}>
            <AiItemsDispatchContext.Provider value={dispatch}>
                {children}
            </AiItemsDispatchContext.Provider>
        </AiItemsContext.Provider>
        </div>
    )
}

export default AiProvider
