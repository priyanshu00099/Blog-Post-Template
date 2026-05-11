import React from 'react'
import './Benefits.css'

const Benefits = () => {
  const benefits = [
    "NO BROKER FEES",
    "VERIFIED NOTTINGHAM LISTINGS",
    "UNIVERSITY PARK & JUBILEE CAMPUS",
    "£50 PER REFERRAL",
    "NOTTINGHAM CITY CENTRE",
    "24/7 STUDENT SUPPORT",
    "INSTANT BOOKINGS",
    "LOWEST PRICE GUARANTEE"
  ]

  return (
    <section className="benefits">
      <div className="benefits-container">
        <div className="benefits-marquee">
          {benefits.map((benefit, index) => (
            <React.Fragment key={index}>
              <span className="benefit-item">{benefit}</span>
              <span className="separator">·</span>
            </React.Fragment>
          ))}
          {/* Repeat for continuous scroll */}
          {benefits.map((benefit, index) => (
            <React.Fragment key={`repeat-${index}`}>
              <span className="benefit-item">{benefit}</span>
              <span className="separator">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits