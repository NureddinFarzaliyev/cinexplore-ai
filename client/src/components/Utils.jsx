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