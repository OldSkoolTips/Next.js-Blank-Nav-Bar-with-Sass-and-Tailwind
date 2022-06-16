import React from 'react'
import Nav from './Nav'
import FooterComponent from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Nav />
      <main className='mb-auto'>{children}</main>
      <FooterComponent />
    </div>
  )
}

export default Layout
