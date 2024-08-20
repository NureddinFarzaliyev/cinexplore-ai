import React, { useState } from 'react'
import { sendRegisterRequest, uploadImage, checkUserExists } from './handleAuth'
import { getStatusText } from '../Utils'
import { MdFileUpload } from "react-icons/md";

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
    console.error(error)
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
      <form className='flex flex-col gap-7'>
        <label className='flex flex-col'>
          Username:
          <input className='w-80 rounded-md p-1 px-2' type="text" name='username' value={register.username} onChange={(e) => {
            setRegister({...register, username: e.target.value.replace(' ', '')})
          }} />
        </label>

        <label className='flex flex-col'>
          Password:
          <input className='w-80 rounded-md p-1 px-2' type="password" name='password' onChange={(e) => {
            setRegister({...register, password: e.target.value})
          }} />
        </label>

        <label className='flex gap-5 items-center cursor-pointer'>

          <div className='rounded-full overflow-hidden'>
            {avatarImg === null ? (
              <div className='h-20 w-20 shadow-xl bg-white text-black text-opacity-50 text-3xl flex items-center justify-center' >
                <MdFileUpload />
              </div>
            ) : (
              <img className='h-20 w-20 object-cover shadow-xl' src={URL.createObjectURL(avatarImg)} />
            )}
          </div>

          <p>{avatarImg ? avatarImg.name : 'Upload an avatar.'}</p>

          <input className='hidden' type="file" accept="image/gif, image/jpeg, image/png" name='avatar' onChange={(e) => {
            setAvatarImg(e.target.files[0])
          }} />

        </label>


        <button className='w-80 rounded-md py-2 cursor-pointer transition-colors shadow-xl hover:bg-accentHover bg-accent'
        disabled={ register.username == '' || register.password == '' || register.status == 'loading' ? true : false } 
        onClick={(e) => {registerHandler(e)}}>{register.status === 'loading' ? 'Loading...' : 'Register'}</button>

        <p className='text-center'>{getStatusText(register.status)}</p>
      </form>



    </div>
  )
}

export default Register
