import React, { useState, useEffect, useRef } from 'react';

export default function HomeAcademySection({ onOpenBooking }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Luxury beauty/makeup flat-lay background image
  const flatLayBgImage = "/images/Post6.png";

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
      id="academy-cta"
      className={`home-academy-section ${isVisible ? 'is-visible' : ''}`}
      style={{ backgroundImage: `url(${flatLayBgImage})` }}
    >
      {/* Subtle Cream Overlay for Text Contrast */}
      <div className="academy-bg-overlay"></div>

      <div className="container">
        {/* CENTERED PEACH/CHAMPAGNE RECTANGULAR PANEL */}
        <div className="academy-content-panel">
          {/* TOP-RIGHT DECORATIVE ORGANIC CURVED LINE ART */}
          <svg className="academy-line-art academy-line-art-top" viewBox="0 0 160 160" fill="none">
            <path
              d="M10 20 Q 80 5, 120 70 T 150 140 M100 30 Q 140 10, 145 60"
              stroke="#C5A059"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.4"
            />
            <circle cx="120" cy="70" r="3" fill="#C5A059" opacity="0.5" />
          </svg>

          {/* BOTTOM-LEFT DECORATIVE ORGANIC CURVED LINE ART */}
          <svg className="academy-line-art academy-line-art-bottom" viewBox="0 0 160 160" fill="none">
            <path
              d="M150 140 Q 80 155, 40 90 T 10 20 M60 130 Q 20 150, 15 100"
              stroke="#C5A059"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.4"
            />
            <circle cx="40" cy="90" r="3" fill="#C5A059" opacity="0.5" />
          </svg>

          {/* PANEL CONTENT */}
          <div className="academy-panel-inner">
            <h2 className="academy-heading">
              Learn from Experts at Our Beauty Academy
            </h2>

            <p className="academy-description">
              Join Jodhpur’s leading beauty academy for advanced makeup and beauty training courses.
              Gain hands-on experience and professional guidance to start or elevate your career in the beauty industry.
            </p>

            <div className="academy-action">
              <button
                type="button"
                className="btn-academy"
                onClick={() => onOpenBooking && onOpenBooking('Beauty Academy')}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
