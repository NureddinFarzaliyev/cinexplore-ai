import React from 'react'
import { useState } from 'react'
import { sendLoginRequest } from './handleAuth'
import { getStatusText } from '../Utils'

function Login() {

  const [login, setLogin] = useState({
    username: '',
    password: '',
    status: ''
  })

  const onLoginSuccess = (data) => {
    setLogin({...login, status: ''})
    localStorage.setItem('id', data.id)
    localStorage.setItem('token', data.token)
    location.reload()
  }
  
  const onLoginFail = (data) => {
    setLogin({...login, status: data})
  }

  const loginHandler = (e) => {
    e.preventDefault()
    setLogin({...login, status: 'loading'})
    sendLoginRequest(login).then(onLoginSuccess, onLoginFail)
  }


  return (
    <div className=''>      
      <form className='flex flex-col gap-7'>

        <label className='flex flex-col'>
          Username:
          <input className='w-80 rounded-md p-1 px-2' type="text" name='username' onChange={(e) => {
            setLogin({...login, username: e.target.value})
          }} /> 
        </label>

        <label className='flex flex-col'>
          Password:
          <input className='w-80 rounded-md p-1 px-2' type="text" name='password' onChange={(e) => {
            setLogin({...login, password: e.target.value})
          }}/>
        </label>



        <button className='w-80 rounded-md py-2 cursor-pointer transition-colors shadow-xl hover:bg-accentHover bg-accent' disabled={ login.username == '' || login.password == '' || login.status == 'loading' ? true : false } 
          onClick={(e) => {loginHandler(e)}}>{login.status == 'loading' ? 'Loading...' : 'Login'}</button>


      </form>

      <p>{getStatusText(login.status)}</p>

    </div>
  )
}

export default Login  