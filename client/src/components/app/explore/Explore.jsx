import React from 'react'
import ItemList from './ItemList'
import { ITEM_TYPES } from '../../Utils'
import Search from './Search'
import SearchResultComponent from './SearchResultComponent'

function Explore() {

  return (
    <div className='mt-24 absolute px-3 sm:px-20 w-full'>

      <Search ResultComponent={SearchResultComponent} />
      
      <ItemList listType={ITEM_TYPES.MOVIE} listHeader={"Top Rated Movies"} listName={"top_rated"} />
      <ItemList listType={ITEM_TYPES.TV} listHeader={"Top Rated TV Shows"} listName={"top_rated"} />
      <ItemList listType={ITEM_TYPES.MOVIE} isSimilar={true}  />
      <ItemList listType={ITEM_TYPES.TV} listHeader={"Trending TV Shows"} listName={"popular"} />
      <ItemList listType={ITEM_TYPES.MOVIE} isSimilar={true}  />
      <ItemList listType={ITEM_TYPES.MOVIE} listHeader={"Movies on Cinema"} listName={"now_playing"} />
      <ItemList listType={ITEM_TYPES.TV} isSimilar={true} />
      <ItemList listType={ITEM_TYPES.MOVIE} listHeader={"Trending Movies"} listName={"popular"} />
      <ItemList listType={ITEM_TYPES.TV} isSimilar={true} />
      <ItemList listType={ITEM_TYPES.MOVIE} listHeader={"Upcoming Movies"} listName={"upcoming"} />
      <ItemList listType={ITEM_TYPES.MOVIE} isSimilar={true}  />
      <ItemList listType={ITEM_TYPES.TV} listHeader={"Shows on Air"} listName={"on_the_air"} />
      <ItemList listType={ITEM_TYPES.TV} isSimilar={true} />
    </div>
  )
}

export default Explore



