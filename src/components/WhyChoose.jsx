import React from 'react';
import { contentConfig } from '../data/contentConfig';

export default function WhyChoose() {
  const { whyChooseUs } = contentConfig;

  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">The Signature Standard</span>
          <h2 className="section-title">Why Brides Choose Jyoti</h2>
          <p className="section-subtitle">A bespoke, peaceful beauty experience tailored to make you glow.</p>
          <div className="heading-gold-line">
            <span></span>
          </div>
        </div>

        <div className="why-choose-grid">
          {whyChooseUs.map((card) => (
            <div key={card.number} className="why-card">
              <div className="why-number">{card.number}</div>
              <h3 className="why-title">{card.title}</h3>
              <p className="why-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
