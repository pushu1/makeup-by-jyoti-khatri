import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function AboutHero() {
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
      className={`about-hero-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="about-hero-bg-overlay"></div>

      <div className="container">
        <div className="about-hero-content">
          {/* Subtle Breadcrumb */}
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">&frasl;</span>
            <span className="breadcrumb-active">About</span>
          </nav>

          {/* Large Serif Heading */}
          <h1 className="about-hero-heading">
            About Makeup by Jyoti Khatri – Jodhpur's Luxury Makeup Studio
          </h1>

          {/* Subheading / Tagline */}
          <div className="about-hero-subtagline">
            Bridal Beauty &bull; Artistry &bull; Elegance
          </div>

          {/* Thin Gold Decorative Line */}
          <div className="heading-gold-line" style={{ marginTop: '1.25rem' }}>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
