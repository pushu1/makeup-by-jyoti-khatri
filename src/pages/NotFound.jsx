import React from 'react';
import { Link } from 'react-router-dom';
import { contentConfig } from '../data/contentConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function NotFound() {
  const { seo } = contentConfig;
  useDocumentTitle(seo.notFound.title, seo.notFound.description);

  return (
    <div className="page-transition">
      <section className="not-found-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">404 &bull; Error</span>
          <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1.25rem' }}>
            Page Not Found
          </h1>
          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
            The bridal page or beauty inspiration you are searching for might have moved or is unavailable.
          </p>
          <div className="heading-gold-line" style={{ marginBottom: '2.5rem' }}>
            <span></span>
          </div>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
