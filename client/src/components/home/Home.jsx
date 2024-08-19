import React from 'react'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Intro from './Intro'
import Features from './Features'
import Authentication from './Authentication'
import './home.css'

function Home() {

 
  return (
    <>
      <Intro />
      <Features />
      <Authentication />
    </>
    
    // <div>
    //   <Login />
    //   <Register />
    // </div>
  )
}

export default Home
