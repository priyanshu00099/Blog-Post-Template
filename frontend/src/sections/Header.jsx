import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-logo">
          <h1>Acolyte</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-cta">
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>
    </header>
  )
}

export default Header