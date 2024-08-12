import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItemsTMDB } from '../Utils';

function ItemPage() {

  const {id, type} = useParams();
  const [data, setData] = useState({})

  const onSuccess = (data) => {
    setData(data)
    console.log(data)
  }

  const onFail = (error) => {
    console.log(error)
  }

  useEffect(() => {
    let ignore = false;
    if(!ignore) getItemsTMDB(`https://api.themoviedb.org/3/${type}/${id}`).then(onSuccess, onFail)
    return () => {ignore = true}
  }, [])

  return (
    <div>
      {data.title ? data.title : data.name}
    </div>
  )
}

export default ItemPage
