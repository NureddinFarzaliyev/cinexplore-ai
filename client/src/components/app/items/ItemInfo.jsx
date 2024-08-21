import React, { useState } from 'react'
import { ITEM_TYPES } from '../../Utils';

import ItemAbout from './ItemAbout';
import Seasons from './Seasons';

import '../../nav/nav.css'

function ItemInfo({data, type}) {

    const [tabState, setTabState] = useState(0)
    const {seasons} = data

    return (
        <div>

            {type === ITEM_TYPES.TV ? (
                <div className='flex gap-6 text-xl mb-7'> 
                    <button className={`${tabState === 0 ? 'navActive' : ''}`} onClick={() => setTabState(0)}>About</button>
                    <button className={`${tabState === 1 ? 'navActive' : ''}`} onClick={() => setTabState(1)}>Seasons</button>
                </div>
            ) : null }

            {tabState === 0 ? (<ItemAbout data={data} type={type} />) : (<Seasons seasons={seasons} />)}
            
        </div>
    )
}

export default ItemInfo
