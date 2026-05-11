import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '📚',
      title: 'Comprehensive Learning',
      description: 'Access a vast library of courses and resources designed to accelerate your learning journey.'
    },
    {
      icon: '🎯',
      title: 'Personalized Path',
      description: 'Get customized learning recommendations based on your goals and current skill level.'
    },
    {
      icon: '👥',
      title: 'Community Support',
      description: 'Join a vibrant community of learners and mentors ready to help you succeed.'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your advancement with detailed analytics and achievement milestones.'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2 className="features-title">Why Choose Acolyte?</h2>
        <p className="features-subtitle">
          Discover the features that make learning with Acolyte an exceptional experience.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features