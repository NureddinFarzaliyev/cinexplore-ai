

// ! ================== API REQUESTS ==================

// Database Requests 

export const sendPostRequest = async (url, body) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    const data = await response.json()
    return await data
}

export const handleAuth = (id, token) => {
    const body = {
        id: id,
        token: token
    }

    return new Promise(async (resolve, reject) => {
        const data = await(sendPostRequest(`${import.meta.env.VITE_DB_API_BASE_URL}/auth`, body))
        
        if(data){
            resolve(data.isAuth === true ? true : false )
        }else{
            reject(data)
        }

    })
}

export const fetchUserData = (id, type) => {
    return new Promise(async (resolve, reject) => {
        try{

            let data
            if(type != undefined){
                data = await fetch(`${import.meta.env.VITE_DB_API_BASE_URL}/user/${id}/${type}`)
            }else{
                data = await fetch(`${import.meta.env.VITE_DB_API_BASE_URL}/user/${id}`)
            }
            resolve(data.json())
        }catch(err){
            reject({error: err})
        }
    })
}

// TMDB Requests

export const getItemsTMDB = (url) => {
    return new Promise(async (resolve, reject) => {
        try{
            const response = await fetch(url, {method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS}`
            }})

            resolve(response.json())
        }catch(err){
            reject(err)
        }
    }) 
}


// ! ================== GENERAL FUNCTIONS ==================

export const getStatusText = (status) => {
    switch (status) {
        case 'err-pass':
            return "Password is incorrect."
        case 'err-same':
            return 'This user already exists.'
        case 'err-name':
            return 'There is no user with this username.'
        case 'err-filetype':
            return 'File Type is not supported.'
        case 'err':
            return 'Error Occured.'
        case 'loading':
            return ''
        case 'reg-success':
            return 'Registered Successfully. Please Login.'
        case 'empty':
            return ''
        case '':
            return ''
        default:
            return `Unexpected Error: ${status}`
    }
}

export const ITEM_TYPES = {
    MOVIE: 'movie',
    TV: 'tv',
    ALL: 'all',
    SIMILAR: 'similar'
}

export const AI_DISPATCH_ACTION = {
    ADD: 'add',
    REMOVE: 'remove'
}


export const protectedRoute = (isLoggedIn, Route, Home) => {
    return  isLoggedIn ? <Route /> : <Home />
}

export const logError = (err) => {
    console.error(err)
}

export const checkIncludes = async (id, type) => {
    return new Promise(async (resolve, reject) => {
        try{
            const data = await fetchUserData(localStorage.getItem('id'), type)
            const isIncludes = await data?.includes(String(id))
            resolve(isIncludes)
        }catch(err){
            reject(err)
        }
    })
}
  