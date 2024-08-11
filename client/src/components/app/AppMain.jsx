import React from 'react'

function AppMain() {

    // TODO: NAME MUST BE CHANGED LATER TO SMTH USEFUL

  return (
    <div>
      logged in 

      <button onClick={() => {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        location.reload()
      }}>Log out</button>

      
    </div>
  )
}

export default AppMain
