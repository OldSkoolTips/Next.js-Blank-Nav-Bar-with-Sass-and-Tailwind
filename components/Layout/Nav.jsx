import React, { useState } from 'react'
import navStyles from '../../styles/Nav.module.scss'
import Image from 'next/image'
import logo from '../../images/logo.png'
import Link from 'next/link'
const Nav = () => {
  const [hamburger, setHamburger] = useState(false)

  return (
    <nav className={navStyles.nav}>
      <div className='Container'>
        <div className={navStyles.logo}>
          <Link href='/'>
            <a aria-label='Home page'>
              <Image
                src={logo}
                height={37}
                width={37}
                alt='Freedom Cleaning Logo'
                aria-label='logo'
              />
            </a>
          </Link>
        </div>
        <div className={navStyles.menu}>
          <Link href='/'>
            <a aria-label='Home page'>Home</a>
          </Link>
          <Link href='/about'>
            <a aria-label='About page'>About</a>
          </Link>
          <Link href='/'>
            <a aria-label='Contact page'>Contact</a>
          </Link>
          {/* <a href='tel:07503-885730'>07503 885730</a> */}
        </div>
        <button
          onClick={() => setHamburger(!hamburger)}
          className={`${navStyles.hamburger} ${
            hamburger ? navStyles.isActive : ''
          }`}
          aria-label='Menu Button'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          onClick={() => setHamburger(!hamburger)}
          className={`${navStyles.mobileNav} ${
            hamburger ? navStyles.isActiveM : ''
          }`}
        >
          <Link href='/'>
            <a aria-label='Home page'>Home</a>
          </Link>
          <Link href='/about'>
            <a aria-label='About page'>About</a>
          </Link>
          <Link href='/'>
            <a aria-label='Contact page'>Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default Nav
