import React from 'react';
import { contentConfig } from '../data/contentConfig';

export default function BridalExperience({ onOpenBooking }) {
  const { bridalExperience } = contentConfig;

  return (
    <section id="bridal-experience" className="bridal-experience-section">
      <div className="bridal-bg-art">
        <img
          src="/images/jyotikhatri5.png"
          alt="Bridal Experience Artistry"
          loading="lazy"
        />
      </div>

      <div className="container">
        <div className="bridal-experience-grid">
          {/* Left Column Content & Stages */}
          <div className="bridal-experience-header">
            <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>
              The Bridal Journey
            </span>
            <h2 className="section-title">
              Your Bridal Look,<br />Your Story.
            </h2>
            <p>{bridalExperience.description}</p>

            <div className="stages-list">
              {bridalExperience.stages.map((stage) => (
                <div key={stage.number} className="stage-item">
                  <div className="stage-number">{stage.number}</div>
                  <div className="stage-content">
                    <h4>{stage.title}</h4>
                    <div className="stage-subtitle">{stage.subtitle}</div>
                    <p>{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="btn btn-gold"
              onClick={() => onOpenBooking('Bridal Makeup')}
            >
              Plan My Bridal Look
            </button>
          </div>

          {/* Right Column Bridal Visual Card */}
          <div className="bridal-visual-card">
            <img
              src={bridalExperience.image}
              alt="Indian Bride Getting Ready by Jyoti Khatri"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
