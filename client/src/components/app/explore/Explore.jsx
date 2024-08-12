import React from 'react'
import ItemList from './ItemList'

function Explore() {
  return (
    <div>
      <h1>EXPLORE</h1>
      
      <h1>MOVIES</h1>
      <ItemList listType={"movie"} listHeader={"Top Rated Movies"} listName={"top_rated"} />
      {/* <ItemList listType={"movie"} listHeader={"On Theaters"} listName={"now_playing"} /> */}
      {/* <ItemList listType={"movie"} listHeader={"Trending Now"} listName={"popular"} /> */}
      {/* <ItemList listType={"movie"} listHeader={"Upcoming"} listName={"upcoming"} /> */}

      <h1>TV SHOWS</h1>
      <ItemList listType={"tv"} listHeader={"Top Rated TV Shows"} listName={"top_rated"} />
      {/* <ItemList listType={"tv"} listHeader={"Trending TV Shows"} listName={"popular"} /> */}
      {/* <ItemList listType={"tv"} listHeader={"On The Air"} listName={"on_the_air"} /> */}

    </div>
  )
}

export default Explore
