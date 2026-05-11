import React, { useState } from 'react'
import './Properties.css'

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Shared', 'Studio']

  return (
    <section className="properties">
      <div className="properties-container">
        <div className="properties-header">
          <h2>The Cribs</h2>
          <p>Verified student homes near University Park & City Centre.</p>
        </div>

        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="properties-grid">
          <div className="no-properties">
            <p>No properties found.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Properties