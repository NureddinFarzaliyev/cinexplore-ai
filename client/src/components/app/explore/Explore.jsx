import React from 'react'
import ItemList from './ItemList'
import { ITEM_TYPES } from '../../Utils'
import Search from './Search'
import SearchResultComponent from './SearchResultComponent'

function Explore() {

  const exploreSliders = [
    {
      listType: ITEM_TYPES.MOVIE,
      listHeader: "Top Rated Movies",
      listName: "top_rated"
    },
    {
      listType: ITEM_TYPES.TV,
      listHeader: "Top Rated TV Shows",
      listName: "top_rated"
    },
    {
      listType: ITEM_TYPES.MOVIE,
      isSimilar: true
    },
    {
      listType: ITEM_TYPES.TV,
      listHeader: "Trending TV Shows",
      listName: "popular"
    },
    {
      listType: ITEM_TYPES.MOVIE,
      isSimilar: true
    },
    {
      listType: ITEM_TYPES.MOVIE,
      listHeader: "Movies on Cinema",
      listName: "now_playing"
    },
    {
      listType: ITEM_TYPES.TV,
      isSimilar: true
    },
    {
      listType: ITEM_TYPES.MOVIE,
      listHeader: "Trending Movies",
      listName: "popular"
    },
    {
      listType: ITEM_TYPES.TV,
      isSimilar: true
    },
    {
      listType: ITEM_TYPES.MOVIE,
      listHeader: "Upcoming Movies",
      listName: "upcoming"
    },
    {
      listType: ITEM_TYPES.MOVIE,
      isSimilar: true
    },
    {
      listType: ITEM_TYPES.TV,
      listHeader: "Shows on Air",
      listName: "on_the_air"
    },
    {
      listType: ITEM_TYPES.TV,
      isSimilar: true
    }
  ];

  return (
    <div className='mt-24 absolute px-3 sm:px-20 w-full'>

      <Search ResultComponent={SearchResultComponent} />

      {exploreSliders.map((e, i) => {
        return <ItemList listHeader={e.listHeader} listType={e.listType} listName={e.listName} isSimilar={e.isSimilar}  />
      })}
      
    </div>
  )
}

export default Explore



