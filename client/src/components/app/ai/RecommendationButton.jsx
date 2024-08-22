import React from 'react'

function RecommendationButton({btnState, clickHandler}) {
    return (
        <button disabled={btnState === 'loading'} onClick={() => clickHandler()} className='h-12 sm:w-[80%] px-1 sm:px-0 my-7 rounded-md text-sm sm:text-lg font-bold bg-accent hover:bg-accentHover transition-colors shadow-lg'>
            {btnState === 'loading' ? 'Loading...' : 'Get Recommendations'}
        </button>
    )
}

export default RecommendationButton