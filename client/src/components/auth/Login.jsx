import React from 'react'
import { useState } from 'react'
import { sendLoginRequest } from './handleLogin'
import { handleLoginState } from './handleLogin'

function Login() {

  const [login, setLogin] = useState({
    username: '',
    password: ''
  })


  return (
    <div>      
      login
      <input type="text" name='username' onChange={(e) => {
        setLogin({...login, username: e.target.value})
      }} />
      <input type="text" name='password' onChange={(e) => {
        setLogin({...login, password: e.target.value})
      }}/>

      <button onClick={() => {
        sendLoginRequest(login.username, login.password).then(data => handleLoginState(data))
      }}>Login</button>

    </div>
  )
}

export default Login  