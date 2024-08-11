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
    <div>      
      LOGIN
      <form>
        <input type="text" name='username' placeholder='Username' onChange={(e) => {
          setLogin({...login, username: e.target.value})
        }} /> 

        <input type="text" name='password' placeholder='Password' onChange={(e) => {
          setLogin({...login, password: e.target.value})
        }}/>

        <button disabled={ login.username == '' || login.password == '' || login.status == 'loading' ? true : false } 
        onClick={(e) => {loginHandler(e)}}>{login.status == 'loading' ? 'Loading...' : 'Login'}</button>
      </form>

      <p>{getStatusText(login.status)}</p>

    </div>
  )
}

export default Login  