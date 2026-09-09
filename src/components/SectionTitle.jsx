import React from 'react';

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center', style }) {
  return (
    <div className="section-header" style={{ textAlign: align, ...style }}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div
        className="heading-gold-line"
        style={{ justifyContent: align === 'left' ? 'flex-start' : 'center' }}
      >
        <span></span>
      </div>
    </div>
  );
}
