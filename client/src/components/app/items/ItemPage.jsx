import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { checkIncludes, getItemsTMDB, logError } from '../../Utils';
import AddItemBtn from './AddItemBtn';
import { LoginContext } from '../../contexts/loginContext';
import ItemHeader from './ItemHeader';
import ItemInfo from './ItemInfo';

function ItemPage() {
  const {id, type} = useParams();
  const [data, setData] = useState({})
  const [isIncludes, setIsIncludes] = useState(null)
  
  const isLoggedIn = useContext(LoginContext)
  
  const onSuccess = (data) => {
    setData(data)
    if(isLoggedIn === true){
      checkIncludes(id, type).then(data => setIsIncludes(data), logError)
    }
  }

  useEffect(() => {
    let ignore = false
    if(!ignore) getItemsTMDB(`https://api.themoviedb.org/3/${type}/${id}`).then(onSuccess, logError)
    return () => {ignore = true}
  }, [id])

  const {backdrop_path,  poster_path} = data

  return (
    <div className='mt-20 sm:flex w-dvw sm:h-dvh absolute overflow-x-hidden'>

        
      
      <div className='fixed z-[-10] '>
        <img className='w-dvw h-dvh object-cover' src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt="backdrop" />
        <div className='bg-black opacity-80 h-dvh w-dvw absolute top-0'></div>
      </div>  


      <div className='flex sm:block item-center justify-center w-full relative'>
        <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt="poster" className='w-44 sm:w-fit rounded-lg shadow-2xl mt-5 ml-5 sm:ml-7' />
      </div>

      <div className='mx-3 sm:mx-10 sm:w-[60vw] mt-8 h-min flex flex-col items-between gap-4'>
        <ItemHeader data={data} />
        <ItemInfo data={data} type={type} />
      </div>

      {isLoggedIn === true ? (
          <div className='absolute top-72 sm:top-10 sm:right-10 md:right-20 w-10 h-10'>
            <AddItemBtn id={id} type={type} isDisabled={isIncludes === null} isIncludes={isIncludes === true} />
          </div>
        ) : null}
    </div>
  )
}

export default ItemPage
