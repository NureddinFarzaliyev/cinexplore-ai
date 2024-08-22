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
            {itemsContext.length !== 0 ? (
                <ItemSlider data={itemsContext} type={ITEM_TYPES.ALL} isIdArr={false} isAi={true} />
            ) : (
                <div className='text-center w-96 absolute left-[50%] translate-x-[-50%] mt-10'>
                    Choose up to 25 Movies or TV Shows & Ask Artificial Intelligence for 10 more recommendations.
                    <span className='block text-white opacity-60'>Powered by Llama & Groq</span>
                </div>
            ) }
        </div>
    )
}

export default AiChosenItems
