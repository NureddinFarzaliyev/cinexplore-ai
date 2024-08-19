import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../contexts/loginContext'
import { NavLink } from 'react-router-dom'

function DesktopNav() {
    const isLoggedIn = useContext(LoginContext)
    
    const navFactory = (to, text) => {
        return(
            <NavLink to={to} className={({ isActive }) => (isActive ? 'navActive' : '')}>{text}</NavLink>
        )
    }

    return (
        <div className='gap-7 text-xl hidden md:flex'>
            {isLoggedIn === false && navFactory('/', "Home")}
            {isLoggedIn === true && navFactory('/profile', "Profile")}
            {navFactory('/explore', "Explore")}
            {navFactory('/ai', "AI Recommendation")}
        </div>
    )
}

export default DesktopNav
