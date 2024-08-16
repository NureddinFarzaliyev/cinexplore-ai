import React from 'react'
import { useContext } from 'react'
import { AiItemsContext } from '../../contexts/aiUserItemsContext'
import ItemSlider from '../items/ItemSlider'
import { ITEM_TYPES } from '../../Utils'

function AiChosenItems() {
    const itemsContext = useContext(AiItemsContext)

    return (
        <div>
            <p>items</p>
            <ItemSlider data={itemsContext} type={ITEM_TYPES.ALL} isIdArr={false} isAi={true} />
        </div>
    )
}

export default AiChosenItems
