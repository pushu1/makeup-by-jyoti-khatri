import React, { useState, useEffect, useRef } from 'react';

export default function ServicesEditorialSection({ onOpenBooking }) {
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
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const serviceCards = [
    {
      number: "01",
      title: "Airbrush Makeover",
      description: "Lightweight, smudge-proof and camera-ready beauty for long-lasting occasions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v6m0 0l-3-3m3 3l3-3M5 12h14M12 16v6m-4-3h8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gridClass: "card-item-1"
    },
    {
      number: "02",
      title: "Bridal Makeover",
      description: "Flawless, timeless bridal beauty designed especially for your special day.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      gridClass: "card-item-2 card-offset-down"
    },
    {
      number: "03",
      title: "Party Makeover",
      description: "Glamorous and polished makeup looks for parties and festive occasions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gridClass: "card-item-3"
    },
    {
      number: "04",
      title: "Basic Light Makeover",
      description: "Natural, fresh and elegant makeup for everyday or intimate occasions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 8v4l3 3" strokeLinecap="round"/>
        </svg>
      ),
      gridClass: "card-item-4"
    },
    {
      number: "05",
      title: "Reception Makeover",
      description: "Elegant and radiant looks designed to make your reception evening unforgettable.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 3l14 9-14 9V3z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gridClass: "card-item-5 card-full-width"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`services-editorial-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <div className="services-editorial-grid">
          {/* LEFT SIDE: ASYMMETRIC MASONRY SERVICE CARDS */}
          <div className="services-cards-left">
            <div className="services-asymmetric-cards">
              {serviceCards.map((card) => (
                <div key={card.number} className={`service-editorial-card ${card.gridClass}`}>
                  <div className="card-top-row">
                    <div className="card-icon">{card.icon}</div>
                    <span className="card-num">{card.number}</span>
                  </div>

                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>

                  <button
                    className="card-learn-link"
                    onClick={() => onOpenBooking(card.title)}
                  >
                    LEARN MORE <span className="arrow">&rarr;</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: LARGE DOMINANT BRIDAL IMAGE + CIRCULAR BADGE */}
          <div className="services-visual-right">
            {/* ORGANIC BOTANICAL SVG LINE ART DECORATION */}
            <svg
              className="services-svg-line-art"
              viewBox="0 0 400 700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 40 20 C 180 100, 320 220, 260 380 C 200 540, 340 620, 280 680"
                stroke="#C5A059"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                opacity="0.45"
              />
            </svg>

            {/* DOMINANT BRIDAL IMAGE WRAPPER */}
            <div className="services-dominant-image-frame">
              {/* ROTATING CIRCULAR BADGE OVERLAPPING TOP-LEFT */}
              <div className="circular-badge services-badge-overlap">
                <svg className="circular-text-svg" viewBox="0 0 100 100">
                  <path id="servicesBadgePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text fill="#C5A059" fontSize="8" letterSpacing="2.2">
                    <textPath href="#servicesBadgePath">
                      MAKEUP • BEAUTY • BRIDAL • JYOTI KHATRI • 
                    </textPath>
                  </text>
                </svg>
                <div className="circular-badge-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
                  </svg>
                </div>
              </div>

              <img
                src="/images/jyotikhatri1.png"
                alt="Luxury Bridal Makeover Artistry by Jyoti Khatri"
                className="dominant-bridal-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
