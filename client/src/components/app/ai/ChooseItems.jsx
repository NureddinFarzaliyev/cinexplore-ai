import React, { useReducer, useState } from 'react'
import Search from '../explore/Search'
import AiSearchResult from './AiSearchResult'
import AiProvider from '../../contexts/AiProvider'
import AiChosenItems from './AiChosenItems'

function ChooseItems() {

    return (
        <div>
            <Search ResultComponent={AiSearchResult} />
            <AiChosenItems />
        </div>
    )

}

export default ChooseItems