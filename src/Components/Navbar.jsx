import React from 'react'
import Globe from '../Images/globe.png'

function Navbar() {
  return (
    <div className='nav'>
        <img src={Globe} alt="globe" className='nav-logo' />
        <h3>My Travel Journal</h3>      
    </div>
  )
}

export default Navbar
