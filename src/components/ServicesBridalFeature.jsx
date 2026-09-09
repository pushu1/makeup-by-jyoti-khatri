import React, { useState, useEffect, useRef } from 'react';

export default function ServicesBridalFeature({ onOpenBooking }) {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`services-bridal-feature-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <div className="bridal-feature-grid">
          {/* LEFT: TEXT CONTENT */}
          <div className="bridal-feature-text">
            <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>
              THE SIGNATURE EXPERIENCE
            </span>

            <h2 className="bridal-feature-heading">
              Bridal Makeup
            </h2>

            <p className="bridal-feature-copy">
              Your wedding day deserves a look that feels timeless, radiant and completely you. From custom skin preparation to delicate eye definition and hand-pinned dupatta draping, we ensure your bridal glow shines through every emotional ritual.
            </p>

            <button
              className="btn btn-gold"
              onClick={() => onOpenBooking('Bridal Makeup')}
            >
              BOOK YOUR BRIDAL APPOINTMENT &rarr;
            </button>
          </div>

          {/* RIGHT: LARGE BRIDAL IMAGE */}
          <div className="bridal-feature-visual">
            <div className="bridal-feature-img-wrapper">
              <img
                src="/images/jyotikhatri7.png"
                alt="Signature Bridal Makeup Experience by Jyoti Khatri"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
