import React, { useState, useEffect, useRef } from 'react';

export default function ServicesDetailRows({ onOpenBooking }) {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const detailRows = [
    {
      id: "detail-bridal",
      title: "Bridal Makeup",
      eyebrow: "COUTURE BRIDAL ARTISTRY",
      description: "A complete couture experience covering extensive pre-wedding skin consultation, premium waterproof HD/Airbrush base, intricate dupatta draping, jewelry setting, and signature bridal glow.",
      included: [
        "In-depth skin and vision consultation",
        "Full luxury waterproof HD or Airbrush base",
        "Custom eye styling & premium faux mink lashes",
        "Dupatta draping, veil pinning & jewelry setting"
      ],
      idealFor: "Main Wedding Ceremony, Pheras, Grand Mandap Rituals",
      image: "/images/jyotikhatri222222.png",
      alt: "Bridal Makeup Transformation",
      cornerClass: "curve-left",
      layoutReversed: false
    },
    {
      id: "detail-party",
      title: "Party Makeup",
      eyebrow: "CELEBRATION ELEGANCE",
      description: "Exquisite makeovers for bridesmaids, mothers, cocktail parties, sangeet nights, and milestones with long-wearing comfort and refined elegance.",
      included: [
        "Radiant long-wear base application",
        "Custom eyeshadow to complement attire",
        "Lash application & definition",
        "Hair styling (curls, braids, or textured buns)"
      ],
      idealFor: "Sangeet, Mehendi, Bridesmaids, Wedding Guests",
      image: "/images/jyotikhatri111111.png",
      alt: "Party Makeup Look",
      cornerClass: "curve-right",
      layoutReversed: true
    },
    {
      id: "detail-reception",
      title: "Reception Makeup",
      eyebrow: "HIGH GLAMOUR EVENING",
      description: "High-definition evening glamour with sculpted profiles, dramatic or shimmering eye artistry, and customized lip shades crafted for grand stage appearances.",
      included: [
        "Camera-ready stage lighting skin formulation",
        "Signature smokey or gilded shimmer eye artistry",
        "Sculpted cheekbones & dimensional highlighter",
        "Sleek hollywood waves or contemporary updo"
      ],
      idealFor: "Wedding Reception, Cocktail Night, After-Party",
      image: "/images/jyotikhatri5.png",
      alt: "Reception Evening Glamour",
      cornerClass: "curve-left",
      layoutReversed: false
    },
    {
      id: "detail-airbrush",
      title: "Airbrush Makeup",
      eyebrow: "WATERPROOF PERFECTION",
      description: "State-of-the-art mist application providing a weightless, silicone-infused velvet veil that resists humidity, sweat, tears, and extended dancing hours.",
      included: [
        "Micro-mist airgun application",
        "Non-transferable waterproof formula",
        "Pore-blurring velvet finish",
        "18+ hours staying power"
      ],
      idealFor: "Destination Weddings, Humid Climates, All-Day Rituals",
      image: "/images/Post1.jpg",
      alt: "Airbrush Makeup Technique",
      cornerClass: "curve-right",
      layoutReversed: true
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`services-detail-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        {/* HEADER */}
        <div className="services-detail-header">
          <span className="eyebrow">EDITORIAL SELECTION</span>
          <h2 className="services-detail-main-heading">
            Beauty, Crafted For Every Occasion
          </h2>
          <div className="heading-gold-line">
            <span></span>
          </div>
        </div>

        {/* ALTERNATING ROWS */}
        <div className="services-detail-rows">
          {detailRows.map((row) => (
            <div
              key={row.id}
              className={`service-detail-row ${row.layoutReversed ? 'row-reversed' : ''}`}
            >
              {/* IMAGE COLUMN */}
              <div className="service-detail-img-col">
                <div className={`service-detail-img-frame ${row.cornerClass}`}>
                  <img src={row.image} alt={row.alt} loading="lazy" />
                </div>
              </div>

              {/* TEXT COLUMN */}
              <div className="service-detail-text-col">
                <span className="eyebrow">{row.eyebrow}</span>
                <h3 className="service-detail-title">{row.title}</h3>

                <p className="service-detail-desc">{row.description}</p>

                <div className="service-included-box">
                  <div className="included-label">WHAT'S INCLUDED</div>
                  <ul className="included-list">
                    {row.included.map((item, idx) => (
                      <li key={idx}>
                        <span className="bullet-gold">&bull;</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-ideal-tag">
                  <strong>Ideal For:</strong> {row.idealFor}
                </div>

                <button
                  className="btn btn-outline-gold btn-sm"
                  style={{ marginTop: '1.25rem' }}
                  onClick={() => onOpenBooking(row.title)}
                >
                  Book {row.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
