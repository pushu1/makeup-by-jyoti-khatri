import React, { useState, useEffect, useRef } from 'react';

export default function ServicesFinalCTA({ onOpenBooking }) {
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
      className={`services-final-cta-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <div className="services-final-cta-content">
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>
            RESERVE YOUR DATE
          </span>

          <h2 className="services-final-cta-heading">
            Ready To Create Your Signature Look?
          </h2>

          <p className="services-final-cta-desc">
            Let's create a makeup look that feels beautiful, confident and completely yours.
          </p>

          <button
            className="btn btn-gold"
            onClick={() => onOpenBooking()}
          >
            BOOK YOUR APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
}
