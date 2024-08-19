import React from 'react'

function Intro() {
    return (
        <section className='h-dvh overflow-hidden introSection items-center justify-between pt-32 flex flex-col'>

            <div className='overlayGradient h-dvh w-full absolute bottom-0 z-10'></div>

            <h1 className='font-display text-6xl text-center md:text-9xl md:w-min drop-shadow-xl z-20'>
                CINEXPLORE
            </h1>
            
            <div className='flex items-center flex-col gap-14 pb-20 z-20'>
                <p className='w-64 sm:w-96 text-center text-xl font-semibold'>Explore endless world of Cinema and TV using unimaginable power of Artificial Intelligence.</p>
                <div className='flex flex-col sm:flex-row gap-3'>
                    <button className='bg-accent px-12 py-3 rounded-md shadow-xl font-bold text-xl hover:bg-accentHover hover:scale-[1.05] transition-all'>Get Started</button>
                    <button className='bg-bg px-12 py-3 rounded-md shadow-xl font-bold text-xl hover:bg-accentHover hover:scale-[1.05] transition-all'>Learn More</button>
                </div>
            </div>

        </section>
    )
}

export default Intro
