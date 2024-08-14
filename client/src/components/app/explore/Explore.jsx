import React from 'react'
import ItemList from './ItemList'
import { ITEM_TYPES } from '../../Utils'

function Explore() {
  return (
    <div>
      <h1>EXPLORE</h1>
      
      <h1>MOVIES</h1>
      <ItemList listType={ITEM_TYPES.MOVIE_API} listHeader={"Top Rated Movies"} listName={"top_rated"} />
      <ItemList listType={ITEM_TYPES.MOVIE_API} listHeader={"On Theaters"} listName={"now_playing"} />
      <ItemList listType={ITEM_TYPES.MOVIE_API} listHeader={"Trending Now"} listName={"popular"} />
      <ItemList listType={ITEM_TYPES.MOVIE_API} listHeader={"Upcoming"} listName={"upcoming"} />

      <h1>TV SHOWS</h1>
      <ItemList listType={ITEM_TYPES.TV} listHeader={"Top Rated TV Shows"} listName={"top_rated"} />
      <ItemList listType={ITEM_TYPES.TV} listHeader={"Trending TV Shows"} listName={"popular"} />
      <ItemList listType={ITEM_TYPES.TV} listHeader={"On The Air"} listName={"on_the_air"} />

    </div>
  )
}

export default Explore
