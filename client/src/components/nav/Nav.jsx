import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link to={'/'}>Home</Link> <br />
        <Link to={'/profile'}>Profile</Link> <br />
        <Link to={'/explore'}>Explore</Link> <br />
        <Link to={'/ai'}>AI Recommendation</Link> <br /> <br /> <br />
    </div>
  )
}

export default Nav
