import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { contentConfig } from '../data/contentConfig';

export default function HomeServicesSection({ onOpenBooking }) {
  const { services } = contentConfig;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Large portrait image for the right side
  const mainBridalImage = services[0]?.image || "/images/jyotikhatri1.png";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services-preview"
      className={`home-services-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        {/* COMPACT TOP CENTERED HEADER */}
        <div className="home-services-header">
          <span className="eyebrow">WHAT WE OFFER</span>
          <h2 className="section-title">Our Makeover Services</h2>
          <div className="services-subtitle-tag">BRIDAL, PARTY AND OCCASION LOOKS</div>
          <div className="heading-gold-line">
            <span></span>
          </div>
          <p className="home-services-desc">
            Explore a range of professional makeup services, including bridal makeovers,
            party looks, and custom transformations. Achieve picture-perfect results for
            every celebration and special occasion.
          </p>
        </div>

        {/* MAIN COMPOSITION: ASYMMETRIC MASONRY CARDS ON LEFT (62%), LARGE BRIDAL IMAGE ON RIGHT (38%) */}
        <div className="home-services-grid">
          {/* LEFT CONTENT AREA: 5 SERVICE CARDS IN ASYMMETRIC MASONRY ARRANGEMENT */}
          <div className="home-services-asymmetric-cards">
            {/* ROW 1 - CARD 01: Airbrush Makeover (Top Left) */}
            <div className="makeover-card makeover-card-1">
              <span className="card-number">01</span>
              <div>
                <div className="makeover-card-header">
                  <div className="makeover-card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                    </svg>
                  </div>
                  <h3 className="makeover-card-title">Airbrush Makeover</h3>
                </div>
                <p className="makeover-card-desc">
                  Lightweight, Smudge-Proof, and Camera-Ready Beauty
                </p>
              </div>
              <Link to="/services" className="makeover-card-link">
                LEARN MORE <span className="arrow">&rarr;</span>
              </Link>
              <svg className="makeover-card-botanical" width="30" height="30" viewBox="0 0 60 60" fill="none" stroke="#C5A059" strokeWidth="1.2">
                <path d="M10 50 Q 30 30 50 10 M30 30 Q 45 20 50 20 M30 30 Q 20 45 20 50" opacity="0.25" />
              </svg>
            </div>

            {/* ROW 1 - CARD 02: Bridal Makeover (Top Right - Vertically Staggered) */}
            <div className="makeover-card makeover-card-2 makeover-card-staggered-down">
              <span className="card-number">02</span>
              <div>
                <div className="makeover-card-header">
                  <div className="makeover-card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L15 9L22 9L16.5 13.5L18.5 20.5L12 16L5.5 20.5L7.5 13.5L2 9L9 9L12 2Z"></path>
                    </svg>
                  </div>
                  <h3 className="makeover-card-title">Bridal Makeover</h3>
                </div>
                <p className="makeover-card-desc">
                  Flawless, timeless beauty for your special day
                </p>
              </div>
              <Link to="/services" className="makeover-card-link">
                LEARN MORE <span className="arrow">&rarr;</span>
              </Link>
              <svg className="makeover-card-botanical" width="30" height="30" viewBox="0 0 60 60" fill="none" stroke="#C5A059" strokeWidth="1.2">
                <path d="M10 50 Q 30 30 50 10 M30 30 Q 45 20 50 20 M30 30 Q 20 45 20 50" opacity="0.25" />
              </svg>
            </div>

            {/* ROW 2 - CARD 03: Party Makeover (Mid Left) */}
            <div className="makeover-card makeover-card-3">
              <span className="card-number">03</span>
              <div>
                <div className="makeover-card-header">
                  <div className="makeover-card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h3 className="makeover-card-title">Party Makeover</h3>
                </div>
                <p className="makeover-card-desc">
                  Glamorous styles for every festive occasion.
                </p>
              </div>
              <Link to="/services" className="makeover-card-link">
                LEARN MORE <span className="arrow">&rarr;</span>
              </Link>
              <svg className="makeover-card-botanical" width="30" height="30" viewBox="0 0 60 60" fill="none" stroke="#C5A059" strokeWidth="1.2">
                <path d="M10 50 Q 30 30 50 10 M30 30 Q 45 20 50 20 M30 30 Q 20 45 20 50" opacity="0.25" />
              </svg>
            </div>

            {/* ROW 2 - CARD 04: Basic Light Makeover (Mid Right) */}
            <div className="makeover-card makeover-card-4">
              <span className="card-number">04</span>
              <div>
                <div className="makeover-card-header">
                  <div className="makeover-card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  </div>
                  <h3 className="makeover-card-title">Basic Light Makeover</h3>
                </div>
                <p className="makeover-card-desc">
                  Natural, fresh look for daily charm.
                </p>
              </div>
              <Link to="/services" className="makeover-card-link">
                LEARN MORE <span className="arrow">&rarr;</span>
              </Link>
              <svg className="makeover-card-botanical" width="30" height="30" viewBox="0 0 60 60" fill="none" stroke="#C5A059" strokeWidth="1.2">
                <path d="M10 50 Q 30 30 50 10 M30 30 Q 20 45 20 50" opacity="0.25" />
              </svg>
            </div>

            {/* ROW 3 - CARD 05: Reception Makeover (FULL WIDTH BOTTOM EDITORIAL PANEL) */}
            <div className="makeover-card makeover-card-5 makeover-card-full">
              <span className="card-number">05</span>
              <div className="makeover-card-full-content">
                <div className="makeover-card-header">
                  <div className="makeover-card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="makeover-card-title">Reception Makeover</h3>
                    <p className="makeover-card-desc">
                      Elegant and radiant looks for your reception evening.
                    </p>
                  </div>
                </div>
                <Link to="/services" className="makeover-card-link">
                  LEARN MORE <span className="arrow">&rarr;</span>
                </Link>
              </div>
              <svg className="makeover-card-botanical" width="30" height="30" viewBox="0 0 60 60" fill="none" stroke="#C5A059" strokeWidth="1.2">
                <path d="M10 50 Q 30 30 50 10 M30 30 Q 20 45 20 50" opacity="0.25" />
              </svg>
            </div>
          </div>

          {/* RIGHT COLUMN: BRIDAL IMAGE FRAME WITH FLOATING CIRCULAR BADGE & GOLD ACCENTS */}
          <div className="home-services-visual">
            <div className="home-services-image-wrapper">
              {/* Outer Dashed Gold Accent Outline */}
              <div className="home-services-arch-outline"></div>

              {/* Main Bridal Image Frame */}
              <div className="home-services-image-frame">
                <img
                  src="/images/jyotikhatri1.png"
                  alt="Luxury Bridal Makeover by Jyoti Khatri"
                  className="home-services-img"
                  loading="lazy"
                />
              </div>

              {/* FLOATING BLACK + GOLD CIRCULAR BADGE OVERLAPPING TOP RIGHT */}
              <div className="home-services-badge circular-badge">
                <svg className="circular-text-svg" viewBox="0 0 100 100">
                  <path id="servicesBadgeCircle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text fill="#C5A059" fontSize="7.8" letterSpacing="1.8" fontWeight="600">
                    <textPath href="#servicesBadgeCircle" startOffset="0%">
                      MAKEUP BY JYOTI KHATRI • BEAUTY •
                    </textPath>
                  </text>
                </svg>
                <div className="circular-badge-center">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>

              {/* Vertical Decorative Accent Line */}
              <div className="home-services-decorative-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


