import React from 'react'
import { Link } from 'react-router-dom'

function ItemCard({data, type}) {
    const {title, name , id, vote_average, poster_path, backdrop_path} = data

    return (
        <Link to={`/explore/${type}/${id}`}>
            <div className='border-2 w-32'>
                <h3>{title ? title : name}</h3>
                {/* <p>({vote_average})</p> */}
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="poster" height={100} />
            </div>
        </Link>
    )
}

export default ItemCard