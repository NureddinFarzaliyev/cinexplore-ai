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

export const protectedRoute = (isLoggedIn, Route, Home) => {
    return  isLoggedIn ? <Route /> : <Home />
}