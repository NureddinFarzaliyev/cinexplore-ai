import React, { useEffect, useState } from 'react'
import { fetchUserData } from '../../Utils'
import ItemSlider from '../items/ItemSlider'
import { ITEM_TYPES } from '../../Utils'
import { logError } from '../../Utils'
import '../explore/explore.css'
import { IoIosLogOut } from "react-icons/io";

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


    <div className='pt-20'>
      <div className='accentGradient mb-5 px-3 py-5 sm:px-12 flex gap-5 sm:gap-12 items-center flex-wrap'>

        <div className='h-24 w-24 sm:h-52 sm:w-52 rounded-full shadow-xl overflow-hidden'><img src={avatar} alt="avatar" className='h-24 sm:h-52 object-cover' /></div>

        <div className='flex gap-3 items-end'>
          <p className='text-2xl sm:text-5xl font-bold'>{username}</p>
          <button className='text-2xl sm:text-3xl mb-1 sm:opacity-50 hover:opacity-100' onClick={() => {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            location.reload()
          }}><IoIosLogOut/></button>
        
        </div>

      </div>



      <div className='mb-10 flex flex-col gap-5 px-2 sm:px-10'>

        <div>
          <h1 className='text-xl font-semibold'>Movies</h1>
          <div className='mt-3'>{movie?.length != 0 ? <ItemSlider type={ITEM_TYPES.MOVIE} data={movie} isIdArr={true} /> : "You've never added any movie :("}</div>
        </div>

        <div>
          <h1 className='text-xl font-semibold'>Series</h1>
          <div className='mt-3'>{tv?.length != 0 ? <ItemSlider type={ITEM_TYPES.TV} data={tv} isIdArr={true}  /> : "You've no series in your profile :("}</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
