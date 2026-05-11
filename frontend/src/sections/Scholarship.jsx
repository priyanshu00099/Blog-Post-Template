import React from 'react'
import './Scholarship.css'

const Scholarship = () => {
  return (
    <section className="scholarship">
      <div className="scholarship-container">
        <div className="scholarship-header">
          <span className="scholarship-badge">ACOLYTE SCHOLARSHIP 2026</span>
          <h2>£500 scholarship. 50 winners. Every year.</h2>
          <p>
            "We created the Acolyte Scholarship to give international students — including Nottingham students — a meaningful head start on the biggest financial challenge of studying abroad: the cost of housing."
          </p>
        </div>

        <div className="scholarship-content">
          <ul className="scholarship-list">
            <li>✓ Open to all nationalities — no restrictions</li>
            <li>✓ No GPA or grade requirement</li>
            <li>✓ Must be studying internationally (Nottingham qualifies)</li>
            <li>✓ 500-word essay — your story, in your words</li>
            <li>✓ £500 paid directly to your bank account</li>
          </ul>

          <a href="/scholarships" className="scholarship-link">
            Apply for the scholarship →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Scholarship