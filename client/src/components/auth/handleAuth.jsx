import { sendPostRequest } from "../Utils"

export const sendLoginRequest = ({username, password}) => {
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

export const sendRegisterRequest = ({username, password, avatar}) => {

    const body = {
        username: username,
        password: password,
        avatar: avatar
    }

    return new Promise(async (resolve, reject) => {
        const data = await sendPostRequest(`${import.meta.env.VITE_DB_API_BASE_URL}/auth/register`, body)

        if(data.success === true) resolve(data)
        else reject(data.error)
    })


}


export const uploadImage = async (image) => {
    const formdata = new FormData();
    formdata.append('file', image )
    formdata.append('upload_preset', import.meta.env.VITE_CLOUDINARY_PRESET)

    return new Promise( async (resolve, reject) => {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD}/image/upload`, {
            method: "POST",
            body: formdata
        })
        const data = await response.json()

        if(data.secure_url){
            console.log('Image uploaded')
            resolve(data.secure_url)
        }else{
            reject('err-filetype')
        }
    })
}

export const checkUserExists = async (username) => {
    const body = {
        username: username
    }

    return new Promise(async (resolve, reject) => {
        const data = await sendPostRequest(`${import.meta.env.VITE_DB_API_BASE_URL}/auth/register`, body)
        
        if(data.isExists) resolve(true)
        else resolve(false)
    })
}