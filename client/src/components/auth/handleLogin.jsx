import { sendPostRequest } from "../Utils"

export const sendLoginRequest = (username, password) => {
    const body = {
        username: username,
        password: password
    }

    return new Promise(async (resolve, reject) => {
        const data = await sendPostRequest(`${import.meta.env.VITE_DB_API_BASE_URL}/auth/login`, body)
        if(data.isAuth === true){
            resolve(data)
        }else{
            reject(data.error)
        }
    })
}
