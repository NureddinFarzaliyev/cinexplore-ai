import React from 'react'

function RecommendationButton({btnState, clickHandler}) {
    return (
        <button disabled={btnState === 'loading'} onClick={() => clickHandler()} className='p-3 border-2 m-5 hover:bg-red-900'>
            {btnState === 'loading' ? 'Loading...' : 'Get Recommendations'}
        </button>
    )
}

export default RecommendationButton
