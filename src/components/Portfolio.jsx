import React, { useState } from 'react';
import { contentConfig } from '../data/contentConfig';

export default function Portfolio({ onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const { portfolio } = contentConfig;

  const filteredItems = portfolio.items.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section id="portfolio" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Visual Portfolio</span>
          <h2 className="section-title">Beauty in Every Detail</h2>
          <p className="section-subtitle">A glimpse into our bridal and beauty transformations.</p>
          <div className="heading-gold-line">
            <span></span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filters" role="tablist">
          {portfolio.categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="gallery-grid" id="gallery-grid">
          {filteredItems.map((item) => {
            // Find the original index in the complete portfolio items array
            const originalIndex = portfolio.items.findIndex((i) => i.id === item.id);

            return (
              <div
                key={item.id}
                className={`gallery-item ${item.aspect}`}
                data-category={item.category}
                onClick={() => onOpenLightbox(originalIndex)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-category-tag">{item.category}</span>
                  <h4 className="gallery-title">{item.title}</h4>
                  <p className="gallery-subtitle">{item.subtitle}</p>
                  <div className="gallery-zoom-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
