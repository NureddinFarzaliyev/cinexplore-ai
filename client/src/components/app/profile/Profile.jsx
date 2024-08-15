import React, { useEffect, useState } from 'react'
import { fetchUserData } from '../../Utils'
import ItemSlider from '../items/ItemSlider'
import { ITEM_TYPES } from '../../Utils'
import { logError } from '../../Utils'

function Profile() {

  const [data, setData] = useState(null)

  const onSuccess = (data) => {
    setData(data)
    // console.log(data)
  }

  useEffect(() => {
    fetchUserData(localStorage.getItem('id')).then(onSuccess, logError)
  }, [])
  
  const {username, avatar, tv, movie} = data ? data : {}

  return (


    <div>
      PROFILE
      <div className='border-2'>
        <p className='text-3xl'>{username}</p>
        <img src={avatar} alt="avatar" className='h-64' />
      </div>

      <h1>Movies</h1>
      {movie?.length != 0 ? <ItemSlider type={ITEM_TYPES.MOVIE} data={movie} isIdArr={true} /> : "You've never added any movie :("}

      <h1>Series</h1>
      {tv?.length != 0 ? <ItemSlider type={ITEM_TYPES.TV} data={tv} isIdArr={true}  /> : "You've no series in your profile :("}
    </div>
  )
}

export default Profile
