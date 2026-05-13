import React, { useEffect, useRef, useState } from 'react';
import './BlogPost.css';

const SECTION_NAV_IDS = [
  'intro',
  'summary',
  'compare-1',
  'compare-2',
  'compare-3',
  'conclusion',
  'FAQ',
];

const BlogPost = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
        setIsVisible(false);
        setIsSearchActive(false);
      } else {
        setIsVisible(true);
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  useEffect(() => {
    const headerEl = document.querySelector('.blog-header');

    const getActivateLineY = () => {
      const headerH = headerEl?.getBoundingClientRect().height ?? 72;
      return window.scrollY + headerH + 32;
    };

    const updateActiveSection = () => {
      const lineY = getActivateLineY();
      let active = SECTION_NAV_IDS[0];
      for (const id of SECTION_NAV_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (lineY >= top) active = id;
      }
      setActiveSection(active);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <div className="blog-container">
      <header className={`blog-header glassmorphism ${isVisible ? '' : 'hidden'}`}>
        <div className={`header-content ${isSearchActive ? 'active' : ''}`}>
          {!isSearchActive && (
            <>
          <div className="brand-section">
            <a href="https://acolyteliving.com" className="brand-link">
              <img src="/LIVING-Blue.webp" alt="Acolyte Living"  className="brand-image"/>
            </a>
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
          <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="https://acolyteliving.com/" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="https://acolyteliving.com/properties/uk/london" onClick={() => setIsMobileMenuOpen(false)}>Properties</a>
            <a href="https://acolyteliving.com/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>
          </>
          )}
          <div className={`nav-imp ${isSearchActive ? 'full-width' : ''} ${isMobileMenuOpen ? 'open' : ''}`}>
            {!isSearchActive && <a href="#login" className="btn-primary">Login</a>}
            
            <div className={`imp1 ${isSearchActive ? 'active' : ''}`}>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search everything..." 
                autoFocus={isSearchActive}
              />
              <button className="search-icon-btn" onClick={toggleSearch}>
                {isSearchActive ? <span>✕</span> : <span>🔍</span>}
              </button>
            </div>
            </div>
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
              <div className="article-meta" id='intro'>
                <span className="category">Student Guides</span>
                <span className="date" style={{ color: 'white' }}>May 11, 2026</span>
              </div>
              <h1 className="article-title">
                London PBSA vs Other Student Accommodation
              </h1>
              <p className="article-subtitle">
                Comparing London student accommodations? This guide breaks down PBSA vs private renting, university halls, and shared houses.
              </p>
            </div>
          </header>
          <section className="blog-start">
            <div className="bs1">
              <p><b>Acolyte Living</b><br />contributer</p>
            </div>
            <div className="bs2">
              <p><img src="/time.png" alt="calendar" className='start-img'/>11 May 2026</p>
              <p><img src="/clock.png" alt="clock" className='start-img'/>7 min read</p>
            </div>
            <div className="bs3">
              <div className="bs3-a">
              <a href=""><img src="/link.png" alt="Link" className='start-img'/></a>
              </div>
              <div className="bs3-a">
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fintent%2Ftweet%3Furl%3Dhttps%253A%252F%252Facolyteliving.com%252Fpost%252Funiversity-of-manchester-student-life-2026%26text%3DUniversity%2520of%2520Manchester%2520Student%2520Life%25202026%253A%2520Clubs%2520%2526%2520Campus%2520Guide"><img src="/twitter.png" alt="Twitter" className='start-img'/></a>
              </div>
              <div className="bs3-a">
              <a href="https://www.linkedin.com/login/?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%2F%3Furl%3Dhttps%253A%252F%252Facolyteliving.com%252Fpost%252Funiversity-of-manchester-student-life-2026"><img src="/linkedin.png" alt="LinkedIn" className='start-img'/></a>
              </div>
            </div>
          </section>
          <div className="article-content">
            <div className="part-A">
              <section className="intro-section fade-in">
                <p className="lead-text">
                  There's no shortage of housing options in London — but for international students, the choices can feel overwhelming. Do you go for Purpose-Built Student Accommodation (PBSA), a private rented flat, a shared house, or university-managed halls?
                </p>
                <p>
                  <b>Each option has its strengths and real trade-offs. This guide compares them honestly, so you can choose based on your actual priorities — not just the headline price.</b> 
                </p>
              </section>

              <section className="summary-cards" id='summary'>
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
                  <section id='compare-1' className="comparison-section fade-in">
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

                  <section id='compare-2' className="comparison-section fade-in">
                    <h2>Private Renting vs PBSA</h2>
                  
                    <div className="comparison-item">
                      <h3>Cost: Closer Than It Looks</h3>
                      <p>At first glance, snagging a room in a private flat or a shared house can feel like you’ve hit the jackpot. When you see a London room listed for £180–£250 per week, it’s easy to think you’re saving a small fortune compared to Purpose-Built Student Accommodation (PBSA).<br />But before you sign that lease, it’s worth looking at the "hidden" side of adulting. The rent you see on the flyer usually isn't the final number that leaves your bank account. To get the real picture, you have to layer on the essentials that PBSAs typically bundle in for free:</p>
                      <ul className="custom-list">
                        <li>Keeping the lights on: Utilities like electricity, gas, and water usually add an extra £60–£100 to your monthly budget.</li>
                        <li>Staying connected: Good broadband is a non-negotiable for uni life, but it’ll set you back another £25–£40 every month.</li>
                        <li>Protecting your gear: From your laptop to your bike, contents insurance is a must-have, costing roughly £10–£20.</li>
                        <li>The Paperwork: Don't forget those one-off letting agency fees or referencing charges that pop up right when you're trying to move in.</li>
                      </ul>
                      <p>When you add those costs up, that "cheap" room starts to look a lot more expensive. Suddenly, the gap between a shared house and a PBSA narrows—or disappears entirely.<br />When you factor in the peace of mind of having one single payment, 24/7 security, and a maintenance team that actually answers the phone, that slightly higher PBSA price tag often turns out to be the smarter, more stress-free deal. It’s not just about paying for a bed; it’s about buying back your time and sanity.</p>
                    </div>
                  
                    <div className="comparison-item">
                      <h3>Convenience & Safety</h3>
                      <p>Private renting requires far more setup — arranging utility accounts, dealing with letting agencies, negotiating with landlords, and managing your own maintenance issues. PBSA removes all of this. One rent payment covers everything.</p>
                      <p>PBSA buildings have CCTV, electronic entry, on-site staff, and professional fire safety systems. Private rentals vary enormously — from well-maintained properties to those with inadequate security.</p>
                    </div>

                    <div className="ci2">
                      <h3>Flexibility & Guarantors</h3>
                      <p>Private tenancies in London typically run for 12 months, which can be problematic for students on shorter courses. PBSA offers more contract flexibility, including semester and short-stay options.</p>
                      <p>Most London landlords require a UK-based guarantor — a significant barrier for international students. PBSA is far more accommodating in this respect.</p>
                    </div>
                  </section>

                  <section id='compare-3' className="comparison-section fade-in">
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

                  <section id='conclusion' className="conclusion-section fade-in">
                    <h1>So Which Is Right for You?</h1>
                    <div className="decision-blocks">
                      <div className="decision-block">
                        <img src="/PBSA.jpg" alt="PBSA" className='decision-image'/>
                        <span className="tag pbsa">Choose PBSA if...</span>
                        <p>you're an international student who wants convenience, security, and a ready-made community — without the admin of managing bills, agencies, and maintenance yourself.</p>
                      </div>
                      <div className="decision-block">
                        <img src="/Halls.jpg" alt="Halls" className='decision-image'/>
                        <span className="tag halls">Choose Halls if...</span>
                        <p>you're a first-year undergraduate and your institution offers a subsidised place — take it.</p>
                      </div>
                      <div className="decision-block">
                        <img src="/Renting.jpg" alt="Private Renting" className='decision-image'/>
                        <span className="tag private">Choose Private Renting if...</span>
                        <p>you're returning for a second or third year, have a reliable network of friends to house-share with, and are confident managing a UK tenancy.</p>
                      </div>
                    </div>
                  </section>                  
                </div>
              </div>
              <section className="FAQ" id='FAQ'>
                <div className="FAQ-1">
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
              </section>
            </div>


            <aside className="part-B">
              <div className="sidebar-sticky-wrap">
              <section className="in-article sticky-A">
                <h2>In This Blog</h2>
                <ul className="in-article-list">
                  <li><a href="#intro" className={activeSection === "intro" ? "active-link" : ""}>Introduction</a></li>
                  <li><a href="#summary" className={activeSection === "summary" ? "active-link" : ""}>Summary</a></li>
                  <li><a href="#compare-1" className={activeSection === "compare-1" ? "active-link" : ""}>University Halls vs PBSA</a></li>
                  <li><a href="#compare-2" className={activeSection === "compare-2" ? "active-link" : ""}>Private Renting vs PBSA</a></li>
                  <li><a href="#compare-3" className={activeSection === "compare-3" ? "active-link" : ""}>PBSA vs Shared Houses (HMOs)</a></li>
                  <li><a href="#conclusion" className={activeSection === "conclusion" ? "active-link" : ""}>So Which Is Right for You?</a></li>
                  <li><a href="#FAQ" className={activeSection === "FAQ" ? "active-link" : ""}>Frequently Asked Questions</a></li>
                </ul>
              </section>
              <section className="cta-section">
                <div className="cta-content fade-in">
                  <img src="/LIVING-Blue.webp" alt="Acolyte Living" />
                  <h2><b><i>Find the Right Accommodation With Acolyte Living</i></b></h2>
                  <div className="discount">
                    <div className="smaller">
                      <p>Fill Deatails and Get <br />Benfits worth</p>
                    </div>  
                    <div className="bigger">
                      <p>$100</p>
                    </div>
                  </div>
                  <form action="#">
                    <div className="cta-fo1">
                      <p><b>Name</b></p>
                      <input type="text" className='cta-form' placeholder='Full Name' />
                    </div>
                    <div className="cta-fo1">
                      <p><b>Email Id</b></p>
                      <input type="email" className='cta-form' placeholder='Email Address' />
                    </div>
                    <div className="cta-fo1">
                      <p><b>Nationality</b></p>
                      <input type="text" className='cta-form' placeholder='Nationality' />
                    </div>
                    <div className="cta-fo1">
                      <p><b>Mobile Number</b></p>
                      <input type="number" className='cta-form' placeholder='Phone Number' />
                    </div>
                    <div className="cta-btn">
                      <button className="btn-primary"><b>Submit</b></button>
                    </div>
                  </form>
                </div>
              </section>
              </div>
            </aside>
          </div>
        </article>
      </main>
      
      <footer className="blog-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="https://acolyteliving.com" className="footer-brand-link">
              <img src="/LIVING-Blue.webp" alt="Acolyte Living" className="brand-image i"/>
            </a>
            <p className="footer-brand-text">Your global education journey starts with the right home. Find premium student accommodation in 250+ cities worldwide with verified listings and 24/7 support.</p>
            <br />
            <p className='footer-why-text'><img src="/star.png" alt="Star"  className='footer-star'/><b>Why choose Acolyte Living?</b></p>
            <div className="footer-why-list">
              <p className='footer-list'>Lowest Price Guarantee</p>
              <p className='footer-list'>24/7 Professional Service</p>
              <p className='footer-list'>Instant & Easy Bookings</p>
              <p className='footer-list'>250+ Global Cities</p>
            </div>
          </div>
          <div className="footer-contact">
            <p className='fcp'><img src="/Headphone.png" alt="Headphone" className='footer-star'/><b>24/7 Student Support</b></p>
            <div className="social">
              <div className="social-a">
              <a href="https://www.facebook.com/AcolyteLiving" target="_blank" rel="noopener noreferrer">
                <img src="/facebook.png" alt="Facebook" className='start-img'/></a>
              </div>
              <div className="social-a">
              <a href="https://www.linkedin.com/company/acolyteliving" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.png" alt="LinkedIn" className='start-img'/></a>
              </div>
              <div className="social-a">
              <a href="https://www.instagram.com/acolyteliving/" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.png" alt="Instagram" className='start-img'/></a>
              </div>
            </div>
            <div className="footer-c">
              <p className="fcl"><img src="/phone-call.png" alt="" className="footer-star" />India Customer Support
              <br />+91 98875 98516</p>
              <p className="fcl"><img src="/phone-call.png" alt="" className="footer-star" />UK Customer Support
              <br />+44 7541 903957</p>
              <p className="fcl"><img src="/mail.png" alt="" className="footer-star" /><b>Email Us</b>
              <br />support@acolyteliving.com</p>
              <p className="fcl"><img src="/whatsapp.png" alt="" className="footer-star" /><b>WhatsApp</b>
              <br />+91 96949-08530</p>
            </div>
          </div>
        </div>
        <div className="footer-links">
              <p><b>Quick Links</b></p>
              <ul className="footer-links-list">
                <li><a href="https://acolyteliving.com/" className="f-links">Home</a></li>
                <li><a href="https://acolyteliving.com/properties/uk/london" className="f-links">Properties</a></li>
                <li><a href="https://acolyteliving.com/about-us" className="f-links">About Us</a></li>
                <li><a href="https://acolyteliving.com/partners" className="f-links">Partners</a></li>
                <li><a href="https://acolyteliving.com/faqs" className="f-links">Faqs</a></li>
                <li><a href="https://acolyteliving.com/post" className="f-links">Blogs</a></li>
                <li><a href="https://acolyteliving.com/contact-us" className="f-links">Contact</a></li>
              </ul>
            </div>
        <p className='M'>&copy; {new Date().getFullYear()} Acolyte Living. All rights reserved.</p>
        <div className="fl-link">
          <ul className="fl">
            <li className="l"><a href="https://acolyteliving.com/terms-and-conditions" className="f-links">Terms Of Services</a></li>
            <li className="l"><a href="https://acolyteliving.com/privacy-policy" className="f-links">Privacy Policy</a></li>
            <li className="l"><a href="https://acolyteliving.com/refund-policy" className="f-links">Refund Policy</a> </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
