import React from 'react'

const Header = () => {
  const headerStyle = {
   backgroundImage: `url(${process.env.PUBLIC_URL}/images/header-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '375px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }

  const textStyle = {
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
  }

  return (
    <header style={headerStyle}>
      <h1 style={textStyle}>Tony Stark</h1>
    </header>
  )
}

export default Header