import { useState, useEffect } from "react"

export const useSearch = (value) => {
    // const [value, setValue] = useState('')
    const [query, setQuery] = useState('')
    const [type, setType] = useState(ITEM_TYPES.MOVIE)
    
    const [data, setData] = useState()
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setQuery(value)
        }, 300);
        return () => clearTimeout(timeout)
    }, [value])
    
    const onSuccess = (data) => {
        return data.results
    }
    
    useEffect(() => {
        if(query != ''){
            console.log(`${type}: ${query}`)
            getItemsTMDB(`https://api.themoviedb.org/3/search/${type}?query=${query}&include_adult=false&language=en-US&page=1`)
            .then(onSuccess, logError)
        }else{
            setData(null)
        }
    }, [query, type])

}
