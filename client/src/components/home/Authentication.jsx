import React, { useState } from 'react'
import Login from '../auth/Login'
import Register from '../auth/Register'
import './home.css'

function Authentication() {

    const [switchState, setSwitchState] = useState(0)

    return (
        <section className='h-dvh authSection relative overflow-hidden sm:p-10'>

            <div className='absolute right-0 authBg h-full w-full sm:w-[75%]'></div>
            <div className='overlayRightGradient absolute right-0 h-full w-[75%] hidden sm:block'></div>
            <div className='absolute left-0 h-full w-[100%] bg-[rgba(0,0,0,.7)] block sm:hidden'></div>

            <div className='flex flex-col justify-center sm:justify-start items-center sm:items-baseline gap-10 sm:grid grid-rows-12 h-full z-50 absolute w-full'>

                <div className='absolute top-20'>
                    <p className='text-2xl mt-10 sm:mt-0 font-bold text-center sm:text-left'>Create a New Account to Get Started</p>
                    <p className='text-gray-300 text-sm sm:text-lg text-center sm:text-left' >or Login if you already have an account</p>
                </div>

                <div className='h-10 w-80 mt-32 sm:mt-0 row-start-4 rounded-xl bg-white relative flex items-center font-semibold'>
                    <div className={`bg-accent h-10 w-40 rounded-xl shadow-2xl absolute ${switchState === 0 ? 'switchLeft' : 'switchRight'}`}></div>
                    <button className={`z-50 w-40 ${switchState == 0 ? "text-white" : "text-gray-700"}`} onClick={() => {setSwitchState(0)}}>Login</button>
                    <button className={`z-50 w-40 ${switchState == 1 ? "text-white" : "text-gray-700"}`} onClick={() => {setSwitchState(1)}}>Register</button>
                </div>

                <div className='row-start-5'>
                    {switchState === 0 ? <Login /> : <Register />}
                </div>
            </div>


        </section>
    )
}

export default Authentication
