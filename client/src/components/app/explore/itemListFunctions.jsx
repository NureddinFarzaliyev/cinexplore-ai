import { fetchUserData } from "../../Utils"
import { getItemsTMDB } from "../../Utils"
import { logError } from "../../Utils"

export const createFetchItemsUrl = async (isSimilar, type, name) => {
  try{  
      if(isSimilar === true){
          // Returns URL for similar movies

          let data
          
          if(localStorage.getItem('id')){
            data = await fetchUserData(localStorage.getItem('id'), type)
          }else{
            return false
          }
          
          if(data.length !== 0){
            const similarId = Math.floor(Math.random() * data.length)
            return {
                url: `https://api.themoviedb.org/3/${type}/${data[similarId]}/similar`,
                similarUrl: `https://api.themoviedb.org/3/${type}/${data[similarId]}`
            }
          }else{
            return false
          }

          
      }else{
          // Returns URL for regular list movies
          return {
              url : `https://api.themoviedb.org/3/${type}/${name}?language=en-US&page=1`
          }
      }
  }catch(err){
      throw new Error(err)
  }
}

export const fetchDataForItemList = async (isSimilar, listType, listName, setSimilarName, setData) => {
    try{
      const data = await createFetchItemsUrl(isSimilar, listType, listName)
      const url = await data.url
  
      if(data === false){
        setSimilarName(`Log in and start adding items to your profile & see custom reccomendations.`)
      }else{
        getItemsTMDB(url)
        .then(data => setData(data.results), logError)

        if(data.similarUrl != undefined){
          getItemsTMDB(data.similarUrl)
          .then(data => setSimilarName(`Because you've liked "${data.title ? data.title : data.name}"`), logError)
        }
      }
    }catch(err){
      console.error(err)
    }
  }