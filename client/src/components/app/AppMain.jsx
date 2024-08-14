import React from 'react'

function AppMain() {
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
