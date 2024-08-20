import React from 'react'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Intro from './Intro'
import Features from './Features'
import Authentication from './Authentication'
import './home.css'

function Home() {

  // TODO: FullPage.js 
 
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
