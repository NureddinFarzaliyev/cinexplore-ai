import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './components/home/Home'
import AppMain from './components/app/AppMain'
import { handleAuth } from './components/Utils'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null)

  useEffect(() => {
    handleAuth(localStorage.getItem('id'), localStorage.getItem('token')).then(data => setIsLoggedIn(data))
  }, [])

  console.log(isLoggedIn)

  if(isLoggedIn !== null){

    return(
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ isLoggedIn === true ? <AppMain/> : <Home />} />
        </Routes>
      </BrowserRouter>
    )

  }else{

    return('loading...')
    
  }



}

export default App