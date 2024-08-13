import React, { useEffect, useState } from 'react'
import { fetchUserData } from '../../Utils'
import ItemSlider from '../explore/ItemSlider'

function Profile() {

  const [data, setData] = useState(null)

  const onSuccess = (data) => {
    setData(data)
    console.log(data)
  }

  const onFail = (error) => {
    console.error(error)
  }

  useEffect(() => {
    let ignore = false
    if(!ignore) fetchUserData(localStorage.getItem('id')).then(onSuccess, onFail)
    return () => {ignore = true}
  }, [])
  
  const {username, avatar, tv, movies} = data ? data : {}

  return (


    <div>
      PROFILE
      <div className='border-2'>
        <p className='text-3xl'>{username}</p>
        <img src={avatar} alt="avatar" className='h-64' />
      </div>

      <h1>Movies</h1>
      {movies?.length != 0 ? <ItemSlider type={"movie"} data={movies} isIdArr={true} /> : "You've never added any movie :("}

      <h1>Series</h1>
      {tv?.length != 0 ? <ItemSlider type={"tv"} data={tv} isIdArr={true}  /> : "You've no series in your profile :("}
    </div>
  )
}

export default Profile
