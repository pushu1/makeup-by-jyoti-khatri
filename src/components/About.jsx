import React from 'react';
import { contentConfig } from '../data/contentConfig';

export default function About({ onOpenBooking }) {
  const { about } = contentConfig;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column Portrait of Jyoti */}
          <div className="about-visual">
            <div className="about-offset-border"></div>
            <div className="about-image-wrapper">
              <img
                src={about.image}
                alt={about.imageAlt}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column Editorial Philosophy & Bio */}
          <div className="about-content">
            <span className="eyebrow">Artistry &amp; Philosophy</span>
            <h2 className="section-title">{about.heading}</h2>
            <div className="heading-gold-line" style={{ justifyContent: 'flex-start', marginBottom: '1.5rem' }}>
              <span></span>
            </div>

            <p className="about-quote">&ldquo;{about.quote}&rdquo;</p>

            {about.paragraphs.map((para, idx) => (
              <p key={idx} className="about-text">
                {para}
              </p>
            ))}

            <div className="about-footer">
              <button className="btn btn-outline" onClick={() => onOpenBooking()}>
                More About Jyoti
              </button>
              <div className="signature-text">{about.signature}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
