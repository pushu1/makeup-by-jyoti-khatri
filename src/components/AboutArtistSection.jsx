import React, { useState, useEffect, useRef } from 'react';

export default function AboutArtistSection() {
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
      className={`about-artist-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <div className="about-artist-grid">
          {/* LEFT: LARGE BRIDAL PORTRAIT (IMAGE 01) */}
          <div className="artist-img-frame artist-img-main">
            <img
              src="/images/jyotikhatri22.png"
              alt="Jyoti Khatri - Founder & Lead Makeup Artist"
              loading="lazy"
            />
          </div>

          {/* CENTER: EDITORIAL TEXT CONTENT */}
          <div className="artist-text-content">
            <span className="eyebrow">THE FOUNDER</span>

            <h2 className="artist-main-heading">
              The Artist Behind the Magic
            </h2>

            <div className="heading-gold-line" style={{ justifyContent: 'flex-start', margin: '0.85rem 0 1.25rem' }}>
              <span></span>
            </div>

            <p className="artist-subheading-quote">
              &ldquo;Enhancing Your Beauty, Creating Your Signature Look.&rdquo;
            </p>

            <p className="artist-body-copy">
              With a passion for beauty and an eye for detail, Jyoti Khatri creates refined makeup looks that enhance natural features while reflecting every bride's unique personality and style.
            </p>

            <div className="artist-signature-block">
              <div className="artist-signature-name">Jyoti Khatri</div>
              <div className="artist-role-title">Founder &amp; Lead Makeup Artist</div>
            </div>
          </div>

          {/* RIGHT: SMALLER SECONDARY PORTRAIT (IMAGE 02) */}
          <div className="artist-img-frame artist-img-secondary">
            <img
              src="/images/jyotikhatri222.png"
              alt="Jyoti Khatri Bridal Makeover Artistry"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
