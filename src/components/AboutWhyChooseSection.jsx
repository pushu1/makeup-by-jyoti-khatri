import React, { useState, useEffect, useRef } from 'react';

export default function AboutWhyChooseSection({ onOpenBooking }) {
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

  const features = [
    {
      number: "01",
      title: "Trained & Certified Makeup Artist",
      description: "Certified by leading international beauty academies, mastering classic bridal heritage, 4K HD foundation, and advanced airbrush techniques.",
      image: "/images/jyotikhatri7.png",
      alt: "Trained & Certified Makeup Artist Jyoti Khatri",
      borderClass: "curve-top-left"
    },
    {
      number: "02",
      title: "Expertise Backed by Experience",
      description: "Over 7+ years of dedicated bridal experience crafting over 500+ personalized wedding looks with calm, punctual, and comforting suite presence.",
      image: "/images/jyotikhatri111.png",
      alt: "Expertise Backed by Experience Bridal Artistry",
      borderClass: "curve-top-right"
    },
    {
      number: "03",
      title: "Luxury Makeup Products",
      description: "Exclusively curating Charlotte Tilbury, Dior, MAC, Huda Beauty, NARS, and Chanel for a weightless, non-flashback 18+ hour finish.",
      image: "/images/Post6.png",
      alt: "Luxury International Makeup Products Vanity",
      borderClass: "curve-top-left"
    },
    {
      number: "04",
      title: "Personalized Looks For Every Occasion",
      description: "Bespoke skin prep and custom color mapping for bridal, engagement, sangeet, and reception ceremonies tailored to your outfit and jewelry.",
      image: "/images/jyotikhatri2222.png",
      alt: "Personalized Looks For Every Occasion",
      borderClass: "curve-top-right"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`about-why-choose-section home-why-choose-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container" style={{ position: 'relative' }}>
        {/* ORGANIC FLOWING BACKGROUND SVG CURVE */}
        <svg
          className="why-choose-connecting-line"
          viewBox="0 0 1000 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100 120 C 350 40, 650 250, 900 180 C 1050 120, 900 500, 600 550 C 300 600, 150 720, 450 780"
            stroke="url(#whyChooseGoldGradientAbout)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="whyChooseGoldGradientAbout" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C5A059" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#E8D39E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C5A059" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* SECTION HEADER */}
        <div className="why-choose-header">
          <span className="eyebrow">OUR EXCELLENCE</span>
          <h2 className="why-choose-title">
            Why Choose Makeup by Jyoti Khatri?
          </h2>
          <p className="why-choose-description">
            Trusted by hundreds in Jodhpur, we specialize in personalized makeovers and expert beauty training to bring out your best self. With a passion for detail and innovation, we redefine beauty with every brushstroke.
          </p>
          <div className="heading-gold-line">
            <span></span>
          </div>
        </div>

        {/* ORGANIC EDITORIAL MASONRY GRID (4 ASYMMETRIC BLOCKS) */}
        <div className="why-choose-editorial-grid">
          {/* BLOCK 01 — LEFT (IMAGE -> TEXT) */}
          <div className="editorial-block block-1">
            <div className={`editorial-img-frame ${features[0].borderClass}`}>
              <img src={features[0].image} alt={features[0].alt} loading="lazy" />
            </div>
            <div className="editorial-text-box">
              <span className="editorial-num">{features[0].number}</span>
              <h3 className="editorial-title">{features[0].title}</h3>
              <p className="editorial-desc">{features[0].description}</p>
            </div>
          </div>

          {/* BLOCK 02 — RIGHT (TEXT -> IMAGE, STAGGERED DOWN) */}
          <div className="editorial-block block-2">
            <div className="editorial-text-box">
              <span className="editorial-num">{features[1].number}</span>
              <h3 className="editorial-title">{features[1].title}</h3>
              <p className="editorial-desc">{features[1].description}</p>
            </div>
            <div className={`editorial-img-frame ${features[1].borderClass}`}>
              <img src={features[1].image} alt={features[1].alt} loading="lazy" />
            </div>
          </div>

          {/* BLOCK 03 — LEFT (IMAGE -> TEXT) */}
          <div className="editorial-block block-3">
            <div className={`editorial-img-frame ${features[2].borderClass}`}>
              <img src={features[2].image} alt={features[2].alt} loading="lazy" />
            </div>
            <div className="editorial-text-box">
              <span className="editorial-num">{features[2].number}</span>
              <h3 className="editorial-title">{features[2].title}</h3>
              <p className="editorial-desc">{features[2].description}</p>
            </div>
          </div>

          {/* BLOCK 04 — RIGHT (TEXT -> IMAGE, STAGGERED DOWN) */}
          <div className="editorial-block block-4">
            <div className="editorial-text-box">
              <span className="editorial-num">{features[3].number}</span>
              <h3 className="editorial-title">{features[3].title}</h3>
              <p className="editorial-desc">{features[3].description}</p>
            </div>
            <div className={`editorial-img-frame ${features[3].borderClass}`}>
              <img src={features[3].image} alt={features[3].alt} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
