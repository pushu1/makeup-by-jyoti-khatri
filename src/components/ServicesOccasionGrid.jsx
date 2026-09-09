import React, { useState, useEffect, useRef } from 'react';

export default function ServicesOccasionGrid({ onOpenBooking }) {
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

  const occasions = [
    {
      title: "Party Makeup",
      desc: "Chic, luminous makeovers crafted for festive parties, sangeets, and celebrations.",
      image: "/images/jyotikhatri111111.png",
      cornerClass: "curve-left"
    },
    {
      title: "Reception Makeup",
      desc: "High-definition evening glamour designed to complement statement gowns and sarees.",
      image: "/images/jyotikhatri5.png",
      cornerClass: "curve-right"
    },
    {
      title: "Engagement Makeup",
      desc: "Soft, romantic pastel tones and dewy skin for ring ceremonies and roka functions.",
      image: "/images/Post2.jpg",
      cornerClass: "curve-left"
    },
    {
      title: "Light Makeup",
      desc: "Subtle, fresh and natural beauty enhancement for intimate gatherings and day events.",
      image: "/images/Post5.png",
      cornerClass: "curve-right"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`services-occasion-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <div className="occasion-header">
          <span className="eyebrow">SPECIAL OCCASIONS</span>
          <h2 className="occasion-heading">Curated Makeovers for Every Event</h2>
          <div className="heading-gold-line">
            <span></span>
          </div>
        </div>

        <div className="occasion-grid">
          {occasions.map((item, idx) => (
            <div key={idx} className="occasion-card">
              <div className={`occasion-img-frame ${item.cornerClass}`}>
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <h3 className="occasion-card-title">{item.title}</h3>
              <p className="occasion-card-desc">{item.desc}</p>
              <button
                className="occasion-card-link"
                onClick={() => onOpenBooking(item.title)}
              >
                BOOK THIS LOOK &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
