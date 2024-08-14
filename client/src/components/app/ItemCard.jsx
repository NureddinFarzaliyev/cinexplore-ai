import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchUserData, getItemsTMDB } from '../Utils'
import AddItemBtn from './AddItemBtn'
import { ITEM_TYPES } from '../Utils'

function ItemCard({data, type, isIdArr}) {
    const [arrData, setArrData] = useState({})
    const [userItems, setUserItems] = useState(null)

    const onSuccess = (data) => {
        setArrData(data)
    }

    const onFail = (err) => {
        console.error(err)
    }

    useEffect(() => {
        let ignore = false
        if(isIdArr === true){
            if(!ignore){
                getItemsTMDB(`https://api.themoviedb.org/3/${type}/${data}`).then(onSuccess, onFail)  
            } 
        }
        fetchUserData(localStorage.getItem('id'), type).then(data => setUserItems(data))
        return () => {ignore = true}
    }, [data])


    const {title, name , id, vote_average, poster_path, backdrop_path} = isIdArr === true ? arrData : data

    return (
        <div>
        <Link to={`/explore/${type}/${id}`}>
            <div className='border-2 w-32'>
                <h3>{title ? title : name}</h3>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="poster" height={100} />
            </div>
        </Link>

        <AddItemBtn id={id} type={type} isIncludes={userItems?.includes(String(id))} isDisabled={userItems === null} />
        </div>
    )
}

export default ItemCard