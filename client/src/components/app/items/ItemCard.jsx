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


    const {title, name , id, vote_average, poster_path, backdrop_path} = isIdArr === true ? arrData : data

    return (
        // TODO: CREATE SEPERATE COMPONENTS
        <div> 
        <Link to={`/explore/${type}/${id}`}>
            <div className='w-32 rounded overflow-hidden shadow-lg'>
                {/* <h3>{title ? title : name}</h3> */}
                <img src={`${poster_path != null ? `https://image.tmdb.org/t/p/w200/${poster_path}` : `https://placehold.co/124x186`}`} alt={title ? title : name} height={100} />
            </div>
        </Link>

        {/* {isLoggedIn === false ? <h1>Log in to add</h1> : null} */}
        {/* {isLoggedIn === true ? <AddItemBtn id={id} type={type} isIncludes={userItems?.includes(String(id))} isDisabled={userItems === null} /> : null} */}

        {isAi === true ? <RemoveFromAIUserBtn type={type} id={id} /> : null}
        </div>
    )
}

export default ItemCard