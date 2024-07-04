import React from 'react'
import logo from '../assets/lo.png'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={logo} className='rounded-full' alt="logo" />
    </div>
  )
}

export default Logo