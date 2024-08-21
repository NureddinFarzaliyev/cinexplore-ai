import React from 'react'

function ItemHeader({data}) {

    const {first_air_date, last_air_date, name, production_countries, release_date, title, genres} = data

    return (
        <div className=''>
          <div className='flex gap-2 items-end'>
            <h1 className='text-3xl sm:text-6xl font-display'>{title ? title?.toUpperCase() : name?.toUpperCase()}</h1>
            <p className='mb-1 ml-1 text-xl sm:text-2xl'>{release_date?.slice(0, 4)}</p> 
            <p className='mb-1 text-xl sm:text-2xl'>{first_air_date && first_air_date?.slice(0, 4)}{last_air_date && '-'}{last_air_date && last_air_date?.slice(0, 4)}</p>
          </div>
          <div className='flex gap-2 flex-wrap'>{production_countries?.map((e, i) => <span key={i}>{e.name}</span>)}</div>
          <div className='flex gap-2 flex-wrap sm:mb-4'>{genres?.map((e, i) => <span key={i}> {e.name} </span>)}</div>
        </div>
    )
}

export default ItemHeader
