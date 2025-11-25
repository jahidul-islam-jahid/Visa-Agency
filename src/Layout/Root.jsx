import React from 'react'
import Heading from '../Components/Heading'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

function Root() {
  return (
    <div>
        <Heading></Heading>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root