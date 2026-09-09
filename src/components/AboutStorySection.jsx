import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function AboutStorySection() {
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
      className={`about-story-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <div className="about-story-grid">
          {/* LEFT: LARGE BEAUTY/MAKEUP IMAGE */}
          <div className="story-image-wrapper">
            <img
              src="/images/jyotikhatri11.png"
              alt="Bridal Artistry & Vision by Jyoti Khatri"
              loading="lazy"
            />
          </div>

          {/* RIGHT: EDITORIAL STORY TEXT */}
          <div className="story-text-content">
            <span className="eyebrow">OUR JOURNEY</span>

            <h2 className="story-heading">
              Our Story – The Vision Behind the Beauty
            </h2>

            <div className="heading-gold-line" style={{ justifyContent: 'flex-start', margin: '0.85rem 0 1.5rem' }}>
              <span></span>
            </div>

            <p className="story-lead-text">
              &ldquo;Makeup is more than transformation. It is about confidence, expression and celebrating what makes every woman unique.&rdquo;
            </p>

            <p className="story-paragraph">
              Jyoti Khatri’s journey into luxury bridal makeup began with a deep reverence for classical Indian aesthetics combined with a modern editorial vision. Over years of working with brides across Rajasthan and India, she developed a signature style focused on enhancing natural features, flawless skin textures, and effortless grace.
            </p>

            <p className="story-paragraph">
              At Makeup by Jyoti Khatri, every bridal experience is treated as an individualized masterwork. From in-depth skin analysis and outfit color harmonies to precise dupatta draping and floral hair setting, our team meticulously crafts looks that withstand emotional moments, long wedding rituals, and high-definition photography.
            </p>

            <p className="story-paragraph">
              Beyond personalized bridal makeovers, our Jodhpur studio is dedicated to professional beauty education, training aspiring makeup artists in modern airbrush techniques, skin prep, and luxury client suite etiquette.
            </p>

            {/* MINIMAL EDITORIAL CTA */}
            <div style={{ marginTop: '2rem' }}>
              <Link to="/services" className="blog-editorial-link">
                DISCOVER OUR SERVICES <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
