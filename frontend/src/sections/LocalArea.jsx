import React, { useState } from 'react'
import './LocalArea.css'

const LocalArea = () => {
  const [activeCategory, setActiveCategory] = useState('Eat & Drink')

  const categories = ['Eat & Drink', 'Study', 'Social']

  const attractions = {
    'Eat & Drink': [
      {
        name: 'Broadway Cinema',
        description: 'Independent cinema with great food options and student deals.',
        distance: '5M',
        image: '/broadway-cinema.jpg'
      },
      {
        name: 'The Stable',
        description: 'Popular student bar with live music and cheap drinks.',
        distance: '8M',
        image: '/the-stable.jpg'
      },
      {
        name: 'Harts Restaurant',
        description: 'Campus restaurant with affordable meals and study atmosphere.',
        distance: '2M',
        image: '/harts-restaurant.jpg'
      },
      {
        name: 'Iechyd Da Brewing Co',
        description: 'Craft beer brewery with great food and student discounts.',
        distance: '10M',
        image: '/iechyd-da.jpg'
      }
    ],
    'Study': [
      {
        name: 'Kings Meadow Campus Library',
        description: 'Modern library with 24/7 study spaces and resources.',
        distance: '3M',
        image: '/kings-meadow-library.jpg'
      },
      {
        name: 'Portland Building',
        description: 'Quiet study areas and computer labs.',
        distance: '4M',
        image: '/portland-building.jpg'
      },
      {
        name: 'Lake Side Study Areas',
        description: 'Peaceful outdoor study spots by the lake.',
        distance: '6M',
        image: '/lake-side.jpg'
      }
    ],
    'Social': [
      {
        name: 'Rock City',
        description: 'Major entertainment venue with concerts and events.',
        distance: '12M',
        image: '/rock-city.jpg'
      },
      {
        name: 'Nottingham Castle',
        description: 'Historic site with museums and city views.',
        distance: '15M',
        image: '/nottingham-castle.jpg'
      },
      {
        name: 'Victoria Centre',
        description: 'Shopping centre with food court and entertainment.',
        distance: '10M',
        image: '/victoria-centre.jpg'
      },
      {
        name: 'Trent Building',
        description: 'Student union with bars, societies, and events.',
        distance: '1M',
        image: '/trent-building.jpg'
      }
    ]
  }

  return (
    <section className="local-area">
      <div className="local-area-container">
        <div className="local-area-header">
          <h2>The Lore</h2>
          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category}
                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="attractions-grid">
          {attractions[activeCategory].map((attraction, index) => (
            <div key={index} className="attraction-card">
              <div className="attraction-image">
                <img src={attraction.image} alt={attraction.name} />
              </div>
              <div className="attraction-info">
                <h3>{attraction.name}</h3>
                <p>{attraction.description}</p>
              </div>
              <div className="attraction-distance">
                {attraction.distance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LocalArea