import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Home
