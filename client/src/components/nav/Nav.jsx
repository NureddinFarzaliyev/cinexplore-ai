import React, { useState } from 'react'
import './nav.css'
import { RxHamburgerMenu } from "react-icons/rx";
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

function Nav() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='h-20 flex justify-center md:justify-between items-center px-2 sm:px-7 fixed w-full z-50 bg-darkBg shadow-xl'>

      <div onClick={() => {setIsOpen(p => !p)}} className='text-2xl sm:text-3xl absolute cursor-pointer block md:hidden left-5'>
        <RxHamburgerMenu />
      </div>

      <Link to='/'>
        <h1 className='font-display text-3xl sm:text-5xl md:w-min'>
          CINEXPLORE
        </h1>
      </Link>

      <DesktopNav/>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      
    </div>
  )
}

export default Nav
