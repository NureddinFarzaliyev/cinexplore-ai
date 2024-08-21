import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { checkIncludes, getItemsTMDB, logError } from '../../Utils';
import AddItemBtn from './AddItemBtn';
import { LoginContext } from '../../contexts/loginContext';
import { Link } from 'react-router-dom';
import SimilarItems from './SimilarItems';
import { ITEM_TYPES } from '../../Utils';
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
    console.log(data)
  }

  useEffect(() => {
    let ignore = false
    if(!ignore) getItemsTMDB(`https://api.themoviedb.org/3/${type}/${id}`).then(onSuccess, logError)
    return () => {ignore = true}
  }, [id])


  // TODO: This can go too if new component is created
  // TV 
  const {episode_run_time, first_air_date, last_air_date, seasons, name} = data
  // MOVIES
  const {budget, production_countries, release_date, runtime, title} = data
  // BOTH
  const {backdrop_path, genres, overview, poster_path, status, vote_average,} = data


  return (

    // TODO: ITEMS WITH MAP FUNCTION CAN BE EXPORTED TO DIFFERENT COMPONENT

    <div className='pt-20 flex w-dvw h-dvh'>

      {isLoggedIn === true ? (
        <div className='relative bg-red-900'>
          <AddItemBtn id={id} type={type} isDisabled={isIncludes === null} isIncludes={isIncludes === true} />
        </div>
      ) : (
        <Link to={"/"}>
          <div className='border-emerald-800 border-4 bg-emerald-700'>
          {`Login or Register to add this ${type} to your profile and use custom and AI-Powered reccomendations.`}
          </div>
        </Link>
      )}

      
      <div className='absolute z-[-10]'>
        <img className='w-dvw h-dvh object-cover' src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt="backdrop" />
        <div className='bg-black opacity-80 h-dvh w-dvw absolute top-0'></div>
      </div>  

      

      <div className='rounded-lg overflow-hidden shadow-2xl w-fit h-fit ml-8 mt-8'>
        <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt="poster" />
      </div>

      <div className='mx-10 w-[60vw] mt-8 h-min flex flex-col items-between gap-4'>
        <ItemHeader data={data} />
        <ItemInfo data={data} type={type} />
      </div>

      
    </div>
  )
}

export default ItemPage
