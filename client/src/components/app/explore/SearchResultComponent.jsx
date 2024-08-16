import React from 'react'
import { Link } from 'react-router-dom'

function SearchResultComponent({ type, data}) {


    // TODO: ADD ITEMS TO PROFILE FROM SEARCH


    return (
        <Link to={`/explore/${type}/${data.id}`}>
           <p>{data.name ? data.name : data.title}</p>
        </Link>
    )
}

export default SearchResultComponent
