import React from 'react';
import { contentConfig } from '../data/contentConfig';

export default function Instagram() {
  const { social, instagramGrid } = contentConfig;

  return (
    <section className="instagram-section">
      <div className="container">
        <div className="instagram-header">
          <span className="eyebrow">Visual Stories</span>
          <h2 className="section-title" style={{ marginBottom: '0.25rem' }}>
            Follow the Journey
          </h2>
          <a
            href={social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-handle"
          >
            {social.instagramHandle}
          </a>
        </div>

        <div className="instagram-grid">
          {instagramGrid.map((item, idx) => (
            <div key={idx} className="instagram-item">
              <img src={item.image} alt={item.alt} loading="lazy" />
              <a
                href={social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-overlay"
                aria-label="View on Instagram"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="instagram-action">
          <a
            href={social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
