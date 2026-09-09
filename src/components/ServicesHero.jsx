import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`services-hero-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="services-hero-bg-overlay"></div>

      <div className="container">
        <div className="services-hero-content">
          {/* Centered Heading */}
          <h1 className="services-hero-heading">
            Bridal, Party, and Special Occasion Makeovers
          </h1>

          {/* Small Elegant Breadcrumb */}
          <nav className="services-hero-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">&frasl;</span>
            <span className="breadcrumb-active">Services</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
