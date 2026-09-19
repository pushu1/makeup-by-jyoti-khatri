import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { contentConfig } from '../data/contentConfig';

export default function HomeAboutSection({ onOpenBooking }) {
  const { about, stats } = contentConfig;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-preview"
      className={`home-about-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <div className="home-about-grid">
          {/* LEFT SIDE: Dominant Vertical Arch Image + Overlapping Secondary Accent */}
          <div className="home-about-visual">
            <div className="home-about-arch-outline"></div>
            
            {/* Main Tall Vertical Portrait with Arch Corners */}
            <div className="home-about-main-frame">
              <img
                src="/images/jyotikhatri6.png"
                alt={about.imageAlt || "Jyoti Khatri Luxury Bridal Artist"}
                className="home-about-main-img"
                loading="lazy"
              />
            </div>

            {/* Overlapping Secondary Detail Frame */}
            <div className="home-about-secondary-frame">
              <img
                src="/images/jyotikhatri7777.png"
                alt="Bridal Hair and Jewelry Detail"
                className="home-about-secondary-img"
                loading="lazy"
              />
            </div>

            {/* Floating Gold Sparkle Accent */}
            <div className="home-about-accent-badge">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#C5A059">
                <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6-6.3 4.6 2.3-7.1-6-4.5h7.6z" />
              </svg>
            </div>
          </div>

          {/* RIGHT SIDE: Text Content, Quotes, Integrated Stats & CTA */}
          <div className="home-about-content">
            <span className="eyebrow">Artistry &amp; Heritage</span>
            <h2 className="home-about-title">{about.heading}</h2>

            <div className="heading-gold-line" style={{ justifyContent: 'flex-start', margin: '0.85rem 0 1.5rem' }}>
              <span></span>
            </div>

            <p className="home-about-quote">&ldquo;{about.quote}&rdquo;</p>
            <p className="home-about-text">{about.intro}</p>

            {/* Integrated Milestone Stats Strip */}
            <div className="home-about-stats-strip">
              {stats.map((stat, idx) => (
                <div key={idx} className="home-about-stat-item">
                  <div className="stat-num">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Footer CTAs & Signature */}
            <div className="home-about-actions">
              <Link to="/about" className="btn btn-primary">
                More About Jyoti Khatri
              </Link>
              <button className="btn btn-outline" onClick={() => onOpenBooking()}>
                Book Consultation
              </button>
              <div className="signature-text">{about.signature}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
