import React from 'react'
import { Link } from 'react-router-dom'

function SearchResultComponent({ type, data}) {

    const {id, poster_path, name, title, release_date, first_air_date} = data

    return (
        <Link to={`/explore/${type}/${id}`}>
            <div className='flex gap-5 hover:bg-gray-300 transition-colors p-1 rounded-lg'>
                <img src={`${poster_path != null ? 
                    (`https://image.tmdb.org/t/p/w200/${poster_path}`) : 
                    (`https://placehold.co/124x186`)}`} 
                    alt={title ? title : name} 
                    className='rounded-lg shadow-xl w-12 object-cover' />

                <div>
                    <h1 className='text-xl mt-1 font-semibold'>{data.name ? data.name : data.title}</h1>
                    <p className='text-md text-gray-700'>{release_date ? release_date.slice(0, 4) : first_air_date?.slice(0, 4)}</p>
                </div>
            </div>
        </Link>
    )
}

export default SearchResultComponent
