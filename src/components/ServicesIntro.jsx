import React, { useState, useEffect, useRef } from 'react';

export default function ServicesIntro() {
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
    <div
      ref={sectionRef}
      className={`services-intro-header ${isVisible ? 'is-visible' : ''}`}
    >
      <span className="eyebrow">OUR SERVICES</span>

      <h2 className="services-intro-title">
        Our Signature Makeover Packages – Tailored for Every Occasion
      </h2>

      <p className="services-intro-description">
        Explore our signature makeup services crafted for brides, celebrations, parties, and special occasions. Every look is designed around your features, style, personality, and event.
      </p>

      <div className="heading-gold-line" style={{ marginTop: '1.25rem' }}>
        <span></span>
      </div>
    </div>
  );
}
