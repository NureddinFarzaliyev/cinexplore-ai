import React, { useEffect, useState } from 'react'
import { sendPostRequest } from '../Utils'

function AddItemBtn({id, isIncludes, isDisabled, type}) {

    const BTN_STATUS = {
        ADD: 'add',
        REMOVE: 'remove',
        LOADING: 'loading',
    }

    const [btnStatus, setBtnStatus] = useState(BTN_STATUS.LOADING)
    const [disableOnLoading, setDisableOnLoading] = useState(false)
    const [btnInner, setBtnInner] = useState()

    useEffect(() => {
        setBtnStatus(isIncludes ? BTN_STATUS.REMOVE : BTN_STATUS.ADD)
    }, [isIncludes])

    const setBtnInnerText = (status) => {
        let inner

        if(status == BTN_STATUS.LOADING){
            setDisableOnLoading(true)
            inner = 'Loading...'
        }if(status === BTN_STATUS.REMOVE){
            setDisableOnLoading(false)
            inner = 'Remove'
        }if(status === BTN_STATUS.ADD){
            setDisableOnLoading(false)
            inner = 'Add'
        }

        setBtnInner(inner)
    }
    
    useEffect(() => {
        setBtnInnerText(btnStatus)
    }, [btnStatus])

    const onSuccess = (data) => {
        if(btnStatus === BTN_STATUS.REMOVE){
            setBtnStatus(BTN_STATUS.ADD)
        }else{
            setBtnStatus(BTN_STATUS.REMOVE)
        }
        console.log(data)
    }  

    const onFail = (err) => {
        console.error(err)
    }

    const toggleItem  = () => {
        setBtnStatus(BTN_STATUS.LOADING)

        const body = {
            type: type,
            itemid: id
        }

        sendPostRequest(`${import.meta.env.VITE_DB_API_BASE_URL}/user/${localStorage.getItem('id')}/additem`, body).then(onSuccess, onFail)
    }


    return(
        <button onClick={toggleItem} 
        disabled={isDisabled || disableOnLoading} className={`${btnStatus == BTN_STATUS.REMOVE ? 'bg-red-900' : 'bg-green-900'} w-full hover:bg-gray-700`} >
            {btnInner}
        </button>
    )

}

export default AddItemBtn