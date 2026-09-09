import React from 'react';
import { contentConfig } from '../data/contentConfig';

export default function Stats() {
  const { stats } = contentConfig;

  return (
    <section className="stats-section" aria-label="Key Milestones and Statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-subtext">{stat.subtext}</div>
              <span className="placeholder-tag">(Placeholder)</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
