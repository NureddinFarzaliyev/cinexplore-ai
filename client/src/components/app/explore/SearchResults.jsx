import React from 'react'

function SearchResults({data, type, ResultComponent}) {

    if(data){
            return (
                <div className='bg-gray-300 z-50 shadow-xl text-black p-4 rounded-lg mt-1 absolute h-96 sm:w-[30rem] mr-3 sm:mr-0 overflow-scroll flex flex-col gap-3'>
                    {data.length != 0 ? data?.map((e, i) => <ResultComponent data={e} key={i} type={type} />) : 'No results found.'}
                </div>
            )
    }
    else{
        return null
    }

}

export default SearchResults
