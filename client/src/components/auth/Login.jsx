import React from 'react'
import { useState } from 'react'
import { sendLoginRequest } from './handleLogin'
// import { handleLoginState } from './handleLogin'


function Login() {

  const [login, setLogin] = useState({
    username: '',
    password: '',
    status: ''
  })

  const onLoginSuccess = (data) => {
    localStorage.setItem('id', data.id)
    localStorage.setItem('token', data.token)
    location.reload()
  }
  
  const onLoginFail = (data) => {
    setLogin({...login, status: data})
  }


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
        sendLoginRequest(login.username, login.password).then(onLoginSuccess, onLoginFail)
      }}>{`login`}</button>

      <p>{login.status != 'loading' ? login.status : '' }</p>


    </div>
  )
}

export default Login  