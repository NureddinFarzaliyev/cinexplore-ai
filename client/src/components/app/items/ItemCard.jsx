import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchUserData, getItemsTMDB } from '../../Utils'
import AddItemBtn from './AddItemBtn'
import { logError } from '../../Utils'
import { useContext } from 'react'
import { LoginContext } from '../../contexts/loginContext'
import RemoveFromAIUserBtn from '../ai/RemoveFromAIUserBtn'

function ItemCard({data, type, isIdArr, isAi}) {
    const [arrData, setArrData] = useState({})
    const [userItems, setUserItems] = useState(null)
    const [placeholderText, setPlaceHolderText] = useState('Loading')

    const isLoggedIn = useContext(LoginContext)

    const onSuccess = (data) => {
        setArrData(data)
    }

    useEffect(() => {
        if(isLoggedIn === true){
            let ignore = false
            if(isIdArr === true){
                if(!ignore) getItemsTMDB(`https://api.themoviedb.org/3/${type}/${data}`).then(onSuccess, logError)   
            }
            if(!ignore) fetchUserData(localStorage.getItem('id'), type).then(data => setUserItems(data))
            return () => {ignore = true}
        }
    }, [data])


    const {title, name , id, poster_path} = isIdArr === true ? arrData : data

    useEffect(() => {
        if(data.name !== undefined){
            setPlaceHolderText(data.name)
        }else if(data.title !== undefined){
            setPlaceHolderText(data.title)
        }else{
            setPlaceHolderText('Loading...')
        }
    }, [title, name])
    

    return (
        <div className='relative'> 
        <Link to={`/explore/${type}/${id}`}>
            <div className='w-32 rounded overflow-hidden shadow-lg'>
                <img src={`${poster_path != null ? `https://image.tmdb.org/t/p/w200/${poster_path}` : `https://images.placeholders.dev/?width=130&height=200&fontSize=10&text=${placeholderText}&bgColor=%23000000&textColor=%23ffffff`}`} height={100} />
            </div>
        </Link>

        {isLoggedIn === true ? <AddItemBtn id={id} type={type} isIncludes={userItems?.includes(String(id))} isDisabled={userItems === null} /> : null}
        {isAi === true ? <RemoveFromAIUserBtn type={type} id={id} /> : null}
        </div>
    )


}

export default ItemCard