import React, { useState } from 'react'
import { LoginContext } from '../contexts/loginContext'
import { useContext } from 'react'
import { ImCross } from "react-icons/im";
import { NavLink } from 'react-router-dom';

function MobileNav({isOpen, setIsOpen}) {

    const isLoggedIn = useContext(LoginContext)

    const mobileNavLinkFactory = (path, text) => {
        return(
            <NavLink onClick={() => {setIsOpen(false)}} to={path} className={({ isActive }) => (isActive ? 'navActiveMobile' : '')}>{text}</NavLink>
        )
    }

    return (
        <div className={`${ isOpen === true ? 'navIn' : 'navOut' } z-[9999] p-10 absolute top-0 left-0 bg-bg border-accent border-4 h-[100vh] w-[100vw] rounded-lg md:hidden`}>
            <div onClick={() => {setIsOpen(false)}} className='absolute right-10 cursor-pointer p-2 mt-[-0.5rem]' >
                <ImCross />
            </div>

            <div className='flex flex-col gap-10 text-xl mt-10'>
                {isLoggedIn === false && mobileNavLinkFactory('/', "Home")}
                {isLoggedIn === true && mobileNavLinkFactory('/profile', "Profile")}
                {mobileNavLinkFactory('/explore', "Explore")}
                {mobileNavLinkFactory('/ai', "Ai Recommendation")}
            </div>
        </div>
    )
}

export default MobileNav
