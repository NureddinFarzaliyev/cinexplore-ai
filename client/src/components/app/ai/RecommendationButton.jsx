import React from 'react'

function RecommendationButton({btnState, clickHandler}) {
    return (
        <button disabled={btnState === 'loading'} onClick={() => clickHandler()} className='h-12 w-[80%] ml-[10%] my-7 rounded-md font-bold bg-accent hover:bg-accentHover transition-colors shadow-lg'>
            {btnState === 'loading' ? 'Loading...' : 'Get Recommendations'}
        </button>
    )
}

export default RecommendationButton
