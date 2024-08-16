import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchUserData, getItemsTMDB } from '../../Utils'
import AddItemBtn from './AddItemBtn'
import { logError } from '../../Utils'
import { useContext } from 'react'
import { LoginContext } from '../../contexts/loginContext'

function ItemCard({data, type, isIdArr}) {
    const [arrData, setArrData] = useState({})
    const [userItems, setUserItems] = useState(null)

    const isLoggedIn = useContext(LoginContext)

    const onSuccess = (data) => {
        setArrData(data)
    }

    useEffect(() => {
        if(isLoggedIn === true){
            let ignore = false
            // isIdArr = true means it comes from profile page,and data is an array with bunch of ids in it
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
            <div className='border-2 w-32'>
                {/* <h3>{title ? title : name}</h3> */}
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path != undefined && poster_path != null && poster_path}`} alt={title ? title : name} height={100} />
            </div>
        </Link>

        {/* {isLoggedIn === false ? <h1>Log in to add</h1> : null} */}
        {isLoggedIn === true ? <AddItemBtn id={id} type={type} isIncludes={userItems?.includes(String(id))} isDisabled={userItems === null} /> : null}
        </div>
    )
}

export default ItemCard