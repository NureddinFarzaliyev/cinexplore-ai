import React from 'react'
import { useContext } from 'react'
import { AiItemsContext } from '../../contexts/aiUserItemsContext'
import ItemSlider from '../items/ItemSlider'
import { ITEM_TYPES } from '../../Utils'

function AiChosenItems() {
    const itemsContext = useContext(AiItemsContext)

    return (
        <div className='h-60'>
            <p className='mt-10 mb-2 text-lg'>{`Chosen items (${itemsContext.length}/25)`}</p>
            <ItemSlider data={itemsContext} type={ITEM_TYPES.ALL} isIdArr={false} isAi={true} />
        </div>
    )
}

export default AiChosenItems
