import React from 'react';
import { Link } from 'react-router-dom';
import { contentConfig } from '../data/contentConfig';

import logoImg from '../assets/logo.png';

export default function Footer({ onOpenBooking }) {
  const { brand, social, contact, navigation, services } = contentConfig;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Col 1: Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link" aria-label="Makeup by Jyoti Khatri Home">
              <img
                src={logoImg}
                alt="Makeup by Jyoti Khatri - Luxury Bridal Makeup Artist"
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-brand-desc">
              Luxury Indian bridal &amp; beauty artistry. Thoughtfully creating timeless, confident, and radiant looks for discerning brides worldwide.
            </p>
            <div className="footer-social-links">
              <a
                href={social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={social.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href={social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <div className="footer-links">
              {navigation.map((item) => (
                <Link key={item.label} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Signature Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <div className="footer-links">
              {services.map((s) => (
                <Link key={s.id} to="/services">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Contact Info Placeholders */}
          <div>
            <h4 className="footer-heading">Inquiries</h4>
            <div className="footer-links">
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light-muted)' }}>
                <strong>WhatsApp:</strong> {contact.whatsappDisplay}
                <br />
                <strong>Email:</strong> {contact.email}
                <br />
                <strong>Studio:</strong> {contact.city}
                <br />
                <strong>Location:</strong> {contact.location}
              </p>
              <div style={{ marginTop: '1rem' }}>
                <button className="btn btn-gold btn-sm" onClick={() => onOpenBooking()}>
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2026 {brand.name}. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
