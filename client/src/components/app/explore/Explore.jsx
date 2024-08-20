import React from 'react'
import ItemList from './ItemList'
import { ITEM_TYPES } from '../../Utils'
import Search from './Search'
import SearchResultComponent from './SearchResultComponent'

function Explore() {

  return (
    <div className='mt-24 absolute px-3 sm:px-20'>

      <Search ResultComponent={SearchResultComponent} />
      
      <ItemList listType={ITEM_TYPES.MOVIE} listHeader={"Top Rated Movies"} listName={"top_rated"} />
      <ItemList listType={ITEM_TYPES.MOVIE} isSimilar={true}  />
      {/* <ItemList listType={ITEM_TYPES.MOVIE} listHeader={"On Theaters"} listName={"now_playing"} /> */}
      {/* <ItemList listType={ITEM_TYPES.MOVIE} listHeader={"Trending Now"} listName={"popular"} /> */}
      {/* <ItemList listType={ITEM_TYPES.MOVIE} listHeader={"Upcoming"} listName={"upcoming"} /> */}

      <ItemList listType={ITEM_TYPES.TV} listHeader={"Top Rated TV Shows"} listName={"top_rated"} />
      <ItemList listType={ITEM_TYPES.TV} isSimilar={true} />
      {/* <ItemList listType={ITEM_TYPES.TV} listHeader={"Trending TV Shows"} listName={"popular"} /> */}
      {/* <ItemList listType={ITEM_TYPES.TV} listHeader={"On The Air"} listName={"on_the_air"} /> */}

    </div>
  )
}

export default Explore



