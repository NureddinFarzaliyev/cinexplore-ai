import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../contexts/loginContext'

function Nav() {
  const isLoggedIn = useContext(LoginContext)

  return (
    <div className='border-red-900 border-2 mb-5 flex gap-3 p-1 px-3'>
      <Link to={'/'}>Home</Link>
      {isLoggedIn && <Link to={'/profile'}>Profile</Link>}
      <Link to={'/explore'}>Explore</Link>
      <Link to={'/ai'}>AI Recommendation</Link>
    </div>
  )
}

export default Nav
