import React from 'react'
import bgImage from '../../assets/oppenheimer_poster.jpg'
import Login from '../auth/Login'
import Register from '../auth/Register'

function Authentication() {
    return (
        <section className='h-dvh authSection relative overflow-hidden sm:p-10'>

            <div className='absolute right-0 authBg h-full w-full sm:w-[75%]'></div>
            <div className='overlayRightGradient absolute right-0 h-full w-[75%] hidden sm:block'></div>
            <div className='absolute left-0 h-full w-[100%] bg-[rgba(0,0,0,.7)] block sm:hidden'></div>

            <div className='flex flex-col justify-center h-full z-50 absolute w-full items-center sm:items-start'>

                <div className='absolute top-20'>
                    <p className='text-2xl mt-10 sm:mt-0 font-bold text-center sm:text-left'>Create a New Account to Get Started</p>
                    <p className='text-gray-300 text-sm sm:text-lg text-center sm:text-left' >or Login if you already have an account</p>

                </div>

                <div>
                    {/* <Login /> */}
                    <Register />
                </div>
            </div>


        </section>
    )
}

export default Authentication
