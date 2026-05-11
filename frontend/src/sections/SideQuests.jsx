import React from 'react'
import './SideQuests.css'

const SideQuests = () => {
  const jobs = [
    {
      title: 'Campus Ambassador',
      company: 'University of Nottingham',
      pay: '£12.50',
      image: '/campus-ambassador.jpg'
    },
    {
      title: 'Library Assistant',
      company: 'Nottingham Uni Library',
      pay: '£12.00',
      image: '/library-assistant.jpg'
    },
    {
      title: 'Barista',
      company: 'Campus Coffee Shops',
      pay: '£11.50',
      image: '/barista.jpg'
    },
    {
      title: 'Event Staff',
      company: 'Rock City',
      pay: '£13.00',
      image: '/event-staff.jpg'
    },
    {
      title: 'Research Assistant',
      company: 'Nottingham Uni Research',
      pay: '£14.00',
      image: '/research-assistant.jpg'
    }
  ]

  return (
    <section className="side-quests">
      <div className="side-quests-container">
        <div className="referral-section">
          <div className="referral-header">
            <h2>Side Quests</h2>
            <img src="/side-quests-icon.png" alt="Side Quests" />
          </div>

          <div className="referral-content">
            <p className="referral-label">EARN CASH FOR REFERRALS</p>
            <h3>Refer and earn</h3>
            <p>Tell a friend — and earn real cash — paid straight to your bank</p>
            <a href="/referral" className="referral-link">Refer Now →</a>
            <img src="/referral-illustration.png" alt="Referral" className="referral-image" />
          </div>
        </div>

        <div className="jobs-section">
          <h3>Student Jobs Near Nottingham</h3>
          <div className="jobs-grid">
            {jobs.map((job, index) => (
              <div key={index} className="job-card">
                <img src={job.image} alt={job.title} />
                <div className="job-info">
                  <h4>{job.title}</h4>
                  <p>{job.company}</p>
                </div>
                <div className="job-pay">
                  £{job.pay}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SideQuests