import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './components/home/Home'
import AppMain from './components/app/AppMain'
import { handleAuth } from './components/Utils'
import Nav from './components/nav/Nav'
import Profile from './components/app/profile/Profile'
import Ai from './components/app/ai/Ai'
import Explore from './components/app/explore/Explore'
import ItemPage from './components/app/items/ItemPage'
import {LoginContext} from './components/contexts/loginContext'
import ListPage from './components/app/explore/ListPage'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null)

  useEffect(() => {
    handleAuth(localStorage.getItem('id'), localStorage.getItem('token')).then(data => setIsLoggedIn(data))
  }, [])

  if(isLoggedIn !== null){

    return(
      <BrowserRouter>
      <LoginContext.Provider value={isLoggedIn}>
        
        <Nav />

        <Routes>
          <Route exact path='/' element={ isLoggedIn === true ? <Profile/> : <Home /> } />
          <Route path='/profile' element={ isLoggedIn === true ? <Profile/> : <Home /> } />
          <Route path='/ai' element={<Ai/>} />
          <Route path='/explore' element={<Explore/> } />
          <Route path='/explore/:type/:id' element={<ItemPage />} />
          <Route path='/explore/page/:type/:listName' element={<ListPage />} />
        </Routes>

      </LoginContext.Provider>
      </BrowserRouter>
    )

  }else{

    return(
      <div className='flex items-center justify-center h-dvh'>
        <h1 className='text-5xl'>
          <AiOutlineLoading3Quarters className='animate-spin' />
        </h1>
      </div>
    )
    
  }

}

export default App