import React, { useEffect, useState } from 'react'
import { sendPostRequest } from '../../Utils'
import { logError } from '../../Utils'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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
            inner = <AiOutlineLoading3Quarters className='animate-spin' />
        }if(status === BTN_STATUS.REMOVE){
            setDisableOnLoading(false)
            inner = '-'
        }if(status === BTN_STATUS.ADD){
            setDisableOnLoading(false)
            inner = '+'
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
        // console.log(data)
    }  

    const toggleItem  = () => {
        setBtnStatus(BTN_STATUS.LOADING)

        const body = {
            type: type,
            itemid: id
        }

        sendPostRequest(`${import.meta.env.VITE_DB_API_BASE_URL}/user/${localStorage.getItem('id')}/additem`, body).then(onSuccess, logError)
    }

    return(
        <button onClick={toggleItem} 
        disabled={isDisabled || disableOnLoading} 
        className={`${btnStatus == BTN_STATUS.REMOVE ? 'bg-red-900' : 'bg-accent'} 
        sm:opacity-50 hover:opacity-100 transition-colors absolute right-0 top-0 p-1 rounded-md h-7 w-7 text-center m-1 font-bold text-sm flex items-center justify-center`} >
            {btnInner}
        </button>
    )
}

export default AddItemBtn