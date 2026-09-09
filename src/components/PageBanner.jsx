import React from 'react';
import { Link } from 'react-router-dom';

export default function PageBanner({ eyebrow, title, subtitle, breadcrumbCurrent }) {
  return (
    <section className="page-banner">
      <div className="page-banner-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="page-banner-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">&bull;</span>
            <span className="breadcrumb-active">{breadcrumbCurrent}</span>
          </nav>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="page-banner-title">{title}</h1>
          {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
          <div className="heading-gold-line">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
