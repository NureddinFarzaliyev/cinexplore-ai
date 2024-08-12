import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './components/home/Home'
import AppMain from './components/app/AppMain'
import { handleAuth } from './components/Utils'
import Nav from './components/nav/Nav'
import Profile from './components/app/profile/Profile'
import Ai from './components/app/ai/Ai'
import Explore from './components/app/explore/Explore'
import ItemPage from './components/app/ItemPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null)

  useEffect(() => {
    handleAuth(localStorage.getItem('id'), localStorage.getItem('token')).then(data => setIsLoggedIn(data))
  }, [])

  if(isLoggedIn !== null){

    return(
      <BrowserRouter>
        {isLoggedIn === true && <Nav />}
        <Routes>
          <Route exact path='/' element={ isLoggedIn === true ? <AppMain/> : <Home /> } />
          <Route path='/profile' element={ isLoggedIn === true ? <Profile/> : <Home /> } />
          <Route path='/explore' element={<Explore/> } />
          <Route path='/ai' element={<Ai/>} />
          <Route path='/explore/:type/:id' element={<ItemPage />} />
        </Routes>
      </BrowserRouter>
    )

  }else{

    return('loading...')
    
  }

}

export default App