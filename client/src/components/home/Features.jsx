import React from 'react'
import TextDisclosure from './TextDisclosure'

function Features() {
    return (
        <section className='h-dvh pt-28 p-10 sm:overflow-hidden'>
            
            <h1 className='font-bold text-2xl'>Features & Technical Details</h1>
            
            <div className='sm:grid grid-cols-2 grid-rows-2 gap-10 mt-14 px-8 md:px-24'>
                <TextDisclosure title={"User Profile and Custom Recommendations"} text={"You can use AI Recommendations and explore section with limitations without creating user profile. After creating profile you'll be able to add Movies and TV Shows to your profile. Adding items to your profile, you’ll see recommendations based on your items on explore page. "} />
                <TextDisclosure title={"Detailed Info and Similar Movies/TV Shows"} text={"By clicking on any movie or TV show card you can see detailed information about that item. You can also explore similar movies or tv shows from that page."} />
                <TextDisclosure title={"AI Powered Recommendations"} text={"In AI Recommendations section you can choose up to 25 movies or tv shows. Llama AI will recommend you 10 movies or tv shows based on your selections. You can add them to your profile too."} />
                <TextDisclosure title={"Technical Details"} text={"Cinexplore is a MERN stack app created by Nureddin Farzaliyev. I've used React.js to create client-side of the project, MongoDB, express & Node.js to create user database and REST API, Cloudinary to handle profile pictures, TMDB API for Movies and TV shows, Groq for API for Llama AI."} />
            </div>


        </section>
    )
}

export default Features
