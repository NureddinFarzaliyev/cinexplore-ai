import React, { useEffect, useState } from 'react'
import { sendPostRequest } from '../Utils'
import { ITEM_TYPES } from '../Utils'




function AddItemBtn({id, isIncludes, isDisabled, type}) {
    const BTN_STATUS = {
        INIT: 'init',
        LOADING: 'loading',
        DONE: 'done'
    }

    const [btnStatus, setBtnStatus] = useState(BTN_STATUS.INIT)
    const [btnInner, setBtnInner] = useState()

    useEffect(() => {
        let inner 

        if(btnStatus == BTN_STATUS.LOADING){
            inner = 'Loading...'
        }
        else if(isIncludes === true){
            inner = 'Remove'
        }else{
            inner = 'Add'
        }

        setBtnInner(inner)
    }, [btnStatus, isIncludes])

    const addToProfile  = () => {
        setBtnStatus(BTN_STATUS.LOADING)
        console.log(type)

        const body = {
            type: type,
            itemid: id
        }

        sendPostRequest(`${import.meta.env.VITE_DB_API_BASE_URL}/user/${localStorage.getItem('id')}/additem`, body).then(
            setBtnStatus(BTN_STATUS.DONE)
        )

        console.log('added')
    }

    const removeFromProfile = () => {
        setBtnStatus(BTN_STATUS.LOADING)
        console.log('remove')
    }


    return(
        <button onClick={(e) => { isIncludes ? removeFromProfile(e) : addToProfile(e) }} 
        disabled={isDisabled} className={`${isIncludes ? 'bg-red-900' : 'bg-green-900'} w-full hover:bg-gray-700`} >
            {btnInner}
        </button>
    )

}

export default AddItemBtn
