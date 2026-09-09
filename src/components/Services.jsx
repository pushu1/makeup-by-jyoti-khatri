import React from 'react';
import { contentConfig } from '../data/contentConfig';

export default function Services({ onOpenBooking }) {
  const { services } = contentConfig;

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Bespoke Offerings</span>
          <h2 className="section-title">Signature Makeup Services</h2>
          <p className="section-subtitle">Looks thoughtfully created for every celebration.</p>
          <div className="heading-gold-line">
            <span></span>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-image-box">
                <img src={service.image} alt={service.name} loading="lazy" />
                <span className="service-badge">{service.badge}</span>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.name}</h3>
                <p className="service-tagline">&ldquo;{service.tagline}&rdquo;</p>
                <p className="service-desc">{service.description}</p>
                <div className="service-card-footer">
                  <button
                    type="button"
                    className="explore-link"
                    onClick={() => onOpenBooking(service.name)}
                    style={{ background: 'none', border: 'none', padding: 0 }}
                  >
                    <span>Explore</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
