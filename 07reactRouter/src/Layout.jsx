import React from 'react'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* header and footer will be the same and other component between them would change (if i use outlet below header and footer then the both upper component will be the same and others would change)  */}
      <Footer />
    </>
  )
}

export default Layout