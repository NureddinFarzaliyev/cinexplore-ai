import React from 'react'

function Seasons({seasons}) {
    return (
        <div className='w-[60vw]'>
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
    )
}

export default Seasons
