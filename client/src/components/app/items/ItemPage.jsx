import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { checkIncludes, getItemsTMDB, logError } from '../../Utils';
import AddItemBtn from './AddItemBtn';
import { LoginContext } from '../../contexts/loginContext';
import { Link } from 'react-router-dom';
import SimilarItems from './SimilarItems';

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

  // TODO: This can go too if new component is created
  // TV 
  const {episode_run_time, first_air_date, last_air_date, seasons, name} = data
  // MOVIES
  const {budget, production_countries, release_date, runtime, title} = data
  // BOTH
  const {backdrop_path, genres, overview, poster_path, status, vote_average,} = data


  return (

    // TODO: ITEMS WITH MAP FUNCTION CAN BE EXPORTED TO DIFFERENT COMPONENT

    <div className='flex flex-col gap-5'>

      {isLoggedIn === true ? (
        <div>
        <AddItemBtn id={id} type={type} isDisabled={isIncludes === null} isIncludes={isIncludes === true} />
      </div>
      ) : (
        <Link to={"/"}>
          <div className='border-emerald-800 border-4 bg-emerald-700'>
          {`Login or Register to add this ${type} to your profile and use custom and AI-Powered reccomendations.`}
          </div>
        </Link>
      )}
      
      {/* <img src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt="backdrop" /> */}

      <h1>{title ? title : name}</h1>

      <p>{vote_average}</p>
      <p>{status}</p> 
      <p>{release_date} </p> 
      <p>{first_air_date && first_air_date.slice(0, 4)} {last_air_date && '-'} {last_air_date && last_air_date.slice(0, 4)}</p>

      <p>{budget}</p>
      <div>{production_countries?.map((e, i) => <span key={i}>{e.name}</span>)}</div>

      <p>{episode_run_time}</p>
      <p>{runtime}</p>

      <p>{overview}</p>
      
      <div>
        {genres?.map((e, i) => <div key={i}> {e.name} </div>)}
      </div>

      <div>
        {seasons?.map((e, i) => { // TODO: EXPANDABLE SEASON CARDS FOR EPISODES
          return(
          <div key={i} className='border-2 m-10'>
            <h2>{e.name}</h2>
            <p>{e.air_date}</p>
            <p>{e.id}</p>
            <p>{e.overview}</p>
            <p>{e.vote_average}</p>
            <img src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`} alt="" />
            <b>EXPANDABLE SEASON CARDS FOR EPISODES</b>
          </div>
          )
        })}
      </div>

      <SimilarItems id={data.id} type={type} />


      {/* <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="poster" /> */}

      
    </div>
  )
}

export default ItemPage
