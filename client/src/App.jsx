import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import AppMain from './components/app/AppMain'

function App() {

  const isLoggedIn = false


  return(

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ isLoggedIn ? <AppMain/> : <Home />} />
      </Routes>
    </BrowserRouter>


  )

}

export default App