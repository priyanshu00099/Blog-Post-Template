import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <img
            src="/nottingham-logo.png"
            alt="University of Nottingham"
            className="university-logo"
          />
          <div className="hero-text">
            <div className="verified-badge">
              <img src="/verified-icon.png" alt="Verified" />
              VERIFIED HOUSING
            </div>
            <p className="hero-label">UNIVERSITY</p>
            <h1 className="hero-title">Student Accommodation Near University of Nottingham</h1>
            <p className="hero-subtitle">
              Find verified student accommodation near University of Nottingham. Explore affordable student rooms, flats, and housing in University Park, Jubilee Campus & City Centre.
            </p>
            <img
              src="/nottingham-uni-logo.png"
              alt="University of Nottingham Logo"
              className="uni-logo-large"
            />
          </div>
        </div>

        <div className="campus-grid">
          <div className="campus-card">
            <img src="/university-park.jpg" alt="University Park Campus" />
            <div className="campus-info">
              <p className="campus-label">Campus</p>
              <h2>University Park Campus</h2>
            </div>
          </div>

          <div className="campus-card">
            <img src="/jubilee-campus.jpg" alt="Jubilee Campus" />
            <div className="campus-info">
              <p className="campus-label">Campus</p>
              <h2>Jubilee Campus</h2>
            </div>
          </div>

          <div className="campus-card">
            <img src="/city-campus.jpg" alt="City Campus" />
            <div className="campus-info">
              <p className="campus-label">Campus</p>
              <h2>City Campus</h2>
            </div>
          </div>
        </div>

        <div className="community-stats">
          <div className="stat-item">
            <p className="stat-label">ACOLYTE COMMUNITY</p>
            <h3>1,100+ Students Housed</h3>
          </div>
          <button className="cta-button">
            <img src="/search-icon.png" alt="Search" />
            Search Properties
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero