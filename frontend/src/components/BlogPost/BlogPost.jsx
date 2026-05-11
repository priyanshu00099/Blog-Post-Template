import React, { useEffect, useState } from 'react';
import './BlogPost.css';

const BlogPost = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Simple intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="blog-container">
      <header className={`blog-header glassmorphism ${isVisible ? '' : 'hidden'}`}>
        <div className="header-content">
          <div className="brand-section">
            <a href="https://acolyteliving.com" className="brand-link">
              <span className="brand-name">Acolyte Living</span>
            </a>
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
          <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#accommodation" onClick={() => setIsMobileMenuOpen(false)}>Accommodation</a>
            <a href="#guides" onClick={() => setIsMobileMenuOpen(false)}>Guides</a>
            <a href="#contact" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Enquire Now</a>
          </nav>
        </div>
      </header>

      <main className="blog-main">
        <article className="article-wrapper">
          <header className="article-hero">
            <div className="hero-image-container">
              <img src="/hero-image.png" alt="Modern London Student Accommodation" className="hero-image" />
              <div className="hero-overlay"></div>
            </div>
            
            <div className="hero-text-content fade-in">
              <div className="article-meta">
                <span className="category">Student Guides</span>
                <span className="date">May 11, 2026</span>
              </div>
              <h1 className="article-title">
                London PBSA vs Other Student Accommodation
              </h1>
              <p className="article-subtitle">
                Comparing London student accommodations? This guide breaks down PBSA vs private renting, university halls, and shared houses.
              </p>
            </div>
          </header>

          <div className="article-content">
            <section className="intro-section fade-in">
              <p className="lead-text">
                There's no shortage of housing options in London — but for international students, the choices can feel overwhelming. Do you go for Purpose-Built Student Accommodation (PBSA), a private rented flat, a shared house, or university-managed halls?
              </p>
              <p>
                Each option has its strengths and real trade-offs. This guide compares them honestly, so you can choose based on your actual priorities — not just the headline price.
              </p>
            </section>

            <section className="summary-cards">
              <h2>Quick Summary</h2>
              <div className="cards-grid">
                <div className="card fade-in">
                  <div className="card-icon">🏢</div>
                  <h3>PBSA</h3>
                  <p>Purpose-built buildings designed specifically for students. Fully furnished, bills included, managed by a professional provider. Ranges from standard ensuite rooms to premium studio apartments.</p>
                </div>
                <div className="card fade-in">
                  <div className="card-icon">🎓</div>
                  <h3>University Halls</h3>
                  <p>Accommodation owned and managed directly by your university. Often located on or near campus. Quality and price vary widely between institutions.</p>
                </div>
                <div className="card fade-in">
                  <div className="card-icon">🔑</div>
                  <h3>Private Rented Flat</h3>
                  <p>Rented directly from a landlord or through an agency. You pay rent separately from bills, typically with a 12-month fixed-term tenancy.</p>
                </div>
                <div className="card fade-in">
                  <div className="card-icon">🏠</div>
                  <h3>Shared House (HMO)</h3>
                  <p>A house shared with other students or young professionals. The most affordable headline option, but comes with the most responsibility.</p>
                </div>
              </div>
            </section>

            <div className="content-grid">
              <div className="main-content">
                <section className="comparison-section fade-in">
                  <h2>University Halls vs PBSA</h2>
                  
                  <div className="comparison-item">
                    <h3>Price</h3>
                    <p>University halls in London typically range from £180–£350 per week, broadly comparable to PBSA. Some universities subsidise accommodation for first-year students, which can make halls cheaper in the short term.</p>
                  </div>
                  
                  <div className="comparison-item">
                    <h3>Quality and Facilities</h3>
                    <p>PBSA generally offers higher-quality facilities — better gyms, study rooms, social spaces, and overall building standards — than most university-managed halls, which vary widely. Some university halls are ageing and receive minimal investment.</p>
                  </div>
                  
                  <div className="comparison-item">
                    <h3>Availability</h3>
                    <p>University halls in London are highly competitive. Most are offered to first-year undergraduates only, and places are limited. International postgraduates and returning students often find they need to look elsewhere — which is where PBSA fills the gap.</p>
                  </div>
                  
                  <div className="verdict-box">
                    <h4>Verdict</h4>
                    <p>For first-year undergraduates who secure a place, university halls can be excellent value. For everyone else — especially international postgraduates — PBSA is the more accessible and often better-quality option.</p>
                  </div>
                </section>

                <section className="comparison-section fade-in">
                  <h2>Private Renting vs PBSA</h2>
                  
                  <div className="comparison-item">
                    <h3>Cost: Closer Than It Looks</h3>
                    <p>Private rented flats and shared houses often look cheaper at first glance. A room in a London shared house might advertise at £180–£250 per week — below many PBSA prices. But once you add:</p>
                    <ul className="custom-list">
                      <li>Monthly utility bills (electricity, gas, water): £60–£100/month</li>
                      <li>Broadband: £25–£40/month</li>
                      <li>Contents insurance: £10–£20/month</li>
                      <li>Letting agency fees or referencing charges</li>
                    </ul>
                    <p>…the gap narrows significantly, and sometimes reverses entirely.</p>
                  </div>
                  
                  <div className="comparison-item">
                    <h3>Convenience & Safety</h3>
                    <p>Private renting requires far more setup — arranging utility accounts, dealing with letting agencies, negotiating with landlords, and managing your own maintenance issues. PBSA removes all of this. One rent payment covers everything.</p>
                    <p>PBSA buildings have CCTV, electronic entry, on-site staff, and professional fire safety systems. Private rentals vary enormously — from well-maintained properties to those with inadequate security.</p>
                  </div>

                  <div className="comparison-item">
                    <h3>Flexibility & Guarantors</h3>
                    <p>Private tenancies in London typically run for 12 months, which can be problematic for students on shorter courses. PBSA offers more contract flexibility, including semester and short-stay options.</p>
                    <p>Most London landlords require a UK-based guarantor — a significant barrier for international students. PBSA is far more accommodating in this respect.</p>
                  </div>
                </section>

                <section className="comparison-section fade-in">
                  <h2>PBSA vs Shared Houses (HMOs)</h2>
                  <p>Shared houses are the most budget-focused option, but they come with genuine risks for international students unfamiliar with UK rental conventions:</p>
                  <ul className="custom-list">
                    <li>Disputes over bills and shared costs are common</li>
                    <li>Landlord responsiveness for maintenance can be poor</li>
                    <li>No on-site security or staff support</li>
                    <li>Social environment is less structured</li>
                  </ul>
                  <p>For students arriving in London for the first time, the predictability and security of PBSA typically outweighs the cost saving of a shared house.</p>
                </section>

                <section className="conclusion-section fade-in">
                  <h2>So Which Is Right for You?</h2>
                  <div className="decision-blocks">
                    <div className="decision-block">
                      <span className="tag pbsa">Choose PBSA if...</span>
                      <p>you're an international student who wants convenience, security, and a ready-made community — without the admin of managing bills, agencies, and maintenance yourself.</p>
                    </div>
                    <div className="decision-block">
                      <span className="tag halls">Choose Halls if...</span>
                      <p>you're a first-year undergraduate and your institution offers a subsidised place — take it.</p>
                    </div>
                    <div className="decision-block">
                      <span className="tag private">Choose Private Renting if...</span>
                      <p>you're returning for a second or third year, have a reliable network of friends to house-share with, and are confident managing a UK tenancy.</p>
                    </div>
                  </div>
                </section>

                <section className="cta-section fade-in">
                  <div className="cta-content">
                    <h2>Find the Right Accommodation With Acolyte Living</h2>
                    <p>If you're still weighing up your options, Acolyte Living can help you compare PBSA buildings, locations, and prices — and make sure you're not missing something better suited to your budget or university. The service is free for all students.</p>
                    <div className="cta-buttons">
                      <a href="https://acolyteliving.com/contact" className="btn-primary large">Enquire today</a>
                      <a href="https://acolyteliving.com/" className="btn-secondary large">Explore Properties</a>
                    </div>
                  </div>
                </section>
              </div>

              <aside className="sidebar fade-in">
                <div className="sidebar-widget sticky">
                  <h3>Frequently Asked Questions</h3>
                  <div className="faq-list">
                    <details className="faq-item">
                      <summary>Is PBSA cheaper than private renting?</summary>
                      <p>Not always on paper — but when you factor in the cost of bills, broadband, insurance, and agency fees, the real difference is often much smaller than the advertised rent suggests.</p>
                    </details>
                    <details className="faq-item">
                      <summary>Is London PBSA better than halls?</summary>
                      <p>For most international students, PBSA offers more consistent quality, broader availability, and better facilities than university halls.</p>
                    </details>
                    <details className="faq-item">
                      <summary>Do I need a UK guarantor for PBSA?</summary>
                      <p>Most PBSA providers do not require a UK guarantor, making them significantly more accessible for international students.</p>
                    </details>
                    <details className="faq-item">
                      <summary>Can international students rent privately?</summary>
                      <p>Yes, but it can be challenging. Most private landlords require a UK-based guarantor and proof of income.</p>
                    </details>
                    <details className="faq-item">
                      <summary>What are the biggest advantages of PBSA?</summary>
                      <p>Bills included, no UK guarantor required, 24/7 security, fully furnished rooms, flexible contracts, and a built-in community.</p>
                    </details>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      
      <footer className="blog-footer">
        <p>&copy; {new Date().getFullYear()} Acolyte Living. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPost;
