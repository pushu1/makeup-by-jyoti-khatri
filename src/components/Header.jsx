import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { contentConfig } from '../data/contentConfig';

import logoImg from '../assets/logo.png';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { brand, navigation, social } = contentConfig;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Left Side: Luxury Official Brand Logo */}
          <Link to="/" className="header-logo-link" aria-label="Makeup by Jyoti Khatri Home" onClick={closeMobileNav}>
            <img
              src={logoImg}
              alt="Makeup by Jyoti Khatri - Luxury Bridal Makeup Artist"
              className="header-logo-img"
            />
          </Link>

          {/* Center: Main Navigation */}
          <nav className="nav-links" aria-label="Main Navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Side: Social & Action CTAs */}
          <div className="header-actions">
            <a
              href={social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Follow Jyoti Khatri on Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href={social.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Chat with Jyoti Khatri on WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
            <button className="btn-header-primary" onClick={() => onOpenBooking()}>
              Book Now
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Backdrop */}
      <div
        className={`mobile-nav-backdrop ${isMobileNavOpen ? 'open' : ''}`}
        onClick={closeMobileNav}
      ></div>

      {/* Mobile Drawer */}
      <aside className={`mobile-nav ${isMobileNavOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-nav-header">
          <Link to="/" onClick={closeMobileNav} aria-label="Makeup by Jyoti Khatri Home">
            <img src={logoImg} alt="Makeup by Jyoti Khatri" className="mobile-nav-logo-img" />
          </Link>
          <button className="mobile-nav-close" onClick={closeMobileNav} aria-label="Close menu">
            &times;
          </button>
        </div>
        <div className="mobile-nav-links">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeMobileNav}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <button
            className="btn btn-gold btn-sm"
            style={{ width: '100%' }}
            onClick={() => {
              closeMobileNav();
              onOpenBooking();
            }}
          >
            Book Appointment
          </button>
        </div>
      </aside>
    </>
  );
}
