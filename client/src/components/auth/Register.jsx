import React, { useState } from 'react'
import { sendRegisterRequest, uploadImage, checkUserExists } from './handleAuth'
import { getStatusText } from '../Utils'

function Register() {

  const [register, setRegister] = useState({
    username: '',
    password: '',
    status: ''
  })

  const [avatarImg, setAvatarImg] = useState(null)

  const onSuccess = () => {
    setRegister({...register, status: 'reg-success'})
  }

  const onFail = (error) => {
    // console.error(error)
    setRegister({...register, status: error})
  }

  const registerHandler = async (e) => {

    try{
      e.preventDefault()
      setRegister({...register, status: 'loading'})
  
      let avatarUrl = 'https://avatar.iran.liara.run/public'

      const isExists = await checkUserExists(register.username)

      if(!isExists){

        if(avatarImg != null){
          const data = await uploadImage(avatarImg)
          avatarUrl = data
        }
    
        const response = await sendRegisterRequest({ ...register, avatar: avatarUrl })
        onSuccess(response)

      }else{
        onFail('err-same')
      }
  

    }catch(error){
      onFail(error)
    }
  }

  return (

    <div>
      REGISTER
      <form>
        <input type="text" name='username' placeholder='Username' onChange={(e) => {
          setRegister({...register, username: e.target.value})
        }} />

        <input type="text" name='password' placeholder='Password' onChange={(e) => {
          setRegister({...register, password: e.target.value})
        }} />

        <input type="file" accept="image/gif, image/jpeg, image/png" name='avatar' onChange={(e) => {
          setAvatarImg(e.target.files[0])
        }} />

        <button disabled={ register.username == '' || register.password == '' || register.status == 'loading' ? true : false } 
        onClick={(e) => {registerHandler(e)}}>{register.status === 'loading' ? 'Loading...' : 'Register'}</button>

      </form>

      <p>{getStatusText(register.status)}</p>

      <img src={avatarImg === null ? register.avatar : URL.createObjectURL(avatarImg)} height={200}/>

    </div>
  )
}

export default Register
