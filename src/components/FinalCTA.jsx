import React from 'react';
import { contentConfig } from '../data/contentConfig';

export default function FinalCTA({ onOpenBooking }) {
  const { finalCta, social } = contentConfig;

  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-content">
            <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>
              {finalCta.eyebrow}
            </span>
            <h2 className="section-title">{finalCta.heading}</h2>
            <p>{finalCta.text}</p>
            <div className="cta-buttons">
              <button className="btn btn-gold" onClick={() => onOpenBooking()}>
                Book Your Appointment
              </button>
              <a
                href={social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-gold"
                style={{ color: '#FFFFFF', borderColor: 'var(--gold-light)' }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="cta-image-box">
            <img src={finalCta.image} alt="Indian Bridal Beauty by Jyoti Khatri" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
